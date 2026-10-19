import api from "@/lib/api";

const AUTH_BASE_URL = "/api/v1";

export interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ContactResponse {
    message: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
    const response = await api.post(`${AUTH_BASE_URL}/contact`, payload)

   if (response.status === 422) {
      throw new Error("Please check your details and try again.");
   }

   if (response.status === 429) {
    throw new Error("Too many attempts. Please try again later.");
   }

   return response.data;
}
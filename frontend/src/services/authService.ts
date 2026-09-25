import api from "@/lib/api";
import { LoginCredentials, SignUpCredentials, ResetPasswordCredentials } from "@/types/auth";

const AUTH_BASE_URL = "/api/v1/auth";

export const authService = {
    async login(credentials: LoginCredentials) {
        return api.post(`${AUTH_BASE_URL}/login`, credentials);
    },

    async signup(credentials: SignUpCredentials) {
        return api.post(`${AUTH_BASE_URL}/register`, credentials);
    },

    async logout() {
        return api.post(`${AUTH_BASE_URL}/logout`);
    },

    async getUser() {
       return api.get(`${AUTH_BASE_URL}/user`);
    },

    async forgetPassword(email: string) {
        return api.post(`${AUTH_BASE_URL}/forgot-password`, {email});
    },

    async resetPassword(credentials: ResetPasswordCredentials) {
        return api.post(`${AUTH_BASE_URL}/reset-password`, credentials);
    },

    async resendEmail() {
        return api.post(`${AUTH_BASE_URL}/email/verification-notification`);
    },

    async loginWithGoogle() {
       return window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth/google/redirect`;
    }


}
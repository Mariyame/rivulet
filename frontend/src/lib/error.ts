import axios from "axios";

export type ApiErrors = Record<string, string[]>;
export type ApiError = {
    status?: number;
    message: string;
    errors: ApiErrors;
}

export function getApiError(error: unknown): ApiError {
    if(!axios.isAxiosError(error)) {
        return {
            message: "Something went wrong.",
            errors: {},
        }
    }
    const status = error.response?.status;
    const data = error.response?.data;

    return {
        status,
        message: data?.message ?? "Something went wrong. Please try again",
        errors: data?.errors ?? {}
        }
}


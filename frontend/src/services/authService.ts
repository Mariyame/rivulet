import api from "@/lib/api";
import { LoginCredentials, SignUpCredentials, ResetPasswordCredentials } from "@/types/auth";

const AUTH_BASE_URL = "/api/v1/auth";

export const authService = {
    async login(credentials: LoginCredentials) {
        return api.post(`${AUTH_BASE_URL}/login`, credentials);
    },

    async confirmPassword(password: string) {
        return api.post(`${AUTH_BASE_URL}/user/confirm-password`, { password });
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
        const redirect_url = `${process.env.NEXT_PUBLIC_API_URL}/oauth/google/redirect`;
        return redirect_url;
    },

    async twoFactorAuth() {
        return api.post(`${AUTH_BASE_URL}/user/two-factor-authentication`);
    },

    async getTwoFactorQrCode() {
        return api.get(`${AUTH_BASE_URL}/user/two-factor-qr-code`);
    },

    async confirmedTwoFactorAuth(code: string) {
        return api.post(`${AUTH_BASE_URL}/user/confirmed-two-factor-authentication`, {code});
    },

    async getRecoveryCodes() {
        return api.get(`${AUTH_BASE_URL}/user/two-factor-recovery-codes`);
    },

    async disabledTwoFactorAuth() {
        return api.delete(`${AUTH_BASE_URL}/user/two-factor-authentication`);
    },

    async updateUserProfile(name: string, email: string) {
        return api.put(`${AUTH_BASE_URL}/user/profile-information`, {name, email});
    },

    async twoFactorChallenge(code: string) {
        return api.post(`${AUTH_BASE_URL}/two-factor-challenge`, {code});
    },

    async twoFactorRecoveryChallenge(recoveryCode: string) {
         return api.post(`${AUTH_BASE_URL}/two-factor-challenge`, {recovery_code: recoveryCode});
   },

    async disableTwoFactorAuth() {
        return api.delete(`${AUTH_BASE_URL}/user/two-factor-authentication`)
    }




}
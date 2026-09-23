export type User = {
    id: number;
    name: string;
    email: string;
};

export type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    signup: (credentials: SignUpCredentials) => Promise<void>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    refreshUser: () => Promise<void>;
    resendEmail: () => Promise<void>;
}

export type LoginCredentials = {
    email: string;
    password: string;
};

export type SignUpCredentials = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string
}

export type ResetPasswordCredentials = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string
}

export type AuthFromProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  errors?: Record<string, string[]>;
  message?: string;
  isSubmitting?: boolean;
}

export type AuthResponse = {
    message: string;
}

export type verifyEmailProps = {
    email: string,
    timeLeft: number,
    handleResendEmail: () => Promise<void>
}

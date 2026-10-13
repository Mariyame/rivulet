export type User = {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    joined: Date; // May 2024
    verified: boolean;
    twoFA: boolean;    
    avatarFallback: () => string
};

export type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    isVerified: boolean | undefined;
    login: (credentials: LoginCredentials) => Promise<void>;
    confirmPassword: (password: string) => Promise<void>;
    signup: (credentials: SignUpCredentials) => Promise<void>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    refreshUser: () => Promise<void>;
    resendEmail: () => Promise<void>;
    twoFactorAuth: () => Promise<void>;
    twoFactorQrCode: () => Promise<void>;
    confirmedTwoFactorAuth: (code: string) => Promise<void>;
    recoveryCodes: () => Promise<void>;
    disabledTwoFactorAuth: () => Promise<void>;
    updateUserProfileInformation: (name: string, current_email: string) => Promise<void>;
};

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
  handleGoogleLogin?: () => Promise<void>;
  email?: string,
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

export type ProfileProps = {
    user: User | null
}

export type TwoFactorStep =
  | "password"
  | "setup"
  | "verify"
  | "recovery";

export type TwoFADialogProps = {
    open: boolean,
    onChangeOpen: (open: boolean) => void;
  }

 export type TwoFAStepProps = {
    handleSubmit?: React.FormEventHandler<HTMLFormElement>;
    errors?: Record<string, string[]>;
    message?: string;
    isLoading?: boolean;
 } 

 export interface VerifyCodesStepProps {
    handleVerifyCodes?: (event: React.FormEvent<HTMLFormElement>) => void;
    handleTwoFactorChallenge?: (event: React.FormEvent<HTMLFormElement>) => void;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    errors?: Record<string, string[]>;
    onBack?: () => void
}

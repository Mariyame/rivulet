'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ChangeEmailForm } from '@/features/auth/ChangeEmailForm';
import { getApiError } from '@/lib/error';
import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation'


export default function VerifyEmail() {
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useAuth();
    const email = user ? user.email : "";
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({});
        setMessage('');
        setIsSubmitting(true);
        
        try {

            const formData = new FormData(e.currentTarget);
            const new_email = formData.get("email");
            const name = user?.name;

            if(typeof new_email !== "string" || typeof name !== "string") {
                return;
            }

            await authService.updateUserProfile(name, new_email);
            router.replace("/verify-email");

        } catch (error) {

           const response = getApiError(error);

           if(response.status === 422) {
               setErrors(response.errors);
               return;
           }
           setMessage("🎉 Your email has been verified successfully.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
       <ChangeEmailForm
            email={email}
            errors={errors}
            message={message}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
       />
    );
} 
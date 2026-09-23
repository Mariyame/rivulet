'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import { authService } from '@/services/authService';
import { getApiError } from '@/lib/error';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
    const router = useRouter();
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const searchParams = useSearchParams();
    const token = searchParams.get("token") ?? "";
    const email = searchParams.get("email") ?? "";
    

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            setErrors({});
            setMessage("");
            setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);

            const password = formData.get("password")
            const password_confirmation = formData.get("password_confirmation");

            if(typeof password !== "string" || typeof password_confirmation !== "string") {
              return;
            }

            const response = await authService.resetPassword({
                token,
                email,
                password,
                password_confirmation
            });
           setMessage(response.data.message); 
           router.replace("login");
           

        } catch(error: unknown) {
          const response = getApiError(error);

          if(response.status === 422) {
            setErrors(response.errors);
            return;
          }
          setMessage(response.message);
            
        } finally {
          setIsSubmitting(false);
        }
    }
    return(
      <ResetPasswordForm 
        handleSubmit={handleSubmit}
        errors={errors}
        message={message}
        isSubmitting={isSubmitting}
      />
    )
}
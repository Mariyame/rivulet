'use client';

import { useState } from 'react';
import { LoginForm }  from "@/features/auth/LoginForm";
import { authService } from '@/services/authService';
import { getApiError } from '@/lib/error';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';


export default function Login() {
   
      const [errors, setErrors] = useState<Record<string, string[]>>({});
      const [message, setMessage ]= useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const router = useRouter();
       const { refreshUser } = useAuth()
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setErrors({});
        setMessage("");
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            
            const email = formData.get("email");
            const password = formData.get("password");

            if(typeof email !== "string" || typeof password !== "string") {
                return;
            }

            const response = await authService.login({
                email,
                password
            });


            if(response.data.two_factor) {
               router.replace('/two-factor-challenge')
            } else {
                await refreshUser();
                router.replace('/dashboard')
            }
       
        
        } catch(error: unknown) {
            const response = getApiError(error);
  
            if(response.status === 422) {
                setErrors(response.errors);
                return;
            }

            if(response.status === 401) {
                setMessage("The email or password is incorrect.");
                return;
            }
            setMessage(response.message);
        }
        finally{
            setIsSubmitting(false);
        }
    }
    const handleGoogleLogin = async () => {

        setErrors({});
        setMessage('');
        setIsSubmitting(true);

      try{
        const redirect_url = await authService.loginWithGoogle();
        router.push(redirect_url)
       

      } catch (error) {
        const response = getApiError(error);
        if(response.status === 422) {
            setErrors(response.errors);
        }

        setMessage(response.message);
      }
      finally {
        setIsSubmitting(false);
      }
    }

  return (
    <>
    <LoginForm 
      handleSubmit={handleSubmit}
      handleGoogleLogin={handleGoogleLogin}
      errors={errors}
      message={message}
      isSubmitting={isSubmitting}
      />
    </>
  );
} 

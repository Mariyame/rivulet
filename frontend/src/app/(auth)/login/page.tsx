'use client';

import { useState } from 'react';
import { LoginForm }  from "@/components/auth/LoginForm";
import { useAuth } from '@/hooks/useAuth';
import { getApiError } from '@/lib/error';
import { useRouter } from 'next/navigation';


export default function Login() {
   
      const { login } = useAuth();
      const [errors, setErrors] = useState<Record<string, string[]>>({});
      const [message, setMessage ]= useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const router = useRouter();
  
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
            login({
                email,
                password
            });
        router.replace("/dashboard");
        
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

  return (
      <LoginForm 
        handleSubmit={handleSubmit}
        errors={errors}
        message={message}
        isSubmitting={isSubmitting}
        />
  );
} 

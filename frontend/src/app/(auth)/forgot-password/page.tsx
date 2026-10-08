
'use client';

import { useState } from 'react';
import { ForgotPasswordForm } from '@/features/auth/ForgotPasswordForm';
import { authService } from '@/services/authService';
import { getApiError } from '@/lib/error';


export default function ForgetPassword() {
  
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const  handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setIsSubmitting(true);

    try{
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      if(typeof email !== "string") {
        return;
      }
       const response = await authService.forgetPassword(email);
       setMessage(response.data.message);
       
    } catch (error){
      const response = getApiError(error);

      if(response.status === 422) {
        setErrors(response.errors);
        return;
      }
      setMessage(response.message)

       
    } finally {
        setIsSubmitting(false);
    }
  }
  return (
    <ForgotPasswordForm 
    handleSubmit={handleSubmit}
    errors={errors}
    message={message}
    isSubmitting={isSubmitting}
    />

  );
}
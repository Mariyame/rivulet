'use client';

import { FormEvent, useState } from 'react';
import { authService } from '@/services/authService';
import { getApiError } from '@/lib/error';
import { useRouter } from 'next/navigation';
import { TwoFactorRecoveryCodeForm } from '@/features/auth/TwoFactorRecoveryCodeForm';
import { useAuth } from '@/hooks/useAuth';


export default function TwoFactorRecoveryCode() {
   
      const [code, setCode] = useState('')
      const [errors, setErrors] = useState<Record<string, string[]>>({});
      const [message, setMessage]= useState('')
      const router = useRouter();
      const { refreshUser } = useAuth();

      const handleVerifyCodes = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setMessage('')
        setErrors({})
      
        try{
          const response = await authService.twoFactorRecoveryChallenge(code)
          if(response.status === 204) {
              await refreshUser();
              router.replace("/dashboard");
              return;
          }
        }catch (error: unknown) {
          const response = getApiError(error)
          setErrors(response.errors)
          setMessage(response.message)
        }
      }
  
  return (
    <TwoFactorRecoveryCodeForm 
      handleTwoFactorChallenge={handleVerifyCodes}
      code={code}
      setCode={setCode}
      message={message}
      errors={errors}
      />
  );
} 

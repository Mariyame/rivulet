'use client';

import { FormEvent, useState } from 'react';
import { authService } from '@/services/authService';
import { getApiError } from '@/lib/error';
import { useRouter } from 'next/navigation';
import { TwoFactorChallengeForm } from '@/features/auth/TwoFactorChallengeForm';
import { useAuth } from '@/hooks/useAuth';


export default function TwoFactorChallenge() {
   
      const [code, setCode] = useState('')
      const [errors, setErrors] = useState<Record<string, string[]>>({});
      const [message, setMessage ]= useState('')
      const router = useRouter();
      const { refreshUser } = useAuth();

      const handleVerifyCodes = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setErrors({})
        setMessage('')

        try{
          const response = await authService.twoFactorChallenge(code)
          console.log('2FA response:', response.status, response.data);
          if(response.status === 204) {
              await refreshUser();
              router.replace("/dashboard");
              return;
          } 
     
        } catch (error: unknown) {
          const response = getApiError(error)
          setErrors(response.errors ?? {})
          setMessage(response.message)
        }
      }
  
  return (
    <TwoFactorChallengeForm 
      handleTwoFactorChallenge={handleVerifyCodes}
      code={code}
      setCode={setCode}
      message={message}
      errors={errors}
      />
  );
} 

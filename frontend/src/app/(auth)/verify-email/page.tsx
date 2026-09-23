'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { EmailVerificationNotice } from '@/components/auth/EmailVerificationNotice';

export default function VerifyEmail() {
    const [timeLeft, setTimeLeft] = useState(60);
    const { resendEmail, user } = useAuth();
    const email = user ? user.email : "";
    
    useEffect(() => {
        if(timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if(prev <= 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return Math.max(prev - 1, 0);
                }
            });
        },1000);
        return () => clearInterval(timer);
    },);

    const handleResendEmail = async () => {
      resendEmail();
      setTimeLeft(60);
    }
   
    return(
       <EmailVerificationNotice 
            email={email}
            timeLeft={timeLeft}
            handleResendEmail={handleResendEmail}
       />
    );
} 
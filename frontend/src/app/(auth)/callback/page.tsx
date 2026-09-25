'use client';

import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export default function AuthCallBack() {
    const router = useRouter();
     useEffect(() => {
        const authenticate = async () => {
            try {
                await authService.getUser();
                router.replace('/dashboard');
            }catch {
                router.replace('/login');
            }

        }
        authenticate();
     },[router]) 
    return <div>Signing in...</div>;
}
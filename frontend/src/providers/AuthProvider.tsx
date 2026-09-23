'use client';

import { useState, useEffect, useRef } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { LoginCredentials, SignUpCredentials, User } from '@/types/auth';
import { authService } from '@/services/authService';

export function AuthProvider({children}: {children: React.ReactNode}) {
    
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const requestId = useRef(0);
    
    useEffect(() => {
        const currentRequestId = ++requestId.current;

        async function initializeAuth() {
            try {
                const response = await authService.getUser();

                if (currentRequestId !== requestId.current) {
                    return;
                }

                setUser(response.data);
            } catch (error) {
                if (currentRequestId !== requestId.current) {
                    return;
                }

                setUser(null);
                console.log(
                    'No authenticated user:',
                    error
                );
            } finally {
                if (currentRequestId === requestId.current) {
                    setIsLoading(false);
                }
            }
        }

        initializeAuth();
    }, []);

  

    const login = async (credentials: LoginCredentials) => {
        requestId.current++;
        setIsLoading(true)
       try{
           const response = await authService.login(credentials);
           setUser(response.data);

       } catch {
           setUser(null);
       } finally {
           setIsLoading(false);
       }
    };

    async function signup(credentials: SignUpCredentials) {
        try {
            await authService.signup(credentials);
            const response = await authService.getUser();
            setUser(response.data);
        }catch {
           setUser(null);
        } finally {
            setIsLoading(false);
        }
    }; 

    const logout = async () => {
        try {
           await authService.logout();
        } finally {
            requestId.current++;
            setUser(null);
        }
    };

    const forgotPassword = async (email: string) => {
        await authService.forgetPassword(email);
    };

    const resendEmail = async () => {
        await authService.resendEmail();
    }


    return(
     <AuthContext value=
         {{
            user,
            isLoading,
            isAuthenticated: user !== null,
            login,
            signup,
            logout,
            forgotPassword,
            refreshUser: async () => {
                const response = await authService.getUser();
                setUser(response.data);
            },
            resendEmail,
         }}
        >
        {children}
     </AuthContext>
    );
}
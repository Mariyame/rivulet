'use client';

import { SignupForm } from "@/features/auth/SignupForm";
import { useAuth } from "@/hooks/useAuth";
import { useState } from 'react';
import { SignUpCredentials } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  
     const [errors, setErrors] = useState({});
     const [message, setMessage] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const router = useRouter();
     const { signup } = useAuth();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setErrors({});
        setMessage("");
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const password_confirmation = formData.get("password_confirmation")

        if(
          typeof name !== "string" ||
          typeof email !== "string" ||
          typeof password !== "string" ||
          typeof password_confirmation !== "string"
        ){
          setMessage("Please complete all fields.");
          setIsSubmitting(false);
          return;
        }
        const data: SignUpCredentials = {
          name,
          email,
          password,
          password_confirmation
        };
      
        signup(data);
        router.replace("/verify-email")
      }

  return (
     <SignupForm 
         handleSubmit={handleSubmit}
         errors={errors}
         message={message}
         isSubmitting={isSubmitting}
     />
  );
} 

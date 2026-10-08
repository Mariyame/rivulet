'use client'

import { FormEvent, useState } from "react";
import { getApiError } from "@/lib/error";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ConfirmPasswordStep } from "./confirm-password-step";
import { SetupAuthenticatorSetupStep } from "./setup-authenticator-step";
import { VerifyCodesStep } from "./verify-codes-step";
import { SaveRecoveryCodesStep } from "./recovery-codes-step";
import { authService } from "@/services/authService";
import { TwoFADialogProps } from "@/types/auth";
import { TwoFactorChallenge } from "./two-factor-challenge";
import { useRouter } from "next/navigation"


export function TwoFactorAuthDialog ({open, onChangeOpen}: TwoFADialogProps) {

    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [qrCode, setQrCode] = useState('')
    const [step, setStep] = useState("challenge")
    const [code, setCode] = useState('')
    const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
    const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrors({})
    setMessage('')
    setIsLoading(true)
  

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");

    if(typeof password !== "string") {
      return;
    }

    try{
      await authService.confirmPassword(password);
      await authService.twoFactorAuth()
      const response = await authService.getTwoFactorQrCode();
      
      if(response.data.length !== 0)  {
        setQrCode(response.data.svg) 
        setStep("setup")
      }else {
           setMessage("Something went wrong!");
      }
    }catch (error: unknown){
     const response = getApiError(error);

     if(response.status === 401) {
      setMessage("Oops!");
      return;
     }

     setMessage(response.message);

    }finally {
      setIsLoading(false);
    }
  }

  const handleVerifyCodes = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     try{
      await authService.confirmedTwoFactorAuth(code)
      const recoveryCodes = await authService.getRecoveryCodes();
      setRecoveryCodes(recoveryCodes.data);
      setStep("done")
     }catch (error: unknown) {
      const response = getApiError(error)
      setMessage(response.message)
     }
  }

    const handleTwoFactorChallenge = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     try{
      const response  = await authService.twoFactorChallenge(code)
      if(response.status === 204) {
        setMessage("Login is successful")
        router.replace('/dashboard')
      }

     }catch (error: unknown) {
      const response = getApiError(error)
      setMessage(response.message)
     }
  }

  return (
    <Dialog open={open} onOpenChange={onChangeOpen}>
      <DialogContent className="sm:max-w-md">
      {step === "password" && (
        <ConfirmPasswordStep 
          handleSubmit={handleSubmit}
          errors={errors}
          message={message}
          isLoading={isLoading}
          />
      )}
      {step === "setup" && (
        <SetupAuthenticatorSetupStep 
        qrCode={qrCode} 
        message={message} 
        onContinue={() => setStep("verify")}
        />
      )}
      {step === "verify" && (
       <VerifyCodesStep 
       handleVerifyCodes={handleVerifyCodes}
       code={code}
       setCode={setCode}
       message={message}
       onBack={() => setStep("setup")}
       />
      )}

      {step === "done" && (
        <SaveRecoveryCodesStep 
        recoveryCodes={recoveryCodes} 
        onDone={() => setStep("done")}
        />
      )} 
      {step === "challenge" && (
        <TwoFactorChallenge 
          handleTwoFactorChallenge={handleTwoFactorChallenge}
          code={code}
          setCode={setCode}
          message={message}
        />
      )}
      </DialogContent >
    </Dialog>
  );
} 



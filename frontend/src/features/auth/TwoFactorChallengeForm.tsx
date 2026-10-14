import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { InfoIcon } from "lucide-react";
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldLegend } from "@/components/ui/field";
import { VerifyCodesStepProps } from "@/types/auth"


export function TwoFactorChallengeForm({
    handleTwoFactorChallenge, 
    code, 
    setCode, 
    message
}: VerifyCodesStepProps) {
    return(
     <div className="w-full max-w-md p-6"> 
        <form onSubmit={handleTwoFactorChallenge}>
            <FieldSet>
            <FieldLegend className='font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]'>Check your code</FieldLegend>
            <FieldDescription className='text-[17px] text-slate-pum'>Enter the 6-digit code from your authenticator app to finish logging in.</FieldDescription>
            <FieldGroup>
             {message && <InputError message={message} className="mt-1" />}
            <Field>
            <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                Verification code
                </FieldLabel>
                {/* <Button variant="outline" size="xs">
                <RefreshCwIcon />
                Resend Code
                </Button> */}
            </div>
            <InputOTP 
                maxLength={6} 
                pattern={REGEXP_ONLY_DIGITS}
                id="otp-verification" 
                value={code}
                onChange={setCode}
                required
                >
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
    
            <FieldDescription className="flex items-center gap-2">
                <InfoIcon className="text-primary size-4"/> 
                Don&apos;t have access to your authenticator app?
                <a href="/recovery-code">Use a recovery code</a>
            </FieldDescription>
            </Field>
            <Button
                type="submit" 
                disabled={code.length !== 6 }
                className="w-full"
                size='md'>
                Verify
            </Button>
            </FieldGroup>
            </FieldSet>
        </form>
       </div>  
    )
}
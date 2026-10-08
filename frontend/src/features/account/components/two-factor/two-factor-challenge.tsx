import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { InfoIcon, RefreshCwIcon } from "lucide-react";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { VerifyCodesStepProps } from "@/types/auth"
import { DialogClose } from "@/components/ui/dialog";


export function TwoFactorChallenge({
    handleTwoFactorChallenge, 
    code, 
    setCode, 
    message,
}: VerifyCodesStepProps) {
  
    return (
        <form onSubmit={handleTwoFactorChallenge}>
            <DialogHeader>
            <DialogTitle>Two-Factor Authentication</DialogTitle>
            <DialogDescription>
                For your security, please enter the 6-digit code from your authenticator app.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            {message && <InputError message={message} className="mt-1" />}
            <div className="grid gap-2">
            <Field>
            <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                Verification code
                </FieldLabel>
                <Button variant="outline" size="xs">
                <RefreshCwIcon />
                Resend Code
                </Button>
            </div>
            <InputOTP 
                maxLength={6} 
                id="otp-verification" 
                value={code}
                onChange={setCode}
                required>
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator className="mx-2" />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
            <FieldDescription>
                <p><InfoIcon /> Don&apos;t have access to your authenticator app?</p>
                <a href="#">Use a recovery code</a>
            </FieldDescription>
            </Field>
            </div>
            </div>
            <DialogFooter>
            <DialogClose>
            <Button variant="link">
                Cancel
            </Button>
            </DialogClose>

            <Button type="submit" disabled={code.length !== 6 }>
                Verify
            </Button>
            </DialogFooter>
        </form>
    )
}
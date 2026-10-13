import InputError from "@/components/input-error";
import TextLink from "@/components/text-link";
import { Alert, AlertDescription} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldLegend } from "@/components/ui/field";
import { VerifyCodesStepProps } from "@/types/auth"
import { Input } from "@base-ui/react";
import { ArrowLeft, InfoIcon } from "lucide-react";


export function TwoFactorRecoveryCodeForm({
    handleTwoFactorChallenge, 
    code, 
    setCode, 
    message,
}: VerifyCodesStepProps) {
    return(
     <div className="w-full max-w-md p-6"> 
        <form onSubmit={handleTwoFactorChallenge}>
            <FieldSet>
            <FieldLegend className='font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]'>Use a recovery code</FieldLegend>
            <FieldDescription className='text-[17px] text-slate-pum mt-2.5'>Enter one of your 8-character recovery codes to finish logging in.</FieldDescription>
            <FieldGroup>
             {message && <InputError message={message} className="mt-1" />}
            <Field>
            <FieldLabel htmlFor="recovery-code">Recovery code</FieldLabel>
              <Input
                id="recovery-code"
                name="recoveryCode"
                type="text"
                placeholder="xxxx-xxxx"
                autoComplete="off"
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck={false}
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-12 px-5 rounded-[14px] border-2 border-[#8F84A8] bg-white placeholder:text-foreground placeholder:font-heading placeholder:font-bold placeholder:text-[24px] placeholder:tracking-[3px] placeholder:uppercase"
            />
        
            </Field>
            <Alert className="w-full bg-[#FFF4E2]">
            <InfoIcon />
            <AlertDescription>
                 Each code works only once. After you log in, you can make a new set in Security.
            </AlertDescription>
            </Alert>
            <Button
                type="submit" 
                className="w-full"
                size='md'>
                Verify and log In
            </Button>
            <TextLink href="/two-factor-challenge" tabIndex={6} className=" underline">
                Use my authenticator app instead
            </TextLink>
            <div className="flex gap-1 -mt-3">
            <p>Lost your codes too? </p>
            <TextLink href="support" className="underline">
                Contact support
            </TextLink>
            </div>
            <TextLink href="/login" 
            className="flex flex-row gap-2 items-center self-start underline">
            <ArrowLeft size={15}/>
            Back to log In
            </TextLink>  
            </FieldGroup>
            </FieldSet>
        </form>
       </div>  
    )
}
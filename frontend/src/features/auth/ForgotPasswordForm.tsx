import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkText  from "@/components/text-link";
import InputError from "@/components/input-error";
import { AuthFromProps } from "@/types/auth";
import { ArrowLeft } from "lucide-react";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";


export function ForgotPasswordForm(
    {
        handleSubmit,
        errors,
        message,
        isSubmitting
    }: AuthFromProps) {

    return(
       <div className="w-full max-w-md p-6">  
        <form onSubmit={handleSubmit} className="space-y-6">
            {message && (
                <p className="text-(--success)">
                {message}
                </p>
            )}
            <FieldSet>
            <FieldLegend className="font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]">Forgot your Password?</FieldLegend>
            <FieldDescription className="text-[17px] text-slate-pum font-medium">Enter the email you signed up with and we will send you a link to reset it.</FieldDescription>
            <FieldGroup>
            <Field>
            <FieldLabel htmlFor="email" className="text-sm font-semibold">
                Email
            </FieldLabel>
            <Input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
            />
            </Field>
            <InputError message={errors?.email?.[0]} className="mt-1" />
            <Button
            type="submit"
            size="lg"
            className="w-full"
            >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>   
            <LinkText href="/login" 
            className="flex flex-row gap-2 items-center self-start text-sm text-muted-foreground"
            >
            <ArrowLeft size={15}/>
            Back to Log In
            </LinkText>  
            </FieldGroup>
            </FieldSet>       
        </form>
        </div>
    )
}
import  PasswordInput  from "@/components/password-input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthFromProps } from "@/types/auth";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";

export function ResetPasswordForm(
    {
        handleSubmit, 
        errors, 
        message, 
        isSubmitting
    }: AuthFromProps) {
    return(
         <div className="w-full max-w-md p-6">  
          <form 
          onSubmit={handleSubmit}
          className="w-full space-y-4"
          >
       <FieldSet>
            <FieldLegend className="font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]">Set a new password</FieldLegend>
            <FieldDescription className="text-[17px] text-slate-pum font-medium">
                Choose something you will remember. Use at least 8 characters.
            </FieldDescription>
        <FieldGroup>
          {message && <InputError message={message} className="mt-1"/>}
          <FieldLabel htmlFor="password" className="text-sm font-semibold">
            Password
          </FieldLabel>
          <PasswordInput
            id="password"
            name="password"
            required
            tabIndex={3}
            autoComplete="new-password"
            placeholder="At least 8 characters"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.password?.[0]} className="mt-1" />
          <InputError message={errors?.password?.[1]} className="mt-0" />
          <InputError message={errors?.email?.[0]} className="mt-0" />
        
        <Field>
          <FieldLabel htmlFor="password_confirmation" className="text-sm font-semibold">
            Confirm Password
          </FieldLabel>
          <PasswordInput
            id="password_confirmation"
            name="password_confirmation"
            required
            tabIndex={4}
            autoComplete="password-confirmation"
            placeholder="Type it once more"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
        </Field>
        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? <><span>Changing...</span> <Spinner /></> : 'Change'}
        </Button>
        </FieldGroup>
        </FieldSet>
      </form>
    </div>

    );
}
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthFromProps } from "@/types/auth";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { MailIcon } from "lucide-react";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function ChangeEmailForm(
    {
        handleSubmit, 
        email,
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
            <FieldLegend className="font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]">Change your Email</FieldLegend>
            <FieldDescription className="text-[17px] text-slate-pum font-medium">
               Enter your new email address. We&apos;ll send a verification link to confirm the change.
            </FieldDescription>
        <FieldGroup>
          {message && <InputError message={message} className="mt-1"/>}
        <Field data-disabled>
          <FieldLabel htmlFor="new-email">Current email</FieldLabel>
          <Input
            id="new-email"
            type="email"
            name="current-email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            required
            disabled
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email" className="text-sm font-semibold">
            New email
          </FieldLabel>
          <InputGroup>
            <InputGroupInput 
            id="email"
            type="email" 
            name="email"
            placeholder="Enter your email"
            tabIndex={3}
            className="w-full px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
            />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputError message={errors?.email?.[0]} className="mt-1" />          
        </Field>
        <Button
          type="submit"
          size="lg"
          className="w-full px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
        >
          {isSubmitting ? <><span>Changing...</span> <Spinner /></> : 'Change'}
        </Button> 
        </FieldGroup>
      </FieldSet>
      </form> 
    </div>

    );
}
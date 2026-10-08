import Image from "next/image";
import { Label } from "@/components/ui/label";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthFromProps } from "@/types/auth";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { MailIcon } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
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
        <div className="w-full max-w-md flex flex-col items-center justify-center rounded-2xl p-6 bg-white">
            <Image 
                src="/logo/secondary-logo.svg"
                alt="TaskJoy Logo"
                width={100}
                height={100}
                className='py-4'
            />
            <h2 className="text-center text-2xl font-bold">Change your Email</h2>
            <p className="text-sm text-muted-foreground text-center">
               Enter your new email address. We&apos;ll send a verification link to confirm the change.
            </p>
          <form 
          onSubmit={handleSubmit}
          className="w-full space-y-4"
          >
           {message && (
            <p className="text-(--success) mt-2">
              {message}
            </p>
           )}
        <div className="flex flex-col gap-1">
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
          <Label htmlFor="email" className="text-sm font-semibold">
            New email
          </Label>
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
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? <><span>Changing...</span> <Spinner /></> : 'Change'}
        </Button>
      </form>
    </div>

    );
}
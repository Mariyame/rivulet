import Image from "next/image";
import { Label } from "@/components/ui/label";
import  PasswordInput  from "@/components/password-input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AuthFromProps } from "@/types/auth";

export function ResetPasswordForm(
    {
        handleSubmit, 
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
            <h2 className="text-center text-2xl font-bold">Change your Password</h2>
            <p className="text-sm text-muted-foreground text-center">
                Change your password.
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
          <Label htmlFor="password" className="text-sm font-semibold">
            Password
          </Label>
          <PasswordInput
            id="password"
            name="password"
            required
            tabIndex={3}
            autoComplete="new-password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.password?.[0]} className="mt-1" />
          <InputError message={errors?.password?.[1]} className="mt-0" />
          <InputError message={errors?.email?.[0]} className="mt-0" />
          
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="password_confirmation" className="text-sm font-semibold">
            Confirm Password
          </Label>
          <PasswordInput
            id="password_confirmation"
            name="password_confirmation"
            required
            tabIndex={4}
            autoComplete="password-confirmation"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
        </div>
        <Button
          type="submit"
    
          className="w-full rounded-xl bg-primary py-2 text-white hover:bg-primary/90 focus:outline-none focus:ring focus:ring-primary/50"
        >
          {isSubmitting ? <><span>Changing...</span> <Spinner /></> : 'Change'}
        </Button>
      </form>
    </div>

    );
}
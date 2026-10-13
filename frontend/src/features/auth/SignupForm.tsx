import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
// import { AppleIcon } from '@/public/icons/apple';
import { GoogleIcon } from '@/public/icons/google';
import { AuthFromProps } from '@/types/auth';
import { authService } from '@/services/authService';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';

export function SignupForm({
  handleSubmit,
  errors,
  message,
  isSubmitting
}: AuthFromProps) {
    return(
      <div className="w-full max-w-md p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg space-y-4"
       >
        <FieldSet className="mt-6">
          <FieldLegend className='font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]'>Create your account</FieldLegend>
          <FieldDescription className='text-[17px] text-slate-pum'> It takes a minute. No card needed.</FieldDescription>
          <FieldGroup>
          {message && <InputError message={message} className="mt-1"/>}
          <Field>
          <Label htmlFor="name" className="text-[14px] font-bold">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            autoFocus
            tabIndex={1}
            autoComplete="name"
            placeholder="What should we call you?"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.name?.[0]} className="mt-1" />
        </Field>
        <Field>
          <Label htmlFor="email" className="text-[14px] font-bold">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            tabIndex={2}
            autoComplete="email"
            placeholder="you@email.com"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.email?.[0]} className="mt-1" />
        </Field>
        <Field>
          <FieldLabel htmlFor="password" className="text-[14px] font-bold">
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
        </Field>
        <Field>
          <FieldLabel htmlFor="password_confirmation" className="text-[14px] font-bold">
            Confirm Password
          </FieldLabel>
          <PasswordInput
            id="password_confirmation"
            name="password_confirmation"
            required
            tabIndex={4}
            autoComplete="new-password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.password?.[1]} className="mt-1" />
        </Field>
        <Button
          type='submit'
          disabled={isSubmitting}
          className="w-full"
          size='md'
        >
          {isSubmitting && <Spinner />}
          Create account
        </Button>
          <p className="text-muted-foreground text-center">or connect with</p>
          {/* <div className="w-full flex gap-2"> */}
                <Button
                    type="submit"
                    onClick={authService.loginWithGoogle}
                    className="w-full"
                    variant='secondary'
                    size='md'
                    >
                    <GoogleIcon size={20}/>
                    Google
                </Button>
                {/* <button
                    disabled
                    className="flex gap-2 basis-1/2 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-primary/50"
                    >
                    <AppleIcon size={20}/>
                    Apple
                </button> */}
          {/* </div> */}
          </FieldGroup>
          <div className="text-muted-foreground text-center text-sm">
            Already have an account?{' '}
            <TextLink href="/login" tabIndex={6} className="text-primary hover:text-primary/90 hover:underline">
                Log in
            </TextLink>
         </div>
         </FieldSet>
      </form>
   </div>
    );
}
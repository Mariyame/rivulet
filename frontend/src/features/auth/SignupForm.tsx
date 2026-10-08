import Image from 'next/image';
// import type { Metadata } from "next";

import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { AppleIcon } from '@/public/icons/apple';
import { GoogleIcon } from '@/public/icons/google';
import { AuthFromProps } from '@/types/auth';
import { authService } from '@/services/authService';

export function SignupForm({
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
        <h2 className="text-center text-2xl font-bold">Create your account</h2>
        <p className="text-sm text-muted-foreground text-center">
          Start your productivity journey today.
        </p>
     <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg p-6 space-y-4"
       >
        {message && 
        <p className="text-(--success) mt-2">
            {message}
        </p>
        }
        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className="text-sm font-semibold">
            Full name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            autoFocus
            tabIndex={1}
            autoComplete="name"
            placeholder="Full name"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.name?.[0]} className="mt-1" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-sm font-semibold">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            tabIndex={2}
            autoComplete="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.email?.[0]} className="mt-1" />
        </div>
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
            autoComplete="new-password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-4 focus:border-primary focus:ring focus:ring-primary/50"
          />
          <InputError message={errors?.password?.[1]} className="mt-1" />
        </div>
        <Button
          type='submit'
          disabled={isSubmitting}
          className="w-full"
          size='lg'
        >
          {isSubmitting && <Spinner />}
          Sign Up
        </Button>
          <p className="text-muted-foreground text-center">or connect with</p>
          {/* <div className="w-full flex gap-2"> */}
                <Button
                    type="submit"
                    onClick={authService.loginWithGoogle}
                    className="w-full"
                    variant='secondary'
                    size='lg'
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
        <div className="text-muted-foreground text-center text-sm">
            Already have an account?{' '}
            <TextLink href="/login" tabIndex={6} className="text-primary hover:text-primary/90 hover:underline">
                Log in
            </TextLink>
        </div>
      </form>
    </div>
    );
}
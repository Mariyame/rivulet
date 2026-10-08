import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  TextLink  from "@/components/text-link";
import PasswordInput from "@/components/password-input";
import InputError from '@/components/input-error';
// import { AppleIcon } from '@/public/icons/apple';
import { GoogleIcon } from '@/public/icons/google';
import { AuthFromProps } from "@/types/auth";



export function LoginForm({
    handleSubmit,
    handleGoogleLogin,
    errors,
    message,
    isSubmitting = false
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
                <h2 className="text-center text-2xl font-bold">Welcome back!</h2>
                <p className="text-sm text-muted-foreground text-center">
                   Login to continue organizing your tasks.
                </p>
            <form
                onSubmit={handleSubmit}
                className="w-full p-6 space-y-4"
            >
                <InputError message={message} className="mt-1" />
            
                <div className="flex flex-col gap-1">
                <Label htmlFor="email" className="text-sm font-semibold">
                    Email address
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
                />
                <InputError message={errors?.email?.[0]} className="mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <Label htmlFor="password" className="text-sm font-semibold">
                    Password
                    </Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/90 hover:underline">
                    Forget password?
                    </Link>
                </div>
                <PasswordInput
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="Password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
                />
                <InputError message={errors?.password?.[0]} className="mt-1" />
                </div>
                <Button
                type="submit"
                size="lg"
                className="w-full"
                >
                {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
        
                <p className="text-muted-foreground text-center">or connect with</p>
                {/* <div className="w-full flex gap-2"> */}
                    <Button
                        onClick={handleGoogleLogin}
                        className="w-full"
                        variant="secondary"
                        size="lg"
                        >
                        <GoogleIcon size={20}/>
                        Google
                    </Button>
                    {/* <button
                        type="submit"
                        disabled
                        className="flex gap-2 basis-1/2 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-primary/50"
                        >
                        <AppleIcon size={20}/>
                        Apple
                    </button> */}
                {/* </div> */}
                <div className="text-muted-foreground text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <TextLink href="/signup" className="text-primary hover:underline">
                    Sign up
                    </TextLink>
                </div>
            </form>
        </div>  
    )
}
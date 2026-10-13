import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  TextLink  from "@/components/text-link";
import PasswordInput from "@/components/password-input";
import InputError from '@/components/input-error';
// import { AppleIcon } from '@/public/icons/apple';
import { GoogleIcon } from '@/public/icons/google';
import { AuthFromProps } from "@/types/auth";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";


export function LoginForm({
    handleSubmit,
    handleGoogleLogin,
    errors,
    message,
    isSubmitting = false
}: AuthFromProps) {
    return(
        <div className="w-full max-w-md p-6">  
            <form onSubmit={handleSubmit}
            className="w-full max-w-md rounded-lg space-y-4">
            <FieldSet className="mt-6">
                <FieldLegend className="font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]">Welcome back</FieldLegend>
                <FieldDescription className="text-[17px] text-slate-pum font-medium">
                   Log in to see today&apos;s drops and keep your streak flowing.
                </FieldDescription>
                <FieldGroup>
                <InputError message={message} className="mt-1"/>
                <Field>
                <FieldLabel htmlFor="email">
                    Email
                </FieldLabel>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-primary bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
                />
                <InputError message={errors?.email?.[0]} className="mt-1" />
                </Field>
                <Field>
                <div className="flex justify-between">
                    <FieldLabel htmlFor="password">
                    Password
                    </FieldLabel>
                    <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/90 underline">
                    Forget password?
                    </Link>
                </div>
                <PasswordInput
                    id="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="Password"
                    className="w-full rounded-xl border border-primary bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
                />
                <InputError message={errors?.password?.[0]} className="mt-1" />
                </Field>
                <Field orientation="horizontal">
                    <Checkbox id="remember-me"/>
                    <FieldLabel htmlFor="remember-me">
                        Keep me logged on on this device.
                    </FieldLabel>
                </Field>
                <Button
                type="submit"
                size="md"
                className="w-full"
                >
                {isSubmitting ? "Login..." : "Login"}
                </Button>
            
                <p className="text-muted-foreground text-center">or connect with</p>
                {/* <div className="w-full flex gap-2"> */}
                    <Button
                        onClick={handleGoogleLogin}
                        className="w-full"
                        variant="secondary"
                        size="md"
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
                </FieldGroup>
                <div className="text-muted-foreground text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <TextLink href="/signup" className="underline ml-1.5">
                    Create an account
                    </TextLink>
                </div>
            </FieldSet>
            </form>
        </div>  
    )
}
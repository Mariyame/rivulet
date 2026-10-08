import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkText  from "@/components/text-link";
import InputError from "@/components/input-error";
import { AuthFromProps } from "@/types/auth";
import { ArrowLeft } from "lucide-react";


export function ForgotPasswordForm(
    {
        handleSubmit,
        errors,
        message,
        isSubmitting
    }: AuthFromProps) {

    return(
       <div className="w-full max-w-md flex flex-col items-center justify-center rounded-2xl p-6 bg-white">
        <LinkText href="/login" 
        className="flex flex-row gap-2 items-center self-end text-sm text-muted-foreground"
        >
          <ArrowLeft size={15}/>
          Back to Sing In
        </LinkText>
        <Image 
            src="/logo/secondary-logo.svg"
            alt="TaskJoy Logo"
            width={100}
            height={100}
            className='py-4'
        />
        <h2 className="text-2xl font-bold text-center ">Forgot Password?</h2>
        <p className="text-sm text-muted-foreground text-center ">Enter your email address and we&apos;ll send you a link to reset your password.</p>
        <form 
            onSubmit={handleSubmit}
            className="w-full p-6 space-y-4">
            {message && (
                <p className="text-(--success)">
                {message}
                </p>
            )}
            <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-sm font-semibold">
                Email address
            </Label>
            <Input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:border-primary focus:ring focus:ring-primary/50"
            />
            <InputError message={errors?.email?.[0]} className="mt-1" />
            </div>
            <Button
            type="submit"
            size="lg"
            className="w-full"
            >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>            
        </form>
        </div>
    )
}
import { Mail, RefreshCw, CircleQuestionMark } from 'lucide-react'
import TextLink from '@/components/text-link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { verifyEmailProps } from '@/types/auth';

export function EmailVerificationNotice(
    { 
        email,
        timeLeft,
        handleResendEmail

     }
    : verifyEmailProps) {
    return(
        <div className="w-full max-w-md p-6">
            <div className='flex flex-col items-center justify-center py-12 px-[clamp(20px,5vw,64px)]'>
                <p className='text-center font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.5px]'>Check your email</p>
                <p className='text-muted-foreground text-sm text-center'>We&apos;ve sent a verification link to your email address.
                Please check your inbox and click the link to confirm your account and get started with Rivulet.</p>
                <div className='w-full flex items-center gap-4 p-3 rounded-md bg-ring/10'>
                <Mail color='#2d2d44'/>
                <div>
                    <p className='text-muted-foreground text-sm'>Verification link sent to:</p>
                    <p>{email}</p>
                </div>
                </div>
                <p className='text-muted-foreground text-sm'>Didn&apos;t receive the email?</p>
                <div className='flex gap-2'>
                <p className='text-muted-foreground text-sm'>You can resend it in</p>
                <Badge variant={timeLeft <= 0 ? 'secondary' : 'default'} className='font-semibold'>{String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0")}:{String(timeLeft % 60).padStart(2, "0")}</Badge>
                </div>
                <div className='flex justify-between gap-4'>
                    <Button 
                    type='submit'
                    onClick={handleResendEmail} 
                    className='flex items-center text-sm gap-1 p-4'
                    >
                        <RefreshCw className='size-4' strokeWidth="2"/>
                        Resend email
                    </Button>
                    <Button variant='secondary' render={
                        <a href="/change-email">Change my email</a>
                        }> 
                    </Button>

                </div>
            </div>
            <div className='w-full flex items-center justify-center gap-2 text-sm border-t border-ring/10 pt-6'>
                <CircleQuestionMark size={20} color='#2d2d44'/>
                <p className='text-muted-foreground'>Need help?</p>
                <TextLink href='/support'>
                    Contact support
                </TextLink>
            </div>
        </div>
    );
}
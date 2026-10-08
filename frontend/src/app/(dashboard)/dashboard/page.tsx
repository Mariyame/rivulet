
'use client'

import { useSearchParams } from "next/navigation"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

export default function Dashboard() {
  const searchParams = useSearchParams();
  const verified = searchParams.get("verified");
  const { user } = useAuth()
  
  return (
        <>
        {verified === "1" && 
          <Alert className="max-w-3xl bg-(--success)/20 text-(--success)">
            <CheckCircle2Icon />
            <AlertTitle>Email verified successfully!</AlertTitle>
            <AlertDescription>
             Your email address has been verified. You can now continue to navigate.
            </AlertDescription>
          </Alert> 
           }
           { (user?.verified  || verified !== "1") && 
 
         <Alert className="max-w-3xl border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
              <AlertTriangleIcon />
              <AlertTitle>Verify your email address.</AlertTitle>
              <AlertDescription>
             We&apos;ve sent a verification link to mariyam@example.com.
             Click the link in your email to keep your account secure and get important updates.
              </AlertDescription>
              <AlertAction>                     
              </AlertAction>
            </Alert>
           }

        
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/20" />
            <div className="aspect-video rounded-xl bg-muted/20" />
            <div className="aspect-video rounded-xl bg-muted/20" />
          </div>
          <div className="min-h-screen flex-1 rounded-xl bg-muted/20 md:min-h-min" />
        </>
  )
}

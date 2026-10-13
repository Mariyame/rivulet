'use client'

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { 
    Alert, 
    AlertDescription, 
    AlertTitle 
} from "@/components/ui/alert"

import { Switch } from "@/components/ui/switch"
import { ShieldCheck } from "lucide-react"
import { TwoFactorAuthDialog } from "./two-factor-auth-dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"

export function TwoFactorAuth() {
    const { user } = useAuth()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    
    const isTwoFAEnabled = user?.twoFA ?? false
    
   
    return (    
            <Card className="w-full">
                <CardHeader className="flex gap-3">
                    <ShieldCheck size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                    <div>
                        <div className="flex gap-3">
                        <CardTitle>Two-Factor Authentication</CardTitle>
                        </div>
                        <CardDescription>
                          Protect your account with an additional verification step when signing in.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                        {/* <InputError message={message.message} /> */}
                        <div className="flex items-center space-x-2">
                            <Switch 
                               id="2fa"
                               checked={isTwoFAEnabled}
                               onCheckedChange={() => setIsDialogOpen(true)}
                            />
                            
                            <Label htmlFor="2fa">Enable 2FA</Label>
                            <Badge className="bg-(--teal)/20 text-(--teal)">Recommended</Badge>
                        </div>
                            <Alert className="max-w-md bg-(--blue)/10">
                                <ShieldCheck />
                                <AlertTitle>Account updated successfully</AlertTitle>
                                <AlertDescription>
                                    Use an authenticator app (like Google Authenticator for better security).
                                </AlertDescription>
                            </Alert>
                </CardContent>
                 <TwoFactorAuthDialog open={isDialogOpen} onChangeOpen={setIsDialogOpen}/>
            </Card>
    )
}
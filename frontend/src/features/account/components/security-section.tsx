'use client'

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PasswordInput from "@/components/password-input"
import { Check, Laptop, LockKeyhole, Monitor, ShieldCheck, Smartphone } from "lucide-react"
import { Item, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TwoFactorAuth } from "./two-factor/two-factor-auth"


export function Security() {


  return (
       <div className="w-full space-y-6">
            <ChangePassword />
            <ActiveSessions />
            <TwoFactorAuth 
            />
      </div>
  )
}









function ChangePassword() {
    return (
    <Card>
        <CardContent>
        <form>
            <FieldGroup>
            <FieldSet>
                <div className="flex gap-3">
                    <LockKeyhole size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                    <div>
                    <FieldLegend>Change Password</FieldLegend>
                    <FieldDescription>
                    Choose a strong password to keep your account safe.
                    </FieldDescription>
                    </div>
                </div>
                <FieldGroup>
                    <Field>
                    <FieldLabel htmlFor="password">Current Password</FieldLabel>
                    <PasswordInput id="password" placeholder="••••••••" />
                    </Field>
                    <Field>
                    <FieldLabel htmlFor="password">New Password</FieldLabel>
                    <PasswordInput id="password" placeholder="••••••••" />
                    </Field>
                    <Field>
                    <FieldLabel htmlFor="password">Confirm New Password</FieldLabel>
                    <PasswordInput id="password" placeholder="••••••••" />
                    </Field>
                    <Notice />
                <Field orientation="horizontal" className="flex justify-between">
                    <Button variant="outline" type="button">
                    Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </Field>
                </FieldGroup>
            </FieldSet>
            </FieldGroup>
        </form>
        </CardContent>
    </Card>
    )
}


function Notice() {
        return (
            <Alert className="w-full bg-primary/10">
                <ShieldCheck size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                <AlertTitle>Your password must include:</AlertTitle>
                <AlertDescription>
                    <ul className="flex flex-col gap-2 px-4">
                        <div className="flex flex-row gap-2">
                            <Check className="size-5 text-primary"/>
                            <li>At least 8 characters</li>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Check className="size-5 text-primary"/>
                            <li>One uppercase letter</li>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Check className="size-5 text-primary"/>
                            <li>One special character</li> 
                        </div>
                    </ul>
                </AlertDescription>
            </Alert>

        )
}


function ActiveSessions() {
    return (
            <Card className="w-full">
                <CardHeader className="flex gap-3">
                    <Monitor size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                    <div>
                    <div className="flex gap-3">
                    <CardTitle>Active Sessions</CardTitle>
                    <Badge className="bg-(--teal)/20 text-(--teal)">Current session</Badge>
                    </div>
                    <CardDescription>You&apos;re logged in on 2 devices</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Item className="flex gap-3 justify-between">
                        <div className="flex gap-3">
                        <Laptop strokeWidth={1.5} className="size-8 text-foreground bg-muted/50 p-2 rounded-md"/>
                        <div>
                            <ItemTitle>Chrome on macOS</ItemTitle>
                            <ItemDescription>Casablanca, Morocco • 10 Sep 2026, 10:24 AM</ItemDescription>
                        </div>
                        </div>
                        <Badge variant="secondary">This device</Badge>
                    </Item>
                    <Item className="flex gap-3 justify-between">
                        <div className="flex gap-3">
                        <Smartphone strokeWidth={1.5} className="size-8 text-foreground bg-muted/50 p-2 rounded-md"/>
                        <div>
                            <ItemTitle>Iphone 15</ItemTitle>
                            <ItemDescription>Casablanca, Morocco • 7 Sep 2026, 04:12 PM</ItemDescription>
                        </div>
                        </div>
                        <Badge variant="outline">Sign out</Badge>
                    </Item>
                </CardContent>
            </Card>
    )
}

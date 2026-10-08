import { Switch } from "@/components/ui/switch"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldLegend,
  FieldSet
} from "@/components/ui/field"
import { Card, CardContent } from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { Bell } from "lucide-react"
import { notifications } from "@/data/dashboard"

export function Notifications() {
  return (
    <Card>
        <CardContent>
            <FieldSet className="space-y-6">
                <div className="w-full flex gap-3">
                    <Bell size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                    <div>
                    <FieldLegend variant="label">Notifications</FieldLegend>
                    <FieldDescription>
                        Manage your notification preferences.
                    </FieldDescription>
                    </div>
                </div>
                <FieldGroup>
                    {notifications.map((item) => {
                        const Icon = item.icon;
                        return(
                        <Field  key={item.id} className="w-full flex flex-row items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <Icon strokeWidth={1.5} className="size-8 text-primary bg-primary/15 p-2 rounded-md"/>
                                <div>
                                    <FieldLabel htmlFor={item.title}>{item.title}</FieldLabel>
                                    <FieldDescription>{item.description}</FieldDescription>
                                </div>
                            </div>
                        <Switch id={item.title} defaultChecked={item.enabled}/>
                        </Field>
                        )
                    })}
                </FieldGroup>
            </FieldSet>
        </CardContent>
    </Card>
  )
}

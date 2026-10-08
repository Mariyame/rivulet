import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Sun } from "lucide-react"
import { modes } from "@/data/dashboard"

export function Theme() {
  return (
    <Card>
        <CardContent>
            <FieldGroup>
            <FieldSet>
                <div className="w-full flex gap-3">
                <Sun size={35} strokeWidth={1.5} className="text-primary shrink-0"/>
                <div>
                    <FieldLegend variant="label">Theme</FieldLegend>
                    <FieldDescription>
                    Choose your preferred theme
                    </FieldDescription>
                </div>
                </div>
                <RadioGroup defaultValue={modes.find((mode) => mode.isActive)?.title.toLowerCase() ?? "system"} className="flex sm:flex-row flex-col">
                {modes.map((mode) => {
                    const Icon = mode.icon;
                    return (
                        <FieldLabel key={mode.id} htmlFor={mode.title}>
                            <Field orientation="horizontal">
                            <FieldContent className="flex flex-row gap-2">
                                <Icon strokeWidth={1.5} className="size-10 text-primary bg-muted/50 p-2 rounded-md"/>
                                <div>
                                    <FieldTitle>{mode.title}</FieldTitle>
                                    <FieldDescription>
                                    {mode.description}
                                    </FieldDescription>
                                </div>
                            </FieldContent>
                            <RadioGroupItem value={mode.title.toLowerCase()} id={mode.title} />
                            </Field>
                        </FieldLabel>
                    )
                })}

                </RadioGroup>
            </FieldSet>
            </FieldGroup>
        </CardContent>
    </Card>
  )
}

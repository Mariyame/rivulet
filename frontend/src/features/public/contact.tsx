import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Mascot from "@/features/shared/Mascot"

export const TOPICS = [
  { value: "getting-started",      label: "Getting started" },
  { value: "drops-and-goals",      label: "Drops and goals" },
  { value: "streaks-and-levels",   label: "Streaks and levels" },
  { value: "reminders",            label: "Reminders" },
  { value: "account-and-security", label: "Account and security" },
  { value: "rewards",              label: "Rewards" },
  { value: "other",                label: "Something else" },
];

export function Contact () {
    return (
        <section className="w-full flex flex-col  justify-center md:flex-row gap-6 p-6">
            <Item className="flex flex-col gap-4 p-4 basis-1/3 bg-dark-background text-white">
              <ItemMedia>
               <Mascot />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-heading font-bold text-[28px] tracking-[-0.5px]">Still stuck? Tell us what happened.</ItemTitle>
                <ItemContent>The more detail you give, the faster we can help. Tell us what you were doing and what you expected to see.</ItemContent>
              </ItemContent>
            </Item>
            <Card className="basis-2/3 max-w-xl p-4">
                <CardContent>
                    <div className="w-full">
                        <form>
                        <FieldGroup>
                            <FieldSet>
                                <div className="grid grid-cols-2 gap-4">
                                 <Field>
                                    <FieldLabel htmlFor="name">
                                    Your name
                                    </FieldLabel>
                                    <Input
                                    id="name"
                                    placeholder="Maya"
                                    required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">
                                    Email
                                    </FieldLabel>
                                    <Input
                                    id="email"
                                    placeholder="you@example.com"
                                    required
                                    />
                                </Field>
                                </div>
                                <Field>
                                    <FieldLabel htmlFor="topic">
                                        Topic
                                    </FieldLabel>
                                    <Select items={TOPICS} defaultValue="getting-started">
                                        <SelectTrigger id="topic">
                                        <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectGroup>
                                            {TOPICS.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                            ))}
                                        </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </Field>
                                    <Field>
                                    <FieldLabel htmlFor="message">
                                    Message
                                    </FieldLabel>
                                    <Textarea
                                    id="message"
                                    placeholder="What happened?"
                                    className="resize-none"
                                    />
                                </Field>
                            <Field orientation="horizontal">
                                <Button type="submit" size="md" className="bg-button-gradient text-foreground font-bold w-full">Send message</Button>
                            </Field>
                            </FieldSet>
                        </FieldGroup>
                       </form>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
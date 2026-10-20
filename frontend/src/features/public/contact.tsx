'use client'

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
import { useState } from "react"
import { sendContactMessage, type ContactPayload } from "@/lib/contact"
import InputError from "@/components/input-error"
import { getApiError } from "@/lib/error"

export const TOPICS = [
  { value: "getting-started",      label: "Getting started" },
  { value: "drops-and-goals",      label: "Drops and goals" },
  { value: "streaks-and-levels",   label: "Streaks and levels" },
  { value: "reminders",            label: "Reminders" },
  { value: "account-and-security", label: "Account and security" },
  { value: "rewards",              label: "Rewards" },
  { value: "other",                label: "Something else" },
];

const initialValues: ContactPayload = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

export function Contact () {

   const [values, setValues] = useState<ContactPayload>(initialValues);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [message, setMessage] = useState('');
   const [errors, setErrors] = useState<Record<string, string[]>>({});

   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value} = e.target;

    setValues((current) => ({
        ...current,
        [name]: value,
    }))
   }
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setErrors({});
        setMessage('');
        setIsSubmitting(true);

    try{
        const response = await sendContactMessage(values)
        setMessage(response.message)
        setValues(initialValues)

    } catch (error) {
        const response = getApiError(error)
        setErrors(response.errors)
    } finally {
        setIsSubmitting(false)   
    }
   }
    return (
        <section className="w-full flex flex-col  justify-center md:flex-row gap-6 sm:p-6 mt-6">
            <Item className="flex flex-col gap-4 p-4 basis-1/3 bg-dark-background text-white">
              <ItemMedia>
               <Mascot />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-heading font-bold text-[28px] tracking-[-0.5px]">Still stuck? Tell us what happened.</ItemTitle>
                <ItemContent>The more detail you give, the faster we can help. Tell us what you were doing and what you expected to see.</ItemContent>
              </ItemContent>
            </Item>
            <Card className="basis-2/3 max-w-xl sm:p-4">
                <CardContent>
                    <div className="w-full py-6">
                        <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <FieldSet>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                                 <Field>
                                    <FieldLabel htmlFor="name">
                                    Your name
                                    </FieldLabel>
                                    <Input
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    maxLength={100}
                                    disabled={isSubmitting}
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
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    maxLength={254}
                                    disabled={isSubmitting}
                                    placeholder="you@example.com"
                                    required
                                    />
                                </Field>
                                </div>
                                <Field>
                                    <FieldLabel htmlFor="topic">
                                        Topic
                                    </FieldLabel>
                                    <Select 
                                    items={TOPICS} 
                                    // defaultValue="getting-started"
                                    value={values.subject}
                                    onValueChange={(value) => {
                                        if (value !== null) 
                                        setValues((current) => ({
                                            ...current,
                                            subject: value,
                                        }))
                                    }}
                                    disabled={isSubmitting}
                                    >
                                        <SelectTrigger 
                                        id="topic"
                                        name="subject"
                                        >
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
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    maxLength={5000}
                                    rows={5}
                                    disabled={isSubmitting}
                                    placeholder="What happened?"
                                    className="resize-none"
                                    />
                                </Field>

                                    {message && (
                                        <p className="text-(--success)">
                                        {message}
                                        </p>
                                    )}
                                {errors && <InputError message={errors?.subject?.[0]}/>}
                                {errors && <InputError message={errors?.message?.[0]}/>}
                               
                            <Field orientation="horizontal">
                                <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                size="md" 
                                className="bg-button-gradient text-foreground font-bold w-full"
                                >
                                    {isSubmitting ? "Sending..." : "Send message"}
                                </Button>
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
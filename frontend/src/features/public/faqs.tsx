import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { faqs } from "@/data/legal"

export function FAQs() {
  return (
    <>
    <h1 className="font-heading font-bold text-[clamp(28px,3.4vw,40px)] tracking-[0.8px] text-left pb-4">Common questions</h1>
      <Accordion className="max-w-xl gap-2">
        {faqs.map((item) => (
          <AccordionItem key={item.question} value={item.question} className="bg-white rounded-xl px-4 shadow-[0_8px_24px_rgba(36,26,58,0.06)]">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
  
}


  

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import data from '@/data'

export default function FaqsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-01"
    >
      {data.map((item) => (
        <AccordionItem value={`item-${item.id}`} key={item.id}>
          <AccordionTrigger className="py-5 font-semibold leading-tight text-dark-purple hover:text-pink md:py-6 md:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm font-normal leading-normal text-light-purple md:pb-6 md:pt-1 md:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

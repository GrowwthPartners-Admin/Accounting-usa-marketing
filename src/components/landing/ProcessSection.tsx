import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const steps = [
  { title: 'Understand', text: 'We review your current books, tools, and reporting priorities.' },
  { title: 'Set up', text: 'We organize the workflow and address the gaps that need attention.' },
  { title: 'Keep current', text: 'Recurring bookkeeping and reporting follow an agreed rhythm.' },
  { title: 'Review & improve', text: 'We use the results to spot questions and refine the process.' },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-space bg-[#f4f8f6]">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our approach" title="A simple process, built around your business." description="You know what happens next, who owns each step, and how the work supports your goals." />
          <ContactButton className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-extrabold text-[#bd5c25] transition hover:text-[#8e4015]">Let's get started <ArrowIcon className="h-4 w-4" /></ContactButton>
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t-2 border-[#c7dcd5] pr-7 pt-8 xl:pl-7 xl:first:pl-0">
              <span className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center rounded-full border-[6px] border-[#f4f8f6] bg-[#2e9278] xl:left-7 xl:first:left-0" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d66a29]">Step {String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#10313c]">{step.title}</h3>
              <p className="mt-3 max-w-[250px] text-sm leading-7 text-[#5a6d72]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

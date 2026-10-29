import { CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const reasons = [
  { title: 'US-focused accounting', text: 'Support shaped around US reporting practices and the needs of US businesses.' },
  { title: 'Processes that make sense', text: 'Attention to the workflow behind the numbers, so your team can keep using it.' },
  { title: 'Connected finance support', text: 'Accounting work that can sit alongside tax, planning, and finance conversations.' },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="section-space bg-[#eaf4ef]">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[.91fr_1.09fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-[#dceae4]" aria-hidden="true" />
          <img src="/image/part-time-cfo1.webp" alt="People reviewing business figures" width="482" height="661" className="relative h-[410px] w-full rounded-2xl object-cover object-center sm:h-[530px]" />
          <div className="absolute bottom-5 left-5 max-w-[250px] rounded-2xl bg-white p-5 shadow-[0_16px_36px_rgba(10,46,54,.17)] sm:bottom-7 sm:left-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#176b67]">Our focus</p>
            <p className="mt-2 text-sm font-extrabold leading-6 text-[#10313c]">Numbers your team can understand and use.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Why Growwth Partners" title="Accounting support that goes beyond the statement." description="We focus on the records, reports, and processes that make financial information useful in your day-to-day work." />
          <div className="mt-9 space-y-0">
            {reasons.map((reason) => <div key={reason.title} className="flex gap-4 border-t border-[#dce6e3] py-5"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e4f3ec] text-[#23876e]"><CheckIcon className="h-4 w-4" /></span><div><h3 className="font-extrabold text-[#10313c]">{reason.title}</h3><p className="body-copy mt-1.5 text-sm leading-7 text-[#5a6d72]">{reason.text}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

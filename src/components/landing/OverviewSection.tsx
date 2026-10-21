import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const pillars = [
  { number: '01', title: 'Accurate records', description: 'Know where every transaction belongs, with reconciliations built into the routine.' },
  { number: '02', title: 'Reports you can use', description: 'See profit, position, and cash movement in a form that makes sense.' },
  { number: '03', title: 'Better control', description: 'Give recurring accounting work a clear process and dependable ownership.' },
  { number: '04', title: 'Room to grow', description: 'Build systems that can keep pace with new people, products, and markets.' },
]

export function OverviewSection() {
  return (
    <section id="overview" className="section-space bg-white">
      <div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="A stronger foundation" title="Better accounting starts with a clearer picture." description="Your numbers should explain what is happening in the business. We bring the records, reporting, and routines together so you can act on them." />
          <a href="#services" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#ba5721] transition hover:text-[#8e4015]">See what we can take on <ArrowIcon className="h-4 w-4" /></a>
        </div>
        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="border-t border-[#d9e4e2] py-6">
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#dd732e]">{pillar.number}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-[#10313c]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5a6d72]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

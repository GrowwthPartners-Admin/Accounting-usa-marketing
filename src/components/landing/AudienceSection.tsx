import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const audiences = [
  { title: 'Startups & small businesses', text: 'Build a reliable accounting foundation early.' },
  { title: 'SaaS & technology', text: 'Keep financial reporting close to your growth metrics.' },
  { title: 'Ecommerce & D2C', text: 'Organize sales channels, inventory costs, and settlements.' },
  { title: 'Professional services', text: 'Connect client billing with a clearer financial picture.' },
  { title: 'Foreign-owned US entities', text: 'Create a reporting rhythm for US and global teams.' },
  { title: 'Growing operations', text: 'Strengthen the systems behind a changing business.' },
]

export function AudienceSection() {
  return (
    <section id="who-we-help" className="section-space bg-[#0d3441] text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Who we help" title="Built for the way your business works." description="Every business has a different accounting rhythm. We shape the support around your stage, systems, and reporting needs." light />
          <ContactButton className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#a7e8d8] transition hover:text-white">Talk to us <ArrowIcon className="h-4 w-4" /></ContactButton>
        </div>
        <div className="grid gap-x-9 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <article key={audience.title} className="border-t border-white/20 py-6">
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#a7e8d8]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white">{audience.title}</h3>
              <p className="body-copy mt-2 text-sm leading-7 text-[#bed2d4]">{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

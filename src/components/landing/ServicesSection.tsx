import {
  ArrowLeftRight,
  BarChart3,
  BookOpen,
  FileCheck2,
  Settings2,
  Users,
} from 'lucide-react'
import { ArrowIcon, CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const services = [
  {
    title: 'Bookkeeping & transactions',
    description: 'Keep your everyday financial activity current and correctly organized.',
    items: ['Transaction recording', 'Bank and card reconciliation', 'Income and expense categories'],
    icon: BookOpen,
  },
  {
    title: 'Financial reporting',
    description: 'Turn the books into a useful view of business performance.',
    items: ['Profit and loss', 'Balance sheet', 'Cash flow reporting'],
    icon: BarChart3,
  },
  {
    title: 'Payables & receivables',
    description: 'Bring more order to the money coming in and going out.',
    items: ['Vendor bills', 'Customer invoices', 'Payment visibility'],
    icon: ArrowLeftRight,
  },
  {
    title: 'Payroll accounting',
    description: 'Reflect payroll activity accurately in the books and reports.',
    items: ['Payroll journal entries', 'Employee expenses', 'Payroll reconciliations'],
    icon: Users,
  },
  {
    title: 'Tax-ready books',
    description: 'Make handoff to your tax advisor more straightforward.',
    items: ['Supporting records', 'Year-end preparation', 'Tax advisor coordination'],
    icon: FileCheck2,
  },
  {
    title: 'Systems & workflows',
    description: 'Use accounting tools and processes that suit the way your team works.',
    items: ['QuickBooks or Xero setup', 'Chart of accounts', 'Process improvements'],
    icon: Settings2,
  },
]

const accents = [
  { icon: 'bg-[#e5f3eb] text-[#1f8069]', line: 'bg-[#278f77]' },
  { icon: 'bg-[#e8f2f4] text-[#2b7181]', line: 'bg-[#4a9aaa]' },
  { icon: 'bg-[#fff0e5] text-[#c4682d]', line: 'bg-[#df8a50]' },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section-space bg-[linear-gradient(180deg,#f4f8f6_0%,#eef5f2_100%)]">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What we do" title="The accounting support your business needs, all in one place." description="Start with the essentials, then add the depth of support your operations call for." />
          <ContactButton className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-extrabold text-[#bd5c25] transition hover:text-[#8e4015]">Discuss your needs <ArrowIcon className="h-4 w-4" /></ContactButton>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const accent = accents[index % accents.length]

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#dce8e3] bg-white p-6 shadow-[0_12px_32px_rgba(15,60,57,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#9ecbb9] hover:shadow-[0_24px_52px_rgba(15,60,57,0.12)] sm:p-7"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${accent.line}`} aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-[18px] ${accent.icon}`}>
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className="pt-1 text-xs font-extrabold tracking-[0.15em] text-[#9aadb0]">
                    {String(index + 1).padStart(2, '0')} / 06
                  </span>
                </div>

                <h3 className="mt-6 text-[21px] font-extrabold leading-snug tracking-[-0.025em] text-[#10313c]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-7 text-[#5a6d72]">{service.description}</p>

                <div className="mt-auto pt-7">
                  <div className="border-t border-[#e4eeea] pt-5">
                    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#438575]">What&apos;s included</p>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13px] font-semibold leading-5 text-[#496168]">
                          <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#e5f3eb] text-[#278f77]">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

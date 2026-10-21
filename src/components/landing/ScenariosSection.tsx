import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Cloud, Globe2, Rocket, ShoppingBag, Target } from 'lucide-react'
import { ContactButton } from '../contact/ContactModalContext'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const scenarios = [
  {
    label: 'Startup',
    icon: Rocket,
    title: 'Putting the first accounting system in place',
    situation: 'A new company needs a dependable way to separate transactions, understand spending, and prepare regular reports.',
    approach: ['Choose an accounting tool and organize the chart of accounts', 'Set a monthly transaction and reconciliation routine', 'Prepare a simple reporting package for founders'],
    outcome: 'A clearer foundation for planning and conversations with advisors or investors.',
  },
  {
    label: 'Ecommerce',
    icon: ShoppingBag,
    title: 'Making sense of sales across channels',
    situation: 'An online brand has sales, fees, inventory costs, and cash movement coming from several systems.',
    approach: ['Bring channel activity into a consistent bookkeeping flow', 'Track cost of goods and key expense categories', 'Review a monthly profit and loss view by business need'],
    outcome: 'Better visibility into the economics behind each channel.',
  },
  {
    label: 'SaaS',
    icon: Cloud,
    title: 'Connecting subscriptions and financial reports',
    situation: 'A software business wants its financial records to support recurring revenue discussions and growth planning.',
    approach: ['Review how subscription transactions are recorded', 'Create a repeatable close and reporting process', 'Align financial reporting with the team’s operating metrics'],
    outcome: 'A more consistent picture for management and stakeholders.',
  },
  {
    label: 'US entity',
    icon: Globe2,
    title: 'Improving visibility for an international group',
    situation: 'A foreign-owned US company needs organized local books and a reporting rhythm that works across teams.',
    approach: ['Set up the US entity’s accounting workflow', 'Track intercompany activity with clearer records', 'Coordinate reporting timelines with the wider business'],
    outcome: 'A more usable record of US activity for local and global review.',
  },
]

export function ScenariosSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const reduceMotion = useReducedMotion()
  const active = scenarios[activeIndex]

  return (
    <section id="in-practice" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="In practice" title="One approach, shaped to fit your business." description="See how structured accounting can address different needs as businesses grow." centered />

        <div className="mt-11 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4" role="group" aria-label="Accounting scenarios">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon
            const selected = activeIndex === index

            return (
              <button
                key={scenario.label}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setHasInteracted(true)
                  setActiveIndex(index)
                }}
                className={`group flex min-h-[112px] flex-col justify-between rounded-[20px] border p-4 text-left transition duration-200 sm:p-5 ${selected ? 'border-[#73b69d] bg-[#eaf5ef] shadow-[0_12px_30px_rgba(15,60,57,0.09)]' : 'border-[#dce8e3] bg-[#f9fbfa] hover:-translate-y-0.5 hover:border-[#9ecbb9] hover:bg-white hover:shadow-[0_10px_24px_rgba(15,60,57,0.06)]'}`}
              >
                <span className="flex w-full items-start justify-between gap-2">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${selected ? 'bg-[#cfe9dc] text-[#16765e]' : 'bg-white text-[#3c7c72] shadow-sm'}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-extrabold tracking-[0.14em] text-[#8aa5a2]">{String(index + 1).padStart(2, '0')}</span>
                </span>
                <span className={`mt-3 text-[15px] font-extrabold leading-tight sm:text-base ${selected ? 'text-[#0d5448]' : 'text-[#10313c]'}`}>{scenario.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[28px] border border-[#dce8e3] bg-white shadow-[0_24px_60px_rgba(15,60,57,0.09)]">
          <motion.div
            key={active.label}
            initial={hasInteracted && !reduceMotion ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="grid lg:grid-cols-[.9fr_1.1fr]"
          >
            <div className="relative isolate flex flex-col overflow-hidden bg-[linear-gradient(145deg,#0d3441_0%,#0a2c39_58%,#0b4d4b_100%)] p-7 text-white sm:p-9 lg:p-11">
              <div className="pointer-events-none absolute -bottom-28 -right-28 -z-10 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#a7e8d8]">
                Illustrative example <span className="mx-2 text-white/40">/</span> {String(activeIndex + 1).padStart(2, '0')} of 04
              </p>
              <h3 aria-live="polite" className="mt-8 max-w-xl text-[26px] font-extrabold leading-tight tracking-[-0.025em] sm:text-[30px]">
                {active.title}
              </h3>
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#a7e8d8]">The situation</p>
                <p className="mt-3 max-w-lg text-[15px] leading-7 text-[#d7e7e5]">{active.situation}</p>
              </div>
              <ContactButton className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#0d3441] shadow-[0_12px_26px_rgba(3,20,29,0.18)] transition hover:bg-[#dff4ec]">
                Discuss your situation <ArrowIcon className="h-4 w-4" />
              </ContactButton>
            </div>

            <div className="p-7 sm:p-9 lg:p-11">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#bd682e]">A possible approach</p>
              <ol className="mt-5 space-y-3">
                {active.approach.map((item, index) => (
                  <li key={item} className="flex items-start gap-4 rounded-[16px] border border-[#e3ece8] bg-[#f9fbfa] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f3eb] text-[11px] font-extrabold text-[#1d826b]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-0.5 text-sm font-semibold leading-6 text-[#3c5960]">{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-[18px] border border-[#cfe8da] bg-[#edf7f1] p-5 sm:p-6">
                <div className="flex items-center gap-2.5 text-[#21836a]">
                  <Target className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.17em]">What this helps with</p>
                </div>
                <p className="mt-3 text-[15px] font-semibold leading-7 text-[#295a55]">{active.outcome}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

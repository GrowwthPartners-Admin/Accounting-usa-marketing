import { CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const challenges = [
  'Books that fall behind each month',
  'Reports that arrive after decisions are made',
  'Accounting work spread across too many tools',
  'Limited visibility into cash and performance',
]

const improvements = [
  'A consistent monthly close routine',
  'Statements that are easier to understand',
  'Clear ownership of recurring finance work',
  'Better context for the decisions ahead',
]

export function ComparisonSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="Why it matters" title="When the books are clear, the next move is easier." description="Good accounting takes friction out of the day to day and gives your team a dependable view of the business." centered />
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#dce6e3] lg:grid-cols-2">
          <div className="bg-[#f7f9f8] p-8 sm:p-10 lg:p-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#526970]">Without a clear process</p>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#10313c]">Small gaps become bigger problems.</h3>
            <ul className="mt-8 space-y-5">
              {challenges.map((challenge) => <li key={challenge} className="body-copy flex items-start gap-4 text-sm leading-7 text-[#5a6d72]"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#718b88]" />{challenge}</li>)}
            </ul>
          </div>
          <div className="bg-[#e9f4ef] p-8 sm:p-10 lg:p-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#28836d]">With the right support</p>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#10313c]">You can work from a stronger foundation.</h3>
            <ul className="mt-8 space-y-5">
              {improvements.map((improvement) => <li key={improvement} className="body-copy flex items-start gap-4 text-sm font-semibold leading-7 text-[#345960]"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#cde9dd] text-[#21876c]"><CheckIcon className="h-4 w-4" /></span>{improvement}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

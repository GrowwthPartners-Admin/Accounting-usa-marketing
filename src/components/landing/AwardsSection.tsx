import { AwardShowcase } from './AwardShowcase'
import { SectionHeading } from './SectionHeading'

export function AwardsSection() {
  return (
    <section id="awards" className="section-space overflow-hidden bg-[#f4f8f6]">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-14 xl:gap-20">
        <div className="max-w-xl">
          <SectionHeading
            eyebrow="Awards & partnerships"
            title="Recognition behind the work."
            description="A closer look at the awards and partner recognition connected with Growwth Partners and its leadership."
          />
        </div>
        <AwardShowcase />
      </div>
    </section>
  )
}

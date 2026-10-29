import socialProofBanner from '../../assets/hero/social-proof-banner.webp'
import { FeaturedTestimonials } from '../socialProof/FeaturedTestimonials'
import { VideoTestimonials } from '../socialProof/VideoTestimonials'
import { stats } from '../socialProof/data'
import { SectionHeading } from './SectionHeading'
import { TrustedLogosSection } from './TrustedLogosSection'

export function SocialProofSection() {
  return (
    <>
      <section id="client-stories" className="section-space bg-[#f4f8f6]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Client stories"
            title="Trusted by founders scaling across borders"
            description="Finance made simple with senior CFO guidance. Hear how founders use Growwth Partners to reduce finance friction, improve reporting, and scale with confidence."
            centered
          />

          <div className="relative mx-auto mt-11 hidden max-w-6xl md:block min-[1920px]:max-w-[1360px] min-[2560px]:max-w-[1520px]">
            <div className="absolute -inset-4 rounded-2xl bg-[#2e9278]/15 blur-xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-[0_24px_70px_rgba(15,60,57,0.12)]">
              <img src={socialProofBanner} alt="Growwth Partners client presence and accreditations" width="1500" height="844" className="aspect-[16/9] w-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div key={stat.label} className="rounded-2xl border border-[#dce8e3] bg-white p-5 text-center shadow-[0_14px_36px_rgba(15,60,57,0.06)]">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f3eb] text-[#23876e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-4xl font-extrabold tracking-[-0.04em] text-[#176b67]">{stat.value}</p>
                  <p className="mt-1 text-sm font-extrabold text-[#10313c]">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <FeaturedTestimonials />
          <VideoTestimonials />
        </div>
      </section>
      <TrustedLogosSection />
    </>
  )
}

import { ArrowIcon, CheckIcon } from './Icons'
import { ContactButton } from '../contact/ContactModalContext'

const promises = ['Clean, current books', 'Clear monthly reporting', 'Support built around you']

export function HeroSection() {
  return (
    <section id="top" className="hero-background relative isolate overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-44 top-0 h-[490px] w-[490px] rounded-full border border-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-16 h-[350px] w-[350px] rounded-full border border-white/10" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-12 pb-14 pt-16 lg:min-h-[650px] lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:pb-16 lg:pt-16">
        <div className="max-w-[610px]">
          <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#a7e8d8]"><span className="h-px w-8 bg-[#a7e8d8]" />Accounting services · USA</p>
          <h1 className="mt-7 text-[2.7rem] font-extrabold leading-[1.1] tracking-[-0.055em] sm:text-[3.5rem] lg:text-[4.1rem]">Accounting services in the USA. <span className="text-[#9de3cf]">Clarity to move forward.</span></h1>
          <p className="mt-6 max-w-[570px] text-base leading-8 text-[#d0e0e1] sm:text-lg">Practical US accounting support that keeps your books organized, your reporting useful, and your next decision better informed.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ContactButton className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#ed7a32] px-6 py-4 text-sm font-extrabold text-white shadow-[0_16px_30px_rgba(0,0,0,.14)] transition hover:bg-[#d96823]">Book a free accounting call <ArrowIcon className="h-4 w-4" /></ContactButton>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/35 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">Explore our services</a>
          </div>
          <p className="mt-7 text-xs font-medium text-[#a9c2c6]">Bookkeeping · Financial reporting · AP/AR · Systems</p>
        </div>

        <div className="relative mx-auto w-full max-w-[610px] lg:mx-0">
          <div className="absolute -right-5 -top-5 h-full w-full rounded-[20px] border border-[#5b9f9e]/45" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[20px] bg-[#194958] shadow-[0_28px_70px_rgba(0,0,0,.3)]">
            <img src="/image/accounting-team.jpg" width="1536" height="1024" alt="Two people reviewing business reports together" loading="eager" className="h-[340px] w-full object-cover object-center sm:h-[460px] lg:h-[525px]" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#092733]/70 to-transparent" aria-hidden="true" />
          </div>
          <div className="relative -mt-14 ml-5 max-w-[385px] rounded-xl border border-[#dce8e4] bg-white p-5 text-[#10313c] shadow-[0_20px_46px_rgba(0,0,0,.2)] sm:ml-8 sm:p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e5f5ee] text-[#218b74]"><CheckIcon className="h-6 w-6" /></span>
              <div><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d66a29]">A better monthly rhythm</p><p className="mt-1 text-sm font-extrabold leading-6 sm:text-base">Clear books. Useful reports. More confident decisions.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#092733]/45">
        <div className="container-shell grid gap-4 py-5 sm:grid-cols-3 sm:gap-8">
          {promises.map((item) => <p key={item} className="flex items-center gap-3 text-xs font-bold tracking-wide text-[#d6e7e5]"><CheckIcon className="h-4 w-4 shrink-0 text-[#9de3cf]" />{item}</p>)}
        </div>
      </div>
    </section>
  )
}

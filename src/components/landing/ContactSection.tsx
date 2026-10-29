import { ArrowIcon } from './Icons'
import { ContactButton } from '../contact/ContactModalContext'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-space relative isolate overflow-hidden bg-gradient-to-r from-[#1eaedb] to-[#1d4ed8] text-white"
    >
      <div className="cta-grid pointer-events-none absolute inset-0 opacity-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-40 h-[430px] w-[430px] rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
          Get your accounting right from day one
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
          Build a stronger financial foundation with organized books and clearer reporting. Let&apos;s talk about the support your business needs.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ContactButton
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-8 py-4 text-base font-extrabold text-white shadow-[0_12px_28px_rgba(18,56,109,.2)] transition hover:bg-[#9a3412] hover:shadow-[0_18px_34px_rgba(18,56,109,.28)]"
          >
            Get accounting support today <ArrowIcon className="h-5 w-5" />
          </ContactButton>

        </div>
      </div>
    </section>
  )
}

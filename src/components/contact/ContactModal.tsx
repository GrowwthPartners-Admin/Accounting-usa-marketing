import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckIcon } from '../landing/Icons'
import { CONTACT_CAMPAIGN_MESSAGE, sendContactRequest, type ContactApiPayload } from '../../lib/contactApi'
import { markLeadSubmitted } from '../../lib/leadConversion'

type ContactModalProps = {
  open: boolean
  onRequestClose: () => void
}

const services = [
  'Part-Time/Fractional CFO',
  'Financial Modelling',
  'Accounting Services',
  'Bookkeeping',
  'Payroll',
  'Taxation & Compliance',
  'Corporate Secretary',
  'Company Incorporation',
  'Valuation',
  'Due Diligence',
  'Pitch Your StartUp',
  'Investor Growth Services',
  'Other',
]

const inputClass =
  'mt-2 w-full rounded-xl border border-[#d5e1df] bg-[#f9fbfa] px-4 py-3.5 text-sm text-[#102f3b] outline-none transition placeholder:text-[#95a7aa] focus:border-[#218fbc] focus:bg-white focus:ring-4 focus:ring-[#218fbc]/10'
const labelClass = 'block text-[13px] font-bold text-[#28434b]'

export function ContactModal({ open, onRequestClose }: ContactModalProps) {
  const navigate = useNavigate()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const requestIdRef = useRef(0)
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      if (!dialog.open) dialog.showModal()
      const focusFrame = requestAnimationFrame(() => nameRef.current?.focus())

      return () => {
        cancelAnimationFrame(focusFrame)
        document.body.style.overflow = previousOverflow
      }
    }

    if (dialog.open) dialog.close()
    requestIdRef.current += 1
    setStatus('idle')
    setError('')
  }, [open])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    const fields = new FormData(form)
    const payload: ContactApiPayload = {
      name: String(fields.get('name') ?? '').trim(),
      companyName: String(fields.get('companyName') ?? '').trim(),
      email: String(fields.get('email') ?? '').trim(),
      phoneNumber: String(fields.get('phoneNumber') ?? '').trim(),
      serviceLookingFor: String(fields.get('serviceLookingFor') ?? '').trim(),
      message: CONTACT_CAMPAIGN_MESSAGE,
    }

    if (!payload.name || !payload.companyName || !payload.email || !payload.phoneNumber || !payload.serviceLookingFor) {
      setError('Please complete all fields before sending.')
      return
    }

    setError('')
    setStatus('sending')
    const requestId = ++requestIdRef.current
    try {
      await sendContactRequest(payload)
      if (requestId !== requestIdRef.current) return
      form.reset()
      markLeadSubmitted()
      navigate('/thank-you')
    } catch {
      if (requestId !== requestIdRef.current) return
      setStatus('idle')
      setError('We could not send your request. Please try again in a moment.')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-modal-title"
      aria-modal="true"
      className="contact-dialog m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[940px] overflow-y-auto rounded-[24px] border-0 bg-white p-0 text-[#102f3b] shadow-[0_35px_100px_rgba(0,25,36,.3)]"
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onRequestClose()
      }}
    >
      <div className="grid md:grid-cols-[.8fr_1.2fr]">
        <aside className="relative hidden overflow-hidden bg-[#0d3441] p-9 text-white md:flex md:flex-col md:justify-between lg:p-11">
          <div className="pointer-events-none absolute -right-28 -top-20 h-72 w-72 rounded-full border-[52px] border-white/[.07]" aria-hidden="true" />
          <div className="relative">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#a7e8d8]">Growwth Partners · US accounting</p>
            <h3 className="mt-10 text-[2.25rem] font-extrabold leading-[1.15] tracking-[-0.045em]">Let's make your numbers work for you.</h3>
            <p className="mt-5 text-sm leading-7 text-[#c3d9da]">Tell us what your business needs. We will follow up to discuss the right accounting support.</p>
          </div>
          <div className="relative mt-10 space-y-4 border-t border-white/15 pt-7">
            {['A clearer view of your books', 'Reporting you can use', 'Support for your next stage'].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm font-semibold text-[#e2efed]">
                <CheckIcon className="h-4 w-4 shrink-0 text-[#9de3cf]" />{item}
              </p>
            ))}
          </div>
        </aside>

        <div className="relative p-6 sm:p-8 md:p-9 lg:p-11">
          <button type="button" aria-label="Close contact form" onClick={onRequestClose} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#eef3f1] text-[#426169] transition hover:bg-[#dfeae6] hover:text-[#102f3b]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="h-5 w-5"><path d="M5 5l14 14M19 5 5 19" /></svg>
          </button>

          <>
              <p className="pr-12 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d66a29]">Start a conversation</p>
              <h2 id="contact-modal-title" className="mt-3 pr-12 text-[1.8rem] font-extrabold leading-tight tracking-[-0.045em] sm:text-[2.1rem]">Tell us what you need.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#64787c]">Share a few details and we will get back to you about your accounting needs.</p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass} htmlFor="contact-name">Name
                    <input ref={nameRef} id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" className={inputClass} />
                  </label>
                  <label className={labelClass} htmlFor="contact-company">Company name
                    <input id="contact-company" name="companyName" type="text" autoComplete="organization" required maxLength={160} placeholder="Company name" className={inputClass} />
                  </label>
                  <label className={labelClass} htmlFor="contact-email">Email address
                    <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className={inputClass} />
                  </label>
                  <label className={labelClass} htmlFor="contact-phone">Phone number
                    <input id="contact-phone" name="phoneNumber" type="tel" autoComplete="tel" inputMode="tel" required minLength={7} maxLength={30} placeholder="+1 202 555 0147" className={inputClass} />
                  </label>
                </div>
                <label className={labelClass} htmlFor="contact-service">Service Looking For
                  <select id="contact-service" name="serviceLookingFor" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                </label>

                {error && <p role="alert" className="rounded-lg border border-[#f5c1b0] bg-[#fff3ef] px-4 py-3 text-sm font-semibold text-[#9e3e25]">{error}</p>}

                <button type="submit" disabled={status === 'sending'} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(249,115,22,.2)] transition hover:bg-[#e9630d] disabled:cursor-wait disabled:opacity-70">
                  {status === 'sending' ? 'Sending your request…' : 'Send my request'}
                  {status !== 'sending' && <span aria-hidden="true">→</span>}
                </button>
                <p className="text-center text-xs leading-5 text-[#758a8e]">We use your details to respond to your request. <a href="https://growwthpartners.com/privacy-policy" className="font-semibold text-[#1a728c] underline underline-offset-2">Privacy policy</a></p>
              </form>
          </>
        </div>
      </div>
    </dialog>
  )
}

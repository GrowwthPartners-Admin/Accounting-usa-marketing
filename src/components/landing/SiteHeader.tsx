import { useState } from 'react'
import { ArrowIcon } from './Icons'
import { ContactButton } from '../contact/ContactModalContext'

const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Who we help', href: '#who-we-help' },
  { label: 'Our approach', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ebea] bg-white/95 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <a href="#top" aria-label="Growwth Partners, back to top" className="flex shrink-0 items-center">
          <img src="/image/company_logo.webp" width="53" height="47" alt="" className="h-[54px] w-auto" />
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-[13px] font-bold text-[#526970] transition hover:text-[#dd702d]">{item.label}</a>)}
        </nav>
        <ContactButton className="hidden items-center gap-2 rounded-lg bg-[#eb7932] px-5 py-3 text-[13px] font-extrabold text-white shadow-[0_8px_18px_rgba(235,121,50,.16)] transition hover:bg-[#d96523] lg:inline-flex">Book a free call <ArrowIcon className="h-4 w-4" /></ContactButton>
        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dce6e5] text-2xl leading-none text-[#10313c] lg:hidden">{menuOpen ? '×' : '☰'}</button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#e4ebea] bg-white px-4 pb-6 pt-2 lg:hidden">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-[#edf1f0] py-3.5 text-sm font-bold text-[#314d55]">{item.label}</a>)}
          <ContactButton onClick={() => setMenuOpen(false)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#eb7932] px-5 py-3.5 text-sm font-extrabold text-white">Book a free call <ArrowIcon className="h-4 w-4" /></ContactButton>
        </nav>
      )}
    </header>
  )
}

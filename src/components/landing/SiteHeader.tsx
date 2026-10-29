import { useEffect, useState } from 'react'
import { ArrowIcon } from './Icons'
import { ContactButton } from '../contact/ContactModalContext'

const navigation = [
  { label: 'Client stories', href: '#client-stories' },
  { label: 'Services', href: '#services' },
  { label: 'Who we help', href: '#who-we-help' },
  { label: 'Our approach', href: '#process' },
  { label: 'Why choose us', href: '#why-choose-us' },
  { label: 'FAQs', href: '#faqs' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sections = navigation.map(({ href }) => ({ href, element: document.getElementById(href.slice(1)) }))
    let animationFrame = 0

    const updateActiveSection = () => {
      const activationLine = Math.min(window.innerHeight * 0.3, 220)
      let current: string | null = null
      for (const { href, element } of sections) {
        if (element && element.getBoundingClientRect().top <= activationLine) current = href
      }
      const lastSection = sections[sections.length - 1]?.element
      if (lastSection && lastSection.getBoundingClientRect().bottom <= activationLine) current = null
      setActiveSection(current)
    }

    const scheduleUpdate = () => {
      if (animationFrame) return
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0
        updateActiveSection()
      })
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ebea] bg-white/95 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <a href="#top" aria-label="Growwth Partners, back to top" className="flex shrink-0 items-center">
          <img src="/image/company_logo.webp" width="53" height="47" alt="" className="h-[54px] w-auto" />
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-4 lg:flex xl:gap-6 min-[1920px]:gap-8">
          {navigation.map((item) => {
            const isActive = activeSection === item.href
            return <a key={item.href} href={item.href} aria-current={isActive ? 'location' : undefined} className={`border-b-2 pb-1 text-[15px] font-extrabold transition-colors hover:text-[#176b67] xl:text-base min-[1920px]:text-lg ${isActive ? 'border-[#176b67] text-[#176b67]' : 'border-transparent text-[#314d55]'}`}>{item.label}</a>
          })}
        </nav>
        <ContactButton className="hidden items-center gap-2 rounded-lg bg-[#c2410c] px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(194,65,12,.16)] transition hover:bg-[#9a3412] lg:inline-flex min-[1920px]:text-base">Book a free call <ArrowIcon className="h-4 w-4" /></ContactButton>
        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dce6e5] text-2xl leading-none text-[#10313c] lg:hidden">{menuOpen ? '×' : '☰'}</button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#e4ebea] bg-white px-4 pb-6 pt-2 lg:hidden">
          {navigation.map((item) => {
            const isActive = activeSection === item.href
            return <a key={item.href} href={item.href} aria-current={isActive ? 'location' : undefined} onClick={() => setMenuOpen(false)} className={`block border-b border-[#edf1f0] border-l-4 py-3.5 pl-3 text-sm font-bold transition-colors ${isActive ? 'border-l-[#176b67] bg-[#eaf5ef] text-[#176b67]' : 'border-l-transparent text-[#314d55]'}`}>{item.label}</a>
          })}
          <ContactButton onClick={() => setMenuOpen(false)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-5 py-3.5 text-sm font-extrabold text-white hover:bg-[#9a3412]">Book a free call <ArrowIcon className="h-4 w-4" /></ContactButton>
        </nav>
      )}
    </header>
  )
}

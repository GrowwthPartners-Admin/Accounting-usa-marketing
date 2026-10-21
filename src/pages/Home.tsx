import { Head } from 'vite-react-ssg'
import { SiteHeader } from '../components/landing/SiteHeader'
import { HeroSection } from '../components/landing/HeroSection'
import { SocialProofSection } from '../components/landing/SocialProofSection'
import { AwardsSection } from '../components/landing/AwardsSection'
import { OverviewSection } from '../components/landing/OverviewSection'
import { ServicesSection } from '../components/landing/ServicesSection'
import { AudienceSection } from '../components/landing/AudienceSection'
import { ComparisonSection } from '../components/landing/ComparisonSection'
import { ProcessSection } from '../components/landing/ProcessSection'
import { ScenariosSection } from '../components/landing/ScenariosSection'
import { WhyChooseSection } from '../components/landing/WhyChooseSection'
import { FaqSection } from '../components/landing/FaqSection'
import { ContactSection } from '../components/landing/ContactSection'
import Footer  from '../components/landing/SiteFooter'
import { ContactModalProvider } from '../components/contact/ContactModalContext'

export function Component() {
  return (
    <ContactModalProvider>
      <Head>
        <title>Accounting Services in the USA | Growwth Partners</title>
        <meta
          name="description"
          content="Accounting support for US businesses, including bookkeeping, financial reporting, payables, receivables, payroll accounting, and system setup."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Accounting Services in the USA | Growwth Partners" />
        <meta property="og:description" content="Clearer books, useful reporting, and accounting support built around your US business." />
      </Head>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#10283b]">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AwardsSection />
        <OverviewSection />
        <ServicesSection />
        <AudienceSection />
        <ComparisonSection />
        <ProcessSection />
        <ScenariosSection />
        <WhyChooseSection />
        <SocialProofSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </ContactModalProvider>
  )
}

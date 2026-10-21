import { Clock, Globe2, Shield, Star, TrendingUp, Users } from 'lucide-react'
import geleijnVerheijke from '../../assets/hero/geleijn-verheijke.webp'
import kiyanForoughi from '../../assets/hero/kiyan-foroughi.webp'
import maneeshMishra from '../../assets/hero/maneesh-mishra.webp'
import rajithVolopay from '../../assets/hero/rajith-volopay.webp'
import suMaeChia from '../../assets/hero/su-mae-chia.webp'

export const stats = [
  { icon: Users, value: '25+', label: 'Clients Worldwide' },
  { icon: Star, value: '25+', label: 'Professional Staff' },
  { icon: Shield, value: '15+', label: 'Years Track Record' },
  { icon: Globe2, value: '15+', label: 'Global Partners' },
]

export const testimonialVideos = [
  {
    id: 'uylxy3pjgl',
    title: 'Customer Testimonial 1',
    name: 'Ellie Curran',
    role: 'Former Co-Founder & CEO, CoLab',
  },
  {
    id: '7lotud5v4w',
    title: 'Customer Testimonial 2',
    name: 'Migara Tennakoon',
    role: 'Founder & CEO, Peace Lily',
  },
  {
    id: '70p2vilm80',
    title: 'Customer Testimonial 3',
    name: 'Seckin Caglin',
    role: 'Co-Founder & Co-CEO, Cenoa',
  },
  {
    id: 'kos5z2qvc2',
    title: 'Customer Testimonial 4',
    name: 'Neha Jain',
    role: 'FP&A Manager, Tigerhall',
  },
  {
    id: 'u5hhsmcpqb',
    title: 'Customer Testimonial 5',
    name: 'Marcos Bulacio',
    role: 'Founder & CEO, Pangea | Regenesis Labs',
  },
  {
    id: '7439tnjfo9',
    title: 'Customer Testimonial 6',
    name: 'Navin Kumar Selvara',
    role: 'Managing Director, Navsar Engineering International',
  },
  {
    id: '8wkgd8bplx',
    title: 'Customer Testimonial 7',
    name: 'Deep Singh',
    role: 'Founder, Credilinq',
  },
  {
    id: 'sohkpspr9u',
    title: 'Customer Testimonial 8',
    name: 'Matt',
    role: 'Co-Founder & Managing Director, Player Media (Mana Group)',
  },
]

export const featuredTestimonials = [
  {
    image: kiyanForoughi,
    name: 'Kiyan Foroughi',
    role: 'Co-founder & CEO',
    company: 'Needle',
    headline: 'Growwth Partners gave us our time back.',
    shortQuote:
      'When you are scaling a startup across five countries with a distributed team, finance ops can consume your entire week. Growwth Partners changed that equation for us. We went from drowning in compliance, payroll coordination, and vendor management to spending maybe two hours a week on ops.',
    fullQuote: [
      'They did not just handle the work. They owned it. US entity setup. Multi-jurisdiction EOR coordination. CPF, MOM, IRAS, all the regulatory noise that kills momentum. They took it off our plate entirely.',
      'What I value most: they operate like operators, not accountants. When something is urgent, they handle it. When we need clarity, they give us signal, not spreadsheets.',
      'For founders who need finance infrastructure that does not require hand-holding, Growwth Partners is the move.',
    ],
    metrics: [
      { icon: Globe2, label: '5 Countries', detail: 'Multi-jurisdiction ops' },
      { icon: Clock, label: '~2 hrs/week', detail: 'FinOps time reduced' },
      { icon: TrendingUp, label: '$600K+ ARR', detail: 'Scaled without friction' },
    ],
  },
  {
    image: rajithVolopay,
    name: 'Rajith',
    role: 'Co-Founder & CEO',
    company: 'Volopay',
    headline: 'They work like an extension of your internal finance leadership.',
    shortQuote:
      'When you are building a global fintech across multiple jurisdictions, tax structuring, regulatory positioning, and transaction readiness are not back-office tasks. They directly impact how fast and how confidently you can scale.',
    fullQuote: [
      'At Volopay, those stakes are even higher. As a regulated fintech backed by global investors, every decision around tax, structure, and financial diligence needs to stand up to scrutiny.',
      'Growwth Partners supported us across tax advisory, due diligence, and M&A transaction work. Their ability to navigate complex structures while keeping a commercial lens stood out immediately.',
      'For companies navigating capital raises, cross-border structures, or strategic transactions, Growwth Partners brings the technical depth and real deal experience you want in your corner.',
    ],
    metrics: [
      { icon: Globe2, label: 'Global Fintech', detail: 'Multi-jurisdiction ops' },
      { icon: Shield, label: 'M&A Ready', detail: 'Due diligence and tax' },
      { icon: TrendingUp, label: 'Investor-Backed', detail: 'Scaled with confidence' },
    ],
  },
  {
    image: suMaeChia,
    name: 'Su-Mae Chia',
    role: 'Founder',
    company: 'BSKIN',
    headline: 'Their insights gave us a clearer picture of profitability.',
    shortQuote:
      'When we brought on Growwth Partners as our Fractional CFO, our business needed more structure and clearer financial direction. They reviewed our financial and funding setup and helped streamline processes for better accountability.',
    fullQuote: [
      'They gave us practical help, advising on employee transfers, setting up new accounting systems, and creating cost allocation frameworks that clarified profitability across our businesses.',
      'They introduced consistent reporting, clarified our KPIs, and pinpointed both underperforming areas and key cost drivers.',
      'Above all, I appreciated Growwth Partners’ flexibility and willingness to tailor support to what we genuinely needed.',
    ],
    metrics: [
      { icon: TrendingUp, label: 'Profitability', detail: 'Clear cost allocation' },
      { icon: Clock, label: 'Fractional CFO', detail: 'Tailored support' },
      { icon: Shield, label: 'KPI Clarity', detail: 'Consistent reporting' },
    ],
  },
  {
    image: geleijnVerheijke,
    name: 'Geleijn Cornelis Verheijke',
    role: 'Founder and CEO',
    company: 'Oxstreet SPV Pte Ltd',
    headline: 'Proactive, low-friction, and they do not overcomplicate things.',
    shortQuote:
      'Growwth Partners has been handling the corporate compliance for my Singapore entity for the past few years, and I have been very happy with their service. What stands out is how proactive and low-friction they make everything.',
    fullQuote: [
      'They reach out well ahead of deadlines with clear instructions on what is needed, handle all the ACRA and IRAS filings, and are pragmatic about things like ECI waivers when the company qualifies.',
      'Yogita and the team are responsive, professional, and clearly know the Singapore regulatory landscape well.',
      'If you are looking for a corporate secretary and tax compliance partner in Singapore, I would recommend them without hesitation.',
    ],
    metrics: [
      { icon: Shield, label: 'Compliance', detail: 'ACRA and IRAS filings' },
      { icon: Clock, label: 'Proactive', detail: 'Ahead of deadlines' },
      { icon: Globe2, label: 'Singapore', detail: 'Regulatory expertise' },
    ],
  },
  {
    image: maneeshMishra,
    name: 'Maneesh Mishra',
    role: 'Founder and Director',
    company: 'Dataleap Services Pte. Ltd.',
    headline:
      'Growwth Partners truly stands out among all the service providers we have worked with.',
    shortQuote:
      'We engaged Growwth Partners to support us with accounting, bookkeeping, preparation of ECI and tax returns. When we first started working with them, we needed help with bookkeeping and bringing better structure to our accounts.',
    fullQuote: [
      'Growwth Partners supported us across bookkeeping, financial due diligence, and filing tax returns with tax authorities. What truly stands out is their strong technical capability, attention to detail, and the consistent quality of their work.',
      'They also provided valuable support on tax matters, including helping us claim carried-back losses, set them off against prior year profits, and secure the resulting tax refund. Among all the service providers we have worked with, Growwth Partners truly stands out, and I would confidently recommend them.',
    ],
    metrics: [
      { icon: Shield, label: 'Tax Refund', detail: 'Carried-back losses' },
      { icon: TrendingUp, label: 'ECI & Tax', detail: 'Filing & compliance' },
      { icon: Clock, label: 'Bookkeeping', detail: 'Structured accounts' },
    ],
  },
]

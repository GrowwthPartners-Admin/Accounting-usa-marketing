import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import appboxo from '../../assets/logos/appboxo.webp?url&no-inline'
import dataLeap from '../../assets/logos/Data-leap-client.webp?url&no-inline'
import ebility from '../../assets/logos/ebility.webp?url&no-inline'
import greenA from '../../assets/logos/GreenA.webp?url&no-inline'
import hybrid from '../../assets/logos/hybrid.webp?url&no-inline'
import juvoxa from '../../assets/logos/juvoxa.webp?url&no-inline'
import kayaFounders from '../../assets/logos/kaya-founders.webp?url&no-inline'
import manaClient from '../../assets/logos/Mana-client.webp?url&no-inline'
import mangtas from '../../assets/logos/mangtas.webp?url&no-inline'
import okeyReply from '../../assets/logos/okeyReply.webp?url&no-inline'
import ronpos from '../../assets/logos/ronpos.webp?url&no-inline'
import tigerhall from '../../assets/logos/tigerhall.webp?url&no-inline'
import treeDots from '../../assets/logos/TreeDots-client.webp?url&no-inline'
import { SectionHeading } from './SectionHeading'

const logos = [
  { name: 'Data Leap', image: dataLeap },
  { name: 'Appboxo', image: appboxo },
  { name: 'eBility', image: ebility },
  { name: 'GreenA', image: greenA },
  { name: 'Hybrid', image: hybrid },
  { name: 'Mana', image: manaClient },
  { name: 'Juvoxa', image: juvoxa },
  { name: 'Kaya Founders', image: kayaFounders },
  { name: 'Mangtas', image: mangtas },
  { name: 'TreeDots', image: treeDots },
  { name: 'OkeyReply', image: okeyReply },
  { name: 'Ronpos', image: ronpos },
  { name: 'Tigerhall', image: tigerhall },
]

type Logo = (typeof logos)[number]

function LogoCard({ logo, duplicate = false }: { logo: Logo; duplicate?: boolean }) {
  return (
    <div
      role="listitem"
      aria-hidden={duplicate}
      className="mx-3 flex h-24 w-40 shrink-0 snap-start items-center justify-center rounded-xl border border-[#dce8e3] bg-white p-2 shadow-[0_10px_30px_rgba(15,60,57,0.06)]"
    >
      <img
        src={logo.image}
        alt={duplicate ? '' : `${logo.name} logo`}
        className="h-20 w-full object-contain transition-transform duration-300 hover:scale-105"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export function TrustedLogosSection() {
  const reduceMotion = useReducedMotion()
  const logoList = useMemo(() => (reduceMotion ? logos : [...logos, ...logos]), [reduceMotion])

  return (
    <section id="trusted-by" className="bg-white py-16 sm:py-20">
      <div className="container-shell overflow-hidden rounded-[24px] border border-[#dce8e3] bg-[#f4f8f6] py-10 shadow-[0_20px_60px_rgba(15,60,57,0.06)] sm:py-12">
        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { y: [18, 0] }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
          className="px-5 sm:px-8"
        >
          <SectionHeading
            eyebrow="Trusted by growing teams"
            title="Trusted by 200+ startups and businesses around the world"
            description="Curious to learn more? Book a free call with our expert to discuss your business needs and save time and effort."
            centered
          />
        </motion.div>

        <div className="mt-10 hidden md:block">
          {reduceMotion ? (
            <div role="list" aria-label="Companies that trust Growwth Partners" className="flex flex-wrap justify-center gap-y-4 px-4">
              {logos.map((logo) => <LogoCard key={logo.name} logo={logo} />)}
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#f4f8f6] to-transparent" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#f4f8f6] to-transparent" aria-hidden="true" />
              <motion.div
                role="list"
                aria-label="Companies that trust Growwth Partners"
                className="flex w-max items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
              >
                {logoList.map((logo, index) => (
                  <LogoCard key={`${index}-${logo.name}`} logo={logo} duplicate={index >= logos.length} />
                ))}
              </motion.div>
            </div>
          )}
        </div>

        <div role="list" aria-label="Companies that trust Growwth Partners" className="mt-8 flex snap-x snap-mandatory overflow-x-auto px-2 pb-2 md:hidden">
          {logos.map((logo) => <LogoCard key={logo.name} logo={logo} />)}
        </div>
        <p className="mt-2 text-center text-xs font-semibold text-[#5a6d72] md:hidden">Swipe to see more logos →</p>
      </div>
    </section>
  )
}

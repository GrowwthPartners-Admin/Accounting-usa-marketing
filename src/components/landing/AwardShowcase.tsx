import { motion, useReducedMotion } from 'framer-motion'
import cmoAsia from '../../assets/hero/cmo-asia.jpg'
import goldenGlobeTiger from '../../assets/hero/golden-globe-tiger.webp'
import innovationAward from '../../assets/hero/innovation-excellence-award.png'
import passionVista from '../../assets/hero/passion-vista.jpg'
import xero from '../../assets/hero/xero.png'

const awardCards = [
  {
    label: 'CMO Asia recognition',
    image: cmoAsia,
    width: 520,
    height: 305,
    className: 'left-0 top-8 w-48 xl:w-56',
    imageClassName: 'h-24',
    delay: 0.12,
  },
  {
    label: 'Innovation Excellence Award',
    image: innovationAward,
    width: 384,
    height: 131,
    className: 'right-0 top-24 w-56 xl:w-64',
    imageClassName: 'h-20',
    delay: 0.2,
  },
  {
    label: 'Passion Vista recognition',
    image: passionVista,
    width: 447,
    height: 447,
    className: 'left-8 bottom-2 w-44 xl:w-52',
    imageClassName: 'h-32',
    delay: 0.28,
  },
  {
    label: 'Xero Silver Partner',
    image: xero,
    width: 554,
    height: 554,
    className: 'right-12 bottom-2 w-36 xl:w-40',
    imageClassName: 'h-28',
    delay: 0.36,
  },
]

export function AwardShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <div className="lg:hidden">
        <div className="relative rounded-2xl bg-[linear-gradient(135deg,#0d3441_0%,#15596a_52%,#278f77_100%)] p-4 shadow-[0_24px_60px_rgba(9,39,51,0.2)] sm:p-6">
          <span className="absolute right-6 top-5 z-10 rounded-full border border-white/70 bg-white px-4 py-2 text-xs font-bold text-[#176b67] shadow-sm">
            5.0 rated
          </span>
          <div className="mx-auto mt-10 max-w-[360px] rounded-2xl border border-white/80 bg-white p-4 shadow-[0_18px_50px_rgba(9,39,51,0.2)]">
            <div className="rounded-2xl bg-[#edf7f1] p-3">
              <img src={goldenGlobeTiger} alt="Golden Globe Tigers Awards" width="774" height="551" className="h-40 w-full object-contain sm:h-52" loading="eager" decoding="async" />
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#176b67] sm:text-sm">
              Asia&apos;s Greatest CFO Award
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
          {awardCards.map((card) => (
            <div key={card.label} className="flex min-h-32 items-center justify-center rounded-2xl border border-[#dfe9e6] bg-white p-3 shadow-[0_12px_30px_rgba(15,60,57,0.08)] sm:min-h-40 sm:p-5">
              <img src={card.image} alt={card.label} width={card.width} height={card.height} className="max-h-28 w-full object-contain" loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto hidden min-h-[590px] w-full max-w-[38rem] lg:block xl:min-h-[660px]">
        <div className="absolute inset-5 rounded-2xl bg-[linear-gradient(135deg,#0d3441_0%,#15596a_52%,#278f77_100%)] shadow-[0_30px_90px_rgba(9,39,51,0.24)]" />
        <div className="absolute inset-10 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md" />

        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { y: [24, 0], scale: [0.96, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 z-10 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/80 bg-white p-5 shadow-[0_24px_80px_rgba(9,39,51,0.24)]"
        >
          <div className="mb-4 rounded-2xl bg-[#edf7f1] p-3">
            <img src={goldenGlobeTiger} alt="Golden Globe Tigers Awards" width="774" height="551" className="h-56 w-full object-contain xl:h-64" loading="eager" decoding="async" />
          </div>
          <p className="text-center text-sm font-bold uppercase tracking-[0.22em] text-[#176b67]">
            Asia&apos;s Greatest CFO Award
          </p>
        </motion.div>

        {awardCards.map((card) => (
          <motion.div
            key={card.label}
            initial={false}
            whileInView={reduceMotion ? undefined : { y: [18, 0], scale: [0.94, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: card.delay, duration: 0.55, ease: 'easeOut' }}
            className={`group absolute z-20 ${card.className}`}
          >
            <div className={`rounded-2xl border border-white/80 bg-white p-4 shadow-[0_18px_50px_rgba(9,39,51,0.2)] transition-transform duration-300 ease-out ${reduceMotion ? '' : 'group-hover:-translate-y-1.5 group-hover:scale-[1.03]'}`}>
              <img src={card.image} alt={card.label} width={card.width} height={card.height} className={`w-full object-contain ${card.imageClassName}`} loading="eager" decoding="async" />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={false}
          whileInView={reduceMotion ? undefined : { x: [20, 0] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.44, duration: 0.5, ease: 'easeOut' }}
          className="absolute right-6 top-6 z-30 rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-bold text-[#176b67] shadow-[0_14px_34px_rgba(9,39,51,0.18)]"
        >
          5.0 rated
        </motion.div>
      </div>
    </>
  )
}

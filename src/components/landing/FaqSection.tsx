import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

const questions = [
  { question: 'Can you work with QuickBooks or Xero?', answer: 'Yes. The accounting system can be set up or improved around the tools your business already uses, including QuickBooks and Xero.' },
  { question: 'Can the reporting follow US GAAP?', answer: 'US GAAP considerations can be built into the accounting and reporting approach. The exact scope depends on your entity, transactions, and reporting requirements.' },
  { question: 'Do you work with early-stage companies?', answer: 'Yes. Support can begin with the first chart of accounts and monthly close, then change as your team and reporting needs grow.' },
  { question: 'Is this ongoing or only for cleanup projects?', answer: 'Both are possible. A project can focus on setup or cleanup, and a recurring arrangement can cover bookkeeping and reporting afterward.' },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="section-space bg-[#f4f8f6]">
      <div className="container-shell">
        <SectionHeading eyebrow="Common questions" title="Answers before we get started." description="A few practical details about how accounting support can work for your business." centered />
        <div className="mx-auto mt-11 max-w-[860px] space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`

            return (
              <article key={item.question} className={`border bg-white transition-colors duration-300 ${isOpen ? 'border-[#8bc1ae]' : 'border-[#dce7e3]'}`}>
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex((current) => current === index ? null : index)}
                    className="relative flex min-h-[76px] w-full px-14 py-5 text-center text-base font-extrabold text-[#10313c]"
                  >
                    <span>{item.question}</span>
                    <span className={`absolute right-5 flex h-8 w-8 ml-10 items-center justify-center rounded-full bg-[#e5f3eb] text-xl font-normal text-[#23876e] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen} data-open={isOpen} className="faq-answer">
                  <div className="min-h-0 overflow-hidden">
                    <p className="mx-6 mb-5 border-t border-[#e6eeeb] pt-4 text-center text-sm leading-7 text-[#5a6d72]">{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

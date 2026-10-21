import { useCallback, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, MessageSquareQuote, Star } from 'lucide-react'
import { featuredTestimonials } from './data'

export function FeaturedTestimonials() {
  const [activeFeatured, setActiveFeatured] = useState(0)
  const [expandedStory, setExpandedStory] = useState<number | null>(null)
  const activeStory = featuredTestimonials[activeFeatured]

  const goToStory = useCallback((nextIndex: number) => {
    setActiveFeatured((nextIndex + featuredTestimonials.length) % featuredTestimonials.length)
    setExpandedStory(null)
  }, [])

  return (
    <div aria-label="Featured client stories" className="mx-auto mt-12 max-w-6xl">
      <div className="rounded-[24px] border border-[#dce8e3] bg-white p-5 shadow-[0_22px_60px_rgba(15,60,57,0.09)] sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
          <aside className="flex flex-col items-center text-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[#e5f3eb] bg-[#e5f3eb] shadow-[0_16px_42px_rgba(15,60,57,0.12)] sm:h-36 sm:w-36">
              <img
                src={activeStory.image}
                alt={`${activeStory.name}, ${activeStory.role} at ${activeStory.company}`}
                width="144"
                height="144"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-lg font-extrabold text-[#10313c]">{activeStory.name}</p>
            <p className="mt-1 text-sm font-semibold text-[#5a6d72]">{activeStory.role}</p>
            <p className="text-sm font-extrabold text-[#23876e]">{activeStory.company}</p>

            <div className="mt-6 w-full space-y-3 border-t border-[#e6eeeb] pt-5">
              {activeStory.metrics.map((metric) => {
                const Icon = metric.icon

                return (
                  <div key={metric.label} className="flex items-center gap-3 text-left">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3eb] text-[#23876e]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-[#10313c]">{metric.label}</span>
                      <span className="block text-xs font-semibold text-[#6d8083]">{metric.detail}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </aside>

          <div className="min-w-0" aria-live="polite">
            <MessageSquareQuote className="mb-4 h-8 w-8 text-[#d66a29]" aria-hidden="true" />
            <div className="mb-4 flex gap-1 text-[#ed7a32]" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />)}
            </div>
            <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#10313c] sm:text-3xl">
              “{activeStory.headline}”
            </h3>
            <p className="mt-5 text-base leading-8 text-[#566a70]">{activeStory.shortQuote}</p>

            {expandedStory === activeFeatured && (
              <div className="mt-5 space-y-4 text-base leading-8 text-[#566a70]">
                {activeStory.fullQuote.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}

            <button
              type="button"
              aria-expanded={expandedStory === activeFeatured}
              onClick={() => setExpandedStory((current) => current === activeFeatured ? null : activeFeatured)}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#bd5c25] transition hover:text-[#8e4015]"
            >
              {expandedStory === activeFeatured ? 'Show less' : 'Read full story'}
              {expandedStory === activeFeatured
                ? <ChevronUp className="h-4 w-4" aria-hidden="true" />
                : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#e6eeeb] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-center gap-2 sm:justify-start">
            {featuredTestimonials.map((story, index) => (
              <button
                key={story.name}
                type="button"
                onClick={() => goToStory(index)}
                aria-label={`Show testimonial from ${story.name}`}
                aria-pressed={activeFeatured === index}
                className={`h-2.5 rounded-full transition-all ${activeFeatured === index ? 'w-8 bg-[#23876e]' : 'w-2.5 bg-[#c8dcd4] hover:bg-[#8bc1ae]'}`}
              />
            ))}
          </div>
          <div className="flex justify-center gap-3">
            <button type="button" onClick={() => goToStory(activeFeatured - 1)} aria-label="Previous testimonial" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dce8e3] bg-white text-[#10313c] shadow-sm transition hover:bg-[#e5f3eb]">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => goToStory(activeFeatured + 1)} aria-label="Next testimonial" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0d3441] text-white shadow-[0_12px_28px_rgba(9,39,51,0.18)] transition hover:bg-[#15596a]">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

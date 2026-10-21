import { MessageSquareQuote } from 'lucide-react'
import { testimonialVideos } from './data'

export function VideoTestimonials() {
  return (
    <div className="mx-auto mt-12 max-w-6xl">
      <div className="rounded-[24px] border border-[#dce8e3] bg-white p-5 shadow-[0_22px_60px_rgba(15,60,57,0.08)] sm:p-7 lg:p-9">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#d66a29]">Video testimonials</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#10313c] sm:text-3xl">Hear directly from founders and finance leaders</h3>
            <p className="mt-3 text-base leading-7 text-[#566a70]">A quick look at how clients describe working with Growwth Partners across compliance, finance operations, and strategic CFO support.</p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e5f3eb] px-4 py-2 text-sm font-extrabold text-[#23876e]">
            <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
            {testimonialVideos.length} client videos
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonialVideos.map((video, index) => (
            <article key={video.id} className={`overflow-hidden rounded-[20px] border border-[#dce8e3] bg-[#f9fbfa] shadow-[0_14px_36px_rgba(15,60,57,0.07)] ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
              <div className="aspect-video w-full overflow-hidden bg-[#092733]">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                  title={`${video.name} testimonial video`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-extrabold text-[#10313c]">{video.name}</p>
                <p className="mt-1 text-sm leading-6 text-[#5a6d72]">{video.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface TheoryImage {
  url: string
  caption: string
}

interface Theory {
  id: number
  title: string
  shortDesc: string
  content: string
  images: TheoryImage[]
  keyPoints: string[]
}

interface TheoryCardProps {
  theory: Theory
}

export default function TheoryCard({ theory }: TheoryCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? theory.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === theory.images.length - 1 ? 0 : prev + 1
    )
  }

  const currentImage = theory.images[currentImageIndex]
  const shouldAlignImageRight = currentImage.url.includes('OIP.fzmQgSyIIQcSpTHGumTkHAHaHP')

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[96vw] md:max-w-5xl h-[94vh] rounded-3xl border border-white/30 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/55 transition"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-[38%] min-h-[260px] bg-slate-950 lg:h-full lg:w-[46%]">
          <Image
            key={currentImageIndex}
            src={currentImage.url}
            alt={currentImage.caption}
            fill
            className={shouldAlignImageRight ? 'object-contain object-right p-2 sm:p-3' : 'object-contain object-center p-2 sm:p-3'}
            sizes="(max-width: 1024px) 100vw, 46vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs uppercase tracking-wide text-white/80 mb-1">Hình minh họa</p>
            <p className="text-sm sm:text-base leading-relaxed">{currentImage.caption}</p>
          </div>

          {theory.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={handlePrevImage}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/35 transition"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="px-2 py-1 rounded-full bg-black/35 text-white text-xs">
                {currentImageIndex + 1}/{theory.images.length}
              </span>
              <button
                onClick={handleNextImage}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/35 transition"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-secondary/25 p-5 sm:p-7">
          <div className="mb-5">
            <span className="inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
              Nội dung lý luận
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">{theory.title}</h2>
            <p className="text-muted-foreground mt-2 leading-relaxed">{theory.shortDesc}</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Nội dung chi tiết</h3>
              <p className="text-foreground leading-relaxed">{theory.content}</p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-foreground mb-4">Điểm chính</h4>
              <ul className="space-y-2.5">
                {theory.keyPoints.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-2xl border border-border/80 bg-white p-6 text-left w-full shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              Mục {theory.id + 1}
            </span>
            <span className="text-xs text-muted-foreground">2 ảnh minh họa</span>
          </div>

          <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
            {theory.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{theory.shortDesc}</p>

          <div className="pt-2 flex items-center justify-between">
            <p className="text-primary text-sm font-semibold">Xem chi tiết</p>
            <span className="text-primary text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </button>

      {modal && createPortal(modal, document.body)}
    </>
  )
}

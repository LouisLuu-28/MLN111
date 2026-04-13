'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-md ring-1 ring-primary/20 flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">MLN</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-bold text-xl text-foreground tracking-tight group-hover:text-primary transition-colors">Nhóm 4</span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">MLN111</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 items-center rounded-full border border-border/80 bg-white/80 px-2 py-1 shadow-sm">
          <a href="#theory" className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full hover:opacity-90 transition font-semibold shadow-sm">
            Lý Luận
          </a>
          <a href="#quiz" className="text-foreground hover:text-primary hover:bg-primary/10 transition px-4 py-2 rounded-full font-medium">
            Quiz
          </a>
          {/* <a href="#" className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full hover:opacity-90 transition font-semibold shadow-sm">
            Tài Liệu
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 hover:bg-secondary rounded-xl border border-border/70"
          aria-label="Mở menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur border border-border rounded-2xl shadow-lg md:hidden">
            <div className="flex flex-col gap-1 p-3">
              <a
                href="#theory"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition px-3 py-2.5 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Lý Luận
              </a>
              <a
                href="#quiz"
                className="text-foreground hover:text-primary hover:bg-primary/10 transition px-3 py-2.5 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Quiz
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-primary to-accent text-white px-3 py-2.5 rounded-xl font-semibold text-center mt-1"
                onClick={() => setIsOpen(false)}
              >
                Tài Liệu
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

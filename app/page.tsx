import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TheorySection from '@/components/TheorySection'
import QuizSection from '@/components/QuizSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <Hero />
      <TheorySection />
      <QuizSection />
      <Footer />
    </main>
  )
}

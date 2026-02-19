import Hero from '@/components/Hero'
import MarketVision from '@/components/MarketVision'
import Differentials from '@/components/Differentials'
import FoundersPack from '@/components/FoundersPack'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MarketVision />
      <Differentials />
      <FoundersPack />
      <Footer />
    </main>
  )
}

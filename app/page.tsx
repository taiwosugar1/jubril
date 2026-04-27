import AwardsRecognition from '@/components/Awardsrecognition '
import HeroSection from '@/components/Hero'
import HybridEcosystem from '@/components/Hybridecosystem'
import LegacySection from '@/components/Legacysection'
import MarqueeScroll from '@/components/MarqueeScroll'
import MyMentors from '@/components/Mymentor'
import OriginSection from '@/components/OriginSection'
import PersonalFavorites from '@/components/Personalfavorites'
import StrategicAlliances from '@/components/Strategicalliances'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <MarqueeScroll />

      <section id="origin">
      <OriginSection />
      </section>

      <section id="legacy">
      <LegacySection />
      </section>

      <section id="alliance">
      <StrategicAlliances />
      </section>

      <section id="hybrid">
        <HybridEcosystem />
      </section>

      <section id="favourite">
        <PersonalFavorites />
      </section>

      <section id="mentors">
        <MyMentors />
      </section>

      <section id="recognition">
        <AwardsRecognition />
      </section>

    </main>
  )
}
import { MetaLayout } from '@/components/layout/MetaLayout'
import { Hero } from '@/components/sections/home/Hero'
import { Presentation } from '@/components/sections/home/Presentation'
import { PresidentMessage } from '@/components/sections/home/PresidentMessage'
import { Statistics } from '@/components/sections/home/Statistics'
import { Values } from '@/components/sections/home/Values'
import { ServicesPreview } from '@/components/sections/home/ServicesPreview'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { LatestNews } from '@/components/sections/home/LatestNews'
import { Partners } from '@/components/sections/home/Partners'
import { CTA } from '@/components/sections/home/CTA'

export default function Home() {
  return (
    <MetaLayout title="GROUPE CAMOI | Expertise Comptable, Audit & Centre ASFIFO">
      <Hero />
      <Presentation />
      <PresidentMessage />
      <Statistics />
      <Values />
      <ServicesPreview />
      <Testimonials />
      <LatestNews />
      <Partners />
      <CTA />
    </MetaLayout>
  )
}

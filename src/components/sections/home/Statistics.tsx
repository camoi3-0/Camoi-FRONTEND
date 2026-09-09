import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { stats } from '@/data/stats'

export function Statistics() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-500/[0.04] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-400/[0.04] blur-[80px] rounded-full" />
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

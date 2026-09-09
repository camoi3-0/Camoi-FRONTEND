import { Award, Heart, Target } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { values } from '@/data/values'

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={24} />,
  Heart: <Heart size={24} />,
  Target: <Target size={24} />,
}

export function Values() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-surface-alt">
      <Container>
        <SectionTitle
          label="Nos valeurs"
          title="Les piliers de notre professionnalisme"
          description="Trois valeurs fortes qui guident chacune de nos actions et définissent notre identité."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-card-gap)]">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.08}>
              <FeatureCard
                icon={iconMap[value.icon]}
                title={value.title}
                description={value.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}

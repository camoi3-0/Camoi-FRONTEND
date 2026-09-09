import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { partners } from '@/data/partners'

export function Partners() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-surface-alt">
      <Container>
        <SectionTitle
          label="Partenaires"
          title="Ils nous font confiance"
          description="Un réseau de partenaires institutionnels, universitaires et privés qui partagent nos valeurs."
        />

        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 bg-white rounded-xl border border-primary-100/60 hover:border-primary-200 hover:shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-primary-400 font-semibold text-center text-sm leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

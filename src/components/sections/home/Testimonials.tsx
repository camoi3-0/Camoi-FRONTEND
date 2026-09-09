import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-gradient-to-b from-surface-alt to-white relative overflow-hidden">
      {/* Décor discret */}
      <div className="absolute top-24 -left-24 w-80 h-80 bg-accent-500/[0.04] blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-primary-900/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          label="Témoignages"
          title="Ce que disent celles et ceux que nous accompagnons"
          description="Des retours d'expérience de dirigeants, d'entreprises et de participants à nos formations."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="break-inside-avoid mb-6">
              <AnimatedSection delay={index * 0.07}>
                <figure
                  className={`group relative rounded-2xl p-7 sm:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                    testimonial.highlight
                      ? 'bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 border-white/10 text-white shadow-2xl'
                      : 'bg-white border-primary-100/60 hover:border-primary-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]'
                  }`}
                >
                  {/* Guillemet décoratif */}
                  <Quote
                    size={32}
                    aria-hidden="true"
                    className={`mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      testimonial.highlight
                        ? 'text-accent-400 opacity-80'
                        : 'text-accent-500/35'
                    }`}
                  />

                  <blockquote
                    className={`font-medium leading-[1.6] ${
                      testimonial.highlight
                        ? 'text-lg sm:text-xl text-white/95'
                        : 'text-[17px] text-primary-800'
                    }`}
                  >
                    « {testimonial.quote} »
                  </blockquote>
                </figure>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-primary-400">
          Témoignages recueillis auprès de clients et de participants aux formations du GROUPE CAMOI.
        </p>
      </Container>
    </section>
  )
}

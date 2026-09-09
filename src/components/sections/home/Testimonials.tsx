import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { testimonials } from '@/data/testimonials'

const defaultActiveId =
  testimonials.find((testimonial) => testimonial.highlight)?.id ?? testimonials[0].id

export function Testimonials() {
  const [activeId, setActiveId] = useState(defaultActiveId)
  const prefersReducedMotion = useReducedMotion()

  const highlightTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 320, damping: 32, mass: 0.8 }

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

        {/* Grille CSS (et non multi-colonnes) : les mesures de Motion y sont fiables */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, index) => {
            const isActive = testimonial.id === activeId

            return (
              <div
                key={testimonial.id}
                /* La carte active passe au-dessus : le bloc en vol ne doit pas être recouvert */
                className={`relative ${isActive ? 'z-20' : 'z-0'}`}
              >
                <AnimatedSection delay={index * 0.07} className="h-full">
                  <figure
                    tabIndex={0}
                    onMouseEnter={() => setActiveId(testimonial.id)}
                    onFocus={() => setActiveId(testimonial.id)}
                    onClick={() => setActiveId(testimonial.id)}
                    className={`group relative h-full flex flex-col rounded-2xl p-7 sm:p-8 border cursor-default outline-none transition-[border-color,box-shadow,transform] duration-300 focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 ${
                      isActive
                        ? 'border-primary-950 shadow-2xl'
                        : 'border-primary-100/60 bg-white shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]'
                    }`}
                  >
                    {/* Le bloc sombre : une seule instance partagée, qui glisse d'une carte à l'autre */}
                    {isActive && (
                      <motion.div
                        layoutId="testimonial-highlight"
                        transition={highlightTransition}
                        aria-hidden="true"
                        className="absolute -inset-px rounded-2xl overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 ring-1 ring-white/10"
                      >
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                            backgroundSize: '20px 20px',
                          }}
                        />
                        <motion.div
                          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -top-16 -right-16 w-56 h-56 bg-accent-500/25 blur-[70px] rounded-full"
                        />
                      </motion.div>
                    )}

                    {/* Fond blanc de secours sous le texte tant que le bloc noir n'est pas arrivé */}
                    <div className="relative z-10 flex flex-col">
                      <Quote
                        size={32}
                        aria-hidden="true"
                        className={`mb-5 transition-[color,transform] duration-200 ${
                          isActive
                            ? 'text-accent-400 scale-110 delay-150'
                            : 'text-accent-500/35 group-hover:scale-110'
                        }`}
                      />

                      <blockquote
                        /* Le changement de couleur est retardé pour coller à l'arrivée du bloc :
                           pendant le vol le texte reste foncé sur fond blanc, donc lisible. */
                        className={`text-[17px] sm:text-lg font-medium leading-[1.6] transition-colors duration-200 ${
                          isActive ? 'text-white/95 delay-150' : 'text-primary-800'
                        }`}
                      >
                        « {testimonial.quote} »
                      </blockquote>
                    </div>
                  </figure>
                </AnimatedSection>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-primary-400">
          Témoignages recueillis auprès de clients et de participants aux formations du GROUPE CAMOI.
        </p>
      </Container>
    </section>
  )
}

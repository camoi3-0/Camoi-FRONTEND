import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const features = [
  'Plus de 18 ans d\'expérience',
  'Une équipe de professionnels qualifiés',
  'Un réseau de partenaires stratégiques',
]

export function Presentation() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
              <span className="w-8 h-px bg-accent-500" />
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 tracking-tight mb-6 leading-tight">
              Un partenaire de confiance pour votre réussite
            </h2>
            <p className="text-[17px] text-primary-500 leading-[1.65] mb-10">
              Depuis 2008, CAMOI accompagne les entreprises et les professionnels
              dans leur développement. Notre cabinet d'expertise comptable et notre
              cabinet d'audit Expert-Conseils allient rigueur technique et innovation
              pour répondre à vos besoins avec professionnalisme.
            </p>
            <ul className="space-y-5 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                  </div>
                  <span className="text-primary-700 font-medium text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-accent-600 transition-colors duration-200 group text-[15px]"
            >
              En savoir plus
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>

          {/* Visual Card */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-[var(--shadow-card-hover)] shadow-primary-950/30">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 right-0 w-40 h-40 bg-accent-500 blur-[60px] rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400 blur-[40px] rounded-full"
                />
                <div className="relative z-10">
                  <div className="text-xs text-primary-400 font-medium tracking-wide uppercase mb-2">Depuis 2008</div>
                  <div className="text-6xl md:text-7xl font-bold mb-2 tracking-tight">18+</div>
                  <div className="text-base text-primary-400 mb-8">Années d'expérience</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 border border-white/[0.08]">
                      <div className="text-2xl font-bold tracking-tight">30+</div>
                      <div className="text-xs text-primary-400 mt-1">Collaborateurs</div>
                    </div>
                    <div className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 border border-white/[0.08]">
                      <div className="text-2xl font-bold tracking-tight">500+</div>
                      <div className="text-xs text-primary-400 mt-1">Entreprises accompagnées</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-accent-500 rounded-2xl -z-10 opacity-15" />
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-primary-200 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
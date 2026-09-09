import { Container } from '@/components/ui/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Quote } from 'lucide-react'
import presidentPhoto from '@/assets/president.jpeg'
import oecfmLogo from '@/assets/oecfm.jpeg'

export function PresidentMessage() {
  return (
    <section className="py-[var(--spacing-section-py)] bg-white relative overflow-hidden">
      {/* Background subtle mesh decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-900/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <AnimatedSection direction="scale">
          <div className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-white/10">
            {/* Subtle decorative dot grid */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Glowing accent circle */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent-500/20 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Profile Card / Avatar Column */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="mb-6">
                  {/* Avatar wrapper */}
                  <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={presidentPhoto}
                      alt="Tantely RAHOELIARIVAHY RAJOBSON, Expert-Comptable et Commissaire aux comptes"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  Tantely RAHOELIARIVAHY RAJOBSON
                </h3>
                <p className="text-accent-300 text-xs sm:text-sm font-semibold leading-relaxed mb-4">
                  Expert-Comptable et Commissaire au compte depuis 2004 —
                  compétences nationales, régionales et internationales
                </p>

                <img
                  src={oecfmLogo}
                  alt="Ordre des Experts-Comptables et Financiers de Madagascar (OECFM)"
                  className="w-16 h-16 rounded-full object-cover shadow-lg ring-1 ring-white/15"
                  loading="lazy"
                />
              </div>

              {/* Message Content Column */}
              <div className="lg:col-span-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
                <div className="flex items-center gap-2 text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <Quote size={20} className="text-accent-400 opacity-80" />
                  <span>Mot du Dirigeant</span>
                </div>

                <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-white/95 leading-relaxed sm:leading-relaxed mb-6 italic">
                  « Bienvenue au GROUPE CAMOI. Face à la mutation rapide de l'environnement économique de Madagascar et de la région Océan Indien, notre engagement s'appuie sur la rigueur, l'éthique et l'innovation constante.
                  <br className="hidden sm:block" />
                  <span className="inline-block mt-2">
                    À travers nos cabinets d'expertise comptable, d'audit et notre centre de formation ASFIFO, nous conjuguons compétences franco-malgaches et proximité humaine pour vous accompagner dans chaque étape stratégique. Oser grandir, oser changer : c'est avec vous que nous osons le DIGITAL. »
                  </span>
                </blockquote>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-primary-300 font-medium">
                  <div>
                    <span className="text-white font-semibold">GROUPE CAMOI</span> — Antananarivo, Madagascar
                  </div>
                  <div className="text-accent-400 font-semibold tracking-wide">
                    Cabinet CAMOI 3.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}

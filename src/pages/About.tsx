import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { Award, Heart, Target, Users, Building2, TrendingUp } from 'lucide-react'
import { values } from '@/data/values'
import { stats } from '@/data/stats'

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={24} />,
  Heart: <Heart size={24} />,
  Target: <Target size={24} />,
}

const team = [
  { name: 'Tantely RAJOBSON', role: 'Expert-Comptable, Gérante du cabinet', description: 'Pilote la direction du cabinet CAMOI et la validation des missions d\'expertise comptable.' },
  { name: 'Hanitriniaina MANANARIVO', role: 'Responsable Communication du groupe', description: 'En charge de la communication, de l\'animation digitale et de la relation avec les partenaires.' },
  { name: 'Pôle Audit', role: 'Cabinet Expert-Conseils', description: 'Commissariat aux comptes, audit légal et audit contractuel pour la certification des comptes.' },
  { name: 'Pôle Fiscalité & Juridique', role: 'Assistance Fiscale, Juridique et Sociale', description: 'Accompagne les entreprises dans leurs obligations fiscales, sociales et juridiques.' },
]

const timeline = [
  { year: 'Nos origines', title: 'Naissance d\'une expertise', description: 'Le cabinet CAMOI se développe pour répondre à l\'évolution des besoins des entreprises en conseil, comptabilité et audit dans l\'océan Indien.' },
  { year: 'Structuration', title: 'Un groupe à 3 pôles', description: 'Constitution du Groupe CAMOI autour de CAMOI (expertise comptable) et Expert-Conseils (audit et commissariat aux comptes).' },
  { year: 'Partenariat', title: 'Alliance avec l\'ASFIFO', description: 'Signature d\'un partenariat stratégique avec l\'ASFIFO, centre de formation professionnelle spécialisé dans l\'apprentissage par alternance.' },
  { year: 'Digitalisation', title: 'Vers le tout numérique', description: 'Le groupe engage la transformation digitale de son modèle économique et de ses outils de gestion.' },
  { year: 'Aujourd\'hui', title: 'CAMOI 3.0', description: 'Une nouvelle ère pour le groupe, avec une offre élargie et plus de 12 ans d\'expérience au service des entreprises.' },
]

export default function About() {
  return (
    <MetaLayout title="À propos" description="Découvrez l'histoire, la mission et l'équipe de CAMOI, groupe d'expertise comptable et d'audit à Madagascar.">
      <PageHero
        label="À propos"
        title="Notre histoire"
        description="Depuis 2008, CAMOI accompagne les entreprises et les professionnels vers un développement durable."
      />

      {/* Mission */}
      <section className="py-[var(--spacing-section-py)] bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
                <span className="w-8 h-px bg-accent-500" />
                Notre mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight mb-6 leading-tight">
                Un professionnel intègre et engagé au service de vos ambitions
              </h2>
              <p className="text-[17px] text-primary-500 leading-relaxed mb-6">
                Notre mission est de fournir des services d'expertise comptable, d'audit et de conseil
                de la plus haute qualité, avec des solutions
                innovantes et adaptées aux besoins du marché.
              </p>
              <p className="text-primary-500 leading-relaxed text-[15px]">
                Nous croyons que chaque entreprise et chaque dirigeant mérite un accompagnement
                personnalisé pour atteindre ses objectifs. C'est cette philosophie qui guide
                chacune de nos actions depuis notre création. CAMOI se positionne aujourd'hui
                parmi les cinq premiers cabinets d'expertise à Madagascar, au service des
                entreprises et de l'employabilité des jeunes.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-5 lg:gap-6">
                {[
                  { icon: <Building2 size={24} />, title: 'Expertise', desc: 'Comptable et audit' },
                  { icon: <Users size={24} />, title: 'Accompagnement', desc: 'Personnalisé' },
                  { icon: <TrendingUp size={24} />, title: 'Innovation', desc: 'Continue' },
                ].map((item) => (
                  <div key={item.title} className="px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] rounded-2xl bg-surface-alt border border-primary-100/60 text-center hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary-900 text-white flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <div className="font-bold text-primary-900 text-sm mb-0.5">{item.title}</div>
                    <div className="text-xs text-primary-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container size="md">
          <SectionTitle label="Notre parcours" title="Les étapes clés de notre histoire" />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 -translate-x-1/2" />
            {timeline.map((item, index) => (
              <AnimatedSection
                key={item.year}
                delay={index * 0.1}
                className={`relative flex items-start gap-6 md:gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] rounded-2xl border border-primary-100/80 shadow-sm inline-block max-w-sm hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                    <span className="inline-block text-xs font-bold text-accent-600 tracking-wide uppercase">{item.year}</span>
                    <h3 className="text-base font-bold text-primary-900 mt-1 leading-snug">{item.title}</h3>
                    <p className="text-primary-500 text-sm mt-2 leading-[1.65]">{item.description}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-accent-500 rounded-full -translate-x-1/2 top-7 ring-[5px] ring-surface-alt z-10" />
                <div className="hidden md:block flex-1" />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-[var(--spacing-section-py)] bg-white">
        <Container>
          <SectionTitle label="Notre équipe" title="Des experts à votre service" description="Une équipe de professionnels qualifiés et passionnés, dédiée à votre réussite." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-card-gap)]">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div className="group px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] bg-surface-alt rounded-2xl border border-primary-100/60 hover:border-primary-200 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 text-center h-full flex flex-col items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-800 to-primary-900 text-white flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300 shadow-sm">
                    <Users size={22} />
                  </div>
                  <div className="text-xs font-bold text-accent-600 mb-1 tracking-wide">{member.role}</div>
                  <h3 className="text-base font-bold text-primary-900 mb-2">{member.name}</h3>
                  <p className="text-primary-500 text-sm leading-[1.65]">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container>
          <SectionTitle label="Nos valeurs" title="Ce qui nous guide" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-card-gap)]">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <FeatureCard icon={iconMap[value.icon]} title={value.title} description={value.description} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Partenaire formation - ASFIFO */}
      <section className="py-[var(--spacing-section-py)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="rounded-2xl border border-primary-100/60 bg-surface-alt px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] text-center max-w-2xl mx-auto">
              <div className="text-xs font-bold text-accent-600 mb-2 tracking-wide uppercase">Notre partenaire formation</div>
              <p className="text-primary-500 text-sm leading-[1.65] mb-4">
                Pour vos besoins en formation professionnelle, CAMOI s'appuie sur son partenaire
                historique, l'ASFIFO, centre de formation spécialisé dans l'apprentissage par alternance.
              </p>
              <a
                href="https://asfifo.aimable-mada.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-900 hover:text-accent-600 transition-colors"
              >
                Découvrir l'ASFIFO →
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-[var(--spacing-section-py)] bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }} />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <StatsCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </MetaLayout >
  )
}
import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { ShieldCheck, Calculator, FileText, Building2, Users, GraduationCap, CheckCircle } from 'lucide-react'
import { services, serviceIconColors, serviceIllustrationGradients } from '@/data/services'
import { serviceImages } from '@/data/serviceImages'
import { SafeImage } from '@/components/ui/SafeImage'
import { Link } from 'react-router-dom'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={28} />,
  Calculator: <Calculator size={28} />,
  FileText: <FileText size={28} />,
  Building2: <Building2 size={28} />,
  Users: <Users size={28} />,
  GraduationCap: <GraduationCap size={28} />,
}

export default function Services() {
  return (
    <MetaLayout title="Services" description="Des solutions d'expertise comptable, d'audit et de conseil sur mesure pour votre entreprise.">
      <PageHero
        label="Services"
        title="Nos services"
        description="Un accompagnement complet et personnalisé pour répondre à tous vos besoins professionnels."
      />

      {/* Services */}
      <section className="py-[var(--spacing-section-py)] bg-white">
        <Container className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const image = serviceImages[service.id]
            return (
            <AnimatedSection key={service.id} direction={index % 2 === 0 ? 'left' : 'right'} spring>
              <div id={service.id} className="absolute -translate-y-24 invisible" />
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${serviceIconColors[service.icon] || 'from-primary-800 to-primary-900'} text-white flex items-center justify-center mb-6 shadow-[var(--shadow-card)]`}>
                    {iconMap[service.icon] || <Calculator size={28} />}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-900 tracking-tight mb-5 leading-tight">{service.title}</h2>
                  <p className="text-[17px] text-primary-500 leading-[1.65] mb-7">{service.description}</p>
                  <ul className="space-y-3.5 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="shrink-0 w-5 h-5 text-accent-500" />
                        <span className="text-primary-700 text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="primary">Demander un devis</Button>
                  </Link>
                </div>
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {image ? (
                    <div className="relative rounded-3xl overflow-hidden border border-primary-100/60 shadow-[var(--shadow-card)] aspect-[499/239]">
                      <SafeImage src={image} alt={service.title} className="w-full h-full" objectFit="cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <span className="text-white font-semibold text-sm drop-shadow-sm">{service.title}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-surface-alt to-primary-50/50 rounded-3xl p-8 md:p-12 border border-primary-100/60 shadow-[var(--shadow-card)]">
                      <div className="bg-white rounded-2xl p-9 lg:p-10 shadow-[var(--shadow-card)]">
                        <div className={`w-full h-48 bg-gradient-to-br ${serviceIllustrationGradients[service.icon] || 'from-primary-100 to-primary-200/80'} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                          <div className="relative flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                              {iconMap[service.icon] || <Calculator size={32} className="text-primary-400" />}
                            </div>
                            <span className="text-primary-400/60 font-semibold text-sm">{service.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
            )
          })}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[var(--spacing-section-py)] bg-gradient-to-br from-primary-950 to-primary-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent-500/[0.04] blur-[80px] rounded-full" />
        <Container size="sm" className="relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Besoin d'un conseil personnalisé ?</h2>
            <p className="text-primary-400 mb-8 text-[17px]">Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.</p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Nous contacter</Button>
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </MetaLayout>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ShieldCheck, Calculator, FileText, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { services, serviceIconColors } from '@/data/services'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={26} />,
  Calculator: <Calculator size={26} />,
  FileText: <FileText size={26} />,
  Building2: <Calculator size={26} />,
  Users: <Calculator size={26} />,
  GraduationCap: <Calculator size={26} />,
}

export function ServicesPreview() {
  const featured = services.slice(0, 3)

  return (
    <section className="py-[var(--spacing-section-py)] bg-surface-alt">
      <Container>
        <SectionTitle
          label="Nos services"
          title="Des solutions sur mesure"
          description="Un accompagnement complet pour répondre à tous vos besoins en comptabilité, audit et conseil."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-card-gap)]">
          {featured.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08} direction={index === 1 ? 'scale' : index === 2 ? 'right' : 'left'}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] bg-white rounded-2xl border border-primary-100/80 hover:border-primary-200/80 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${serviceIconColors[service.icon] || 'from-primary-800 to-primary-900'} text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300 shadow-sm`}>
                  {iconMap[service.icon] || <Calculator size={26} />}
                </div>
                <h3 className="text-[17px] font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200">{service.title}</h3>
                <p className="text-primary-500 text-sm leading-[1.65] mb-6">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-primary-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0 shadow-sm shadow-accent-500/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-accent-600 transition-colors duration-200 group text-[15px]"
          >
            Découvrir tous nos services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { Badge } from '@/components/ui/Badge'
import { SafeImage } from '@/components/ui/SafeImage'
import { Clock, GraduationCap, Filter, Sparkles } from 'lucide-react'
import { formations, categoryColors } from '@/data/formations'

const categories = ['Tous', ...new Set(formations.map(f => f.category))]

export default function Formations() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? formations
    : formations.filter(f => f.category === activeCategory)

  return (
    <MetaLayout title="Formations" description="Découvrez nos formations certifiantes en comptabilité, gestion, audit et management.">
      <PageHero
        label="Formations"
        title="Nos formations"
        description="Des programmes certifiants et qualifiants pour développer vos compétences et accélérer votre carrière."
      />

      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-14 justify-center">
            <Filter size={16} className="text-primary-300 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === cat
                    ? 'bg-primary-900 text-white shadow-[var(--shadow-card)]'
                    : 'bg-white text-primary-500 border border-primary-200/60 hover:border-primary-300 hover:text-primary-700 hover:shadow-sm'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-card-gap)]">
            <AnimatePresence mode="popLayout">
              {filtered.map((formation, index) => {
                const colors = categoryColors[formation.category]
                return (
                  <motion.div
                    key={formation.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <div className="group bg-white rounded-2xl border border-primary-100/80 overflow-hidden hover:shadow-[var(--shadow-card-hover)] hover:border-primary-200/80 transition-all duration-300 h-full flex flex-col">
                      {/* Image header with gradient overlay on hover */}
                      <div className="h-44 relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <SafeImage
                          src={formation.image}
                          alt={formation.title}
                          className="w-full h-full"
                          fallback={
                            <div className={`w-full h-full bg-gradient-to-br ${colors?.gradient || 'from-primary-900 to-primary-800'} flex items-center justify-center`}>
                              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                              <span className="text-white/20 font-bold text-lg text-center px-4">{formation.title.split(' ').slice(0, 2).join(' ')}</span>
                            </div>
                          }
                        />
                        {/* Category accent bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1 ${colors?.dot || 'bg-accent-500'}`} />
                        <div className="absolute bottom-3 left-4 flex gap-2">
                          <Badge variant="accent">{formation.category}</Badge>
                          <Badge variant="default" className="bg-white/15 text-white/80 border-0 backdrop-blur-sm">{formation.level}</Badge>
                        </div>
                      </div>
                      <div className="px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] flex-1 flex flex-col">
                        <h3 className="text-[17px] font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200 leading-snug">{formation.title}</h3>
                        <p className="text-primary-500 text-sm leading-[1.65] mb-5 flex-1">{formation.description}</p>
                        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-primary-100/60 mt-auto">
                          <span className="flex items-center gap-1.5 text-xs text-primary-400"><Clock size={13} />{formation.duration}</span>
                          <span className="flex items-center gap-1.5 text-xs text-primary-400"><GraduationCap size={13} />{formation.level}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {formation.features.map((feature) => (
                            <span key={feature} className="text-[11px] px-2.5 py-1 rounded-md bg-primary-50/80 text-primary-600 font-medium">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Sparkles size={40} className="mx-auto text-primary-300 mb-4" />
              <p className="text-primary-500 text-lg font-medium">Aucune formation trouvée</p>
              <p className="text-primary-400 text-sm mt-1">Essayez de sélectionner une autre catégorie.</p>
            </div>
          )}
        </Container>
      </section>
    </MetaLayout>
  )
}

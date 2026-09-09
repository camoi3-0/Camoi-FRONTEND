import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { Badge } from '@/components/ui/Badge'
import { SafeImage } from '@/components/ui/SafeImage'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Calendar, User } from 'lucide-react'
import { motion } from 'motion/react'
import { news } from '@/data/news'

export default function Actualites() {
  return (
    <MetaLayout title="Actualités" description="Suivez l'actualité de CAMOI : formations, événements, partenariats et news du cabinet.">
      <PageHero
        label="Actualités"
        title="Actualités"
        description="Restez informé de l'actualité de notre cabinet et de nos formations."
      />

      {/* News Grid */}
      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-card-gap)]">
            {news.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white rounded-2xl border border-primary-100/80 overflow-hidden hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] hover:border-primary-200/80 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="h-52 relative overflow-hidden shrink-0">
                    <SafeImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full"
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200/80 flex items-center justify-center">
                          <span className="text-5xl font-bold text-primary-300/25">CAMOI</span>
                        </div>
                      }
                    />
                    <div className="absolute top-3 left-3">
                      <Badge>{article.category}</Badge>
                    </div>
                  </div>
                  <div className="px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-primary-400 mb-3.5">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} />
                        {article.author}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-primary-500 leading-[1.65] text-[15px] flex-1">{article.excerpt}</p>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </MetaLayout>
  )
}

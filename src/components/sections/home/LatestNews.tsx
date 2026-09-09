import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { SafeImage } from '@/components/ui/SafeImage'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { news } from '@/data/news'

export function LatestNews() {
  const latest = news.slice(0, 3)

  return (
    <section className="py-[var(--spacing-section-py)] bg-white">
      <Container>
        <SectionTitle
          label="Actualités"
          title="Restez informé"
          description="Suivez l'actualité de notre cabinet et de nos formations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-card-gap)]">
          {latest.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 0.08} direction={index === 1 ? 'scale' : index === 2 ? 'right' : 'left'}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl border border-primary-100/80 overflow-hidden hover:shadow-[var(--shadow-card-hover)] hover:border-primary-200/80 transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-44 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <SafeImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full"
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200/80 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-300/30">CAMOI</span>
                      </div>
                    }
                  />
                  <div className="absolute top-3 left-3">
                    <Badge>{article.category}</Badge>
                  </div>
                </div>
                <div className="px-[var(--spacing-card-padding-x)] py-[var(--spacing-card-padding-y)] flex-1 flex flex-col">

                  <h3 className="text-[17px] font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-primary-500 text-sm leading-[1.65] line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

      </Container>
    </section>
  )
}

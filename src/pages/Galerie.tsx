import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { SafeImage } from '@/components/ui/SafeImage'
import { X, Filter, ImageOff } from 'lucide-react'
import { whatsappImages } from '@/data/localImages'

const categories = ['Tous', 'Événements', 'Terrain', 'Partenariats']

const galleryItems = [
  {
    id: '1',
    title: 'Forum des métiers de l\'expertise comptable',
    category: 'Événements',
    image: whatsappImages[0],
  },
  {
    id: '2',
    title: 'Conférence CAMOI 3.0',
    category: 'Événements',
    image: whatsappImages[1],
  },
  {
    id: '3',
    title: 'Rencontre avec le CGA AVEMA',
    category: 'Partenariats',
    image: whatsappImages[2],
  },
  {
    id: '4',
    title: 'Présentation de l\'outil DIGIPERFORM',
    category: 'Événements',
    image: whatsappImages[3],
  },
  {
    id: '5',
    title: 'Mission en milieu rural',
    category: 'Terrain',
    image: whatsappImages[4],
  },
  {
    id: '6',
    title: 'Journée de reboisement',
    category: 'Événements',
    image: whatsappImages[5],
  },
  {
    id: '7',
    title: 'Salon de la créativité VOATRA',
    category: 'Événements',
    image: whatsappImages[6],
  },
  {
    id: '8',
    title: 'Visite de terrain — projet en milieu rural',
    category: 'Terrain',
    image: whatsappImages[7],
  },
]

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = activeCategory === 'Tous'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const selectedItem = selected ? galleryItems.find(i => i.id === selected) : null

  return (
    <MetaLayout title="Galerie" description="Découvrez les moments forts de CAMOI à travers notre galerie photos.">
      <PageHero
        label="Galerie"
        title="Galerie photos"
        description="Découvrez les moments forts du cabinet : interventions, missions de terrain et partenariats."
      />

      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            <Filter size={16} className="text-primary-300 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-900 text-white shadow-[var(--shadow-card)]'
                    : 'bg-white text-primary-500 border border-primary-200/60 hover:border-primary-300 hover:text-primary-700 hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--spacing-gallery-gap)]">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <button
                    onClick={() => setSelected(item.id)}
                    className="group relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer ring-1 ring-primary-200/20 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                      overlay={
                        <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/40 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 text-center px-4 text-sm translate-y-2 group-hover:translate-y-0">
                            {item.title}
                          </span>
                        </div>
                      }
                    />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <ImageOff size={24} className="text-primary-400" />
              </div>
              <p className="text-primary-500 text-lg font-medium">Aucune photo trouvée</p>
              <p className="text-primary-400 text-sm mt-1">Essayez de sélectionner une autre catégorie.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-primary-900"
              onClick={(e) => e.stopPropagation()}
            >
              <SafeImage
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full"
                objectFit="cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6">
                <h3 className="text-white font-bold text-lg">{selectedItem.title}</h3>
                <p className="text-white/70 text-sm">{selectedItem.category}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MetaLayout>
  )
}

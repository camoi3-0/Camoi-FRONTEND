import type { NewsArticle } from '@/types'
import { whatsappImages } from './localImages'

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'CAMOI 3.0 lance son nouveau programme de formation DCG',
    excerpt: 'Découvrez notre nouvelle promotion du Diplôme de Comptabilité et de Gestion, avec un programme actualisé et adapté aux exigences du marché.',
    content: '',
    date: '2026-06-15',
    category: 'Actualité',
    image: whatsappImages[5],
    author: 'Direction CAMOI',
  },
  {
    id: '2',
    title: 'Partenariat stratégique avec l\'ASFIFO',
    excerpt: 'CAMOI 3.0 s\'associe à l\'ASFIFO pour renforcer l\'offre de formations de qualité aux professionnels de la comptabilité à Madagascar.',
    content: '',
    date: '2026-05-20',
    category: 'Partenariat',
    image: whatsappImages[0],
    author: 'Direction CAMOI',
  },
  {
    id: '3',
    title: 'Journée portes ouvertes le 15 juillet 2026',
    excerpt: 'Venez découvrir nos locaux, rencontrer nos formateurs et en savoir plus sur nos programmes lors de notre journée portes ouvertes.',
    content: '',
    date: '2026-05-10',
    category: 'Événement',
    image: whatsappImages[2],
    author: 'Communication CAMOI',
  },
  {
    id: '4',
    title: 'Nos experts à la conférence sur la normalisation comptable',
    excerpt: 'Les experts de CAMOI ont participé à la conférence nationale sur les nouvelles normes comptables IFRS appliquées à Madagascar.',
    content: '',
    date: '2026-04-28',
    category: 'Actualité',
    image: whatsappImages[3],
    author: 'Direction CAMOI',
  },
]

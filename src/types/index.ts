export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface Formation {
  id: string
  title: string
  description: string
  duration: string
  level: string
  category: string
  image?: string
  features: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image?: string
  author: string
}

export interface Partner {
  id: string
  name: string
  logo?: string
  website?: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Value {
  title: string
  description: string
  icon: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image: string
  category: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  quote: string
  highlight?: boolean
}

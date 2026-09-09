import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'outils',
    title: 'Outils de digitalisation',
    description: 'Des outils digitaux de pointe pour des prestations clients plus performantes.',
    icon: 'ShieldCheck',
    features: ['MCF', 'Sage KOALA', 'Odoo', 'Sage'],
  },
  {
    id: 'audit',
    title: 'Audit et Commissariat aux Comptes',
    description: 'Assuré par Expert-Conseils, cabinet d\'audit du groupe CAMOI. Certification des comptes annuels, audit légal et audit de procédure pour une vision globale de vos process internes.',
    icon: 'ShieldCheck',
    features: ['Projets en milieu rural', 'Micro-finance', 'Institutions financières', 'Industrie', 'Commerce et services'],
  },  
  {
    id: 'expertise-comptable',
    title: 'Expertise Comptable',
    description: 'Traitement comptable des données financières et conseil de direction. Nous mettons en place et optimisons les instruments de gestion adaptés aux caractéristiques de votre entreprise.',
    icon: 'ShieldCheck',
    features: ['Traitement comptable des données financières', 'Révision comptable', 'Conseil de direction', 'Instruments de gestion'],
  },
  {
    id: 'juridique-fiscal-social',
    title: 'Assistance Juridique, Fiscale et Sociale',
    description: 'Un accompagnement sur les conditions et conséquences juridiques et fiscales de vos décisions, pour l\'entreprise, ses membres et son personnel.',
    icon: 'ShieldCheck',
    features: ['Fiscalité des entreprises', 'Droit social', 'Droit des affaires', 'Conformité réglementaire'],
  },
  {
    id: 'conseil-marche-strategie',
    title: 'Evaluation d\'Entreprise - conseil en étude de marché',
    description: 'Évaluation d\'entreprise, études de marché et accompagnement à l\'implantation à Madagascar : secteur d\'activité, opportunités, concurrents et règles en vigueur, pour optimiser vos chances de réussite.',
    icon: 'ShieldCheck',
    features: ['Évaluation d\'entreprise', 'Étude de marché', 'Prévisionnel d\'activités', 'Business Plan', 'Implantation à Madagascar', 'Stratégie d\'entreprise'],
  },
]

// Shared visual configs for service icons and illustrations
export const serviceIconColors: Record<string, string> = {
  ShieldCheck: 'from-accent-500 to-accent-700',
  Calculator: 'from-primary-800 to-primary-900',
  FileText: 'from-warm-500 to-warm-700',
  Building2: 'from-cool-500 to-cool-700',
}

export const serviceIllustrationGradients: Record<string, string> = {
  ShieldCheck: 'from-accent-100 to-accent-200/80',
  Calculator: 'from-primary-100 to-primary-200/80',
  FileText: 'from-warm-100 to-warm-200/80',
  Building2: 'from-cool-100 to-cool-200/80',
}
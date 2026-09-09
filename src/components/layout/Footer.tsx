import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import Logo from '@/assets/logo-clair.png'

const footerLinks = {
  'Cabinet': [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Services', href: '/services' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact', href: '/contact' },
  ],
  'Services': [
    { label: 'Audit et Commissariat aux Comptes', href: '/services#audit' },
    { label: 'Expertise Comptable', href: '/services#expertise-comptable' },
    { label: 'Juridique, Fiscal et Social', href: '/services#juridique-fiscal-social' },
    { label: 'Conseil et Stratégie', href: '/services#conseil-marche-strategie' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Subtle top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <Container className="pt-20 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-x-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 lg:pr-8">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <img src={Logo} alt="CAMOI Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-primary-400 leading-relaxed mb-6 max-w-sm text-[15px]">
              Cabinet d'expertise comptable, d'audit et de conseil.
              Le professionnalisme au service de votre réussite depuis 2008.
            </p>
            <div className="space-y-3">
              <a href="tel:+261207643675" className="flex items-center gap-3 text-primary-400 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm">+261 20 76 436 75 </span>
              </a>
              <a href="mailto:contact@camoi.mg" className="flex items-center gap-3 text-primary-400 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail size={14} />
                </div>
                <div className='flex flex-col'>
                  <span className="text-sm">contact@camoi.mg</span>
                  <span className="text-sm">communication@camoi.mg </span>
                  <span className="text-sm">communication.camoi@gmail.com</span>
                </div>

              </a>
              <div className="flex items-center gap-3 text-primary-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm">Lot IVX 72 BIS F, Ankazomanga, Immeuble Héritage troisième étage</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-primary-300 uppercase tracking-[0.15em] mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
          <p className="text-primary-500 text-sm">
            &copy; {new Date().getFullYear()} CAMOI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-500 hover:text-primary-300 text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="text-primary-500 hover:text-primary-300 text-sm transition-colors duration-200">
              Mentions légales
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
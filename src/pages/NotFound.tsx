import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <MetaLayout title="Page introuvable">
      <section className="relative min-h-screen flex items-center justify-center bg-primary-950 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900/70 to-primary-950" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent-500 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] bg-cool-500 blur-[140px] rounded-full"
        />

        <div className="relative z-10 max-w-lg mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[7rem] md:text-[9rem] font-bold text-white/10 leading-none mb-6 select-none">
              404
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
          >
            Page introuvable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary-400 text-[17px] mb-10 leading-relaxed"
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
            Vérifiez l'URL ou retournez à l'accueil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link to="/">
              <Button variant="secondary" size="lg" icon={<Home size={16} />}>
                Retour à l'accueil
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft size={16} />
              Page précédente
            </button>
          </motion.div>
        </div>
      </section>
    </MetaLayout>
  )
}

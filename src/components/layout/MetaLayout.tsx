import { type ReactNode, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BackToTop } from '@/components/ui/BackToTop'

interface MetaLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export function MetaLayout({ children, title, description }: MetaLayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} | CAMOI 3.0` : 'CAMOI 3.0 | Expertise Comptable & Formation'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

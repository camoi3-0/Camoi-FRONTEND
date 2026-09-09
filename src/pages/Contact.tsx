import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { MetaLayout } from '@/components/layout/MetaLayout'
import { PageHero } from '@/components/layout/PageHero'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/ui/FAQ'
import { LocationMap } from '@/components/locationMap'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle, AlertCircle } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY' // Remplacez par votre clé

const contactInfo = [
  { icon: <Phone size={18} />, label: 'Téléphone', value: '+261 20 76 436 75', href: 'tel:+261207643675' },
  { icon: <Mail size={18} />, label: 'Email', value: 'contact@camoi.mg  | communication@camoi.mg  |  communication.camoi@gmail.com', href: 'mailto:contact@camoi.mg' },
  { icon: <MapPin size={18} />, label: 'Adresse', value: 'Lot IVX 72 BIS F, Ankazomanga, Immeuble Héritage troisième étage', href: '#' },
  { icon: <Clock size={18} />, label: 'Horaires', value: 'Lun - Ven: 8h00 - 17h00', href: '#' },
]

const faqItems = [
  {
    question: 'Comment puis-je obtenir un devis pour vos services ?',
    answer: 'Vous pouvez nous contacter via le formulaire ci-contre, par téléphone au +261 20 76 436 75 , ou par email à contact@camoi.mg. Nous vous répondrons sous 48 heures avec un devis personnalisé.',
  },
  {
    question: 'Proposez-vous des formations à distance ?',
    answer: 'Oui, nous proposons des formations en e-learning et en blended learning pour certains de nos programmes. Nos formateurs utilisent une plateforme pédagogique interactive pour assurer un suivi de qualité à distance.',
  },
  {
    question: 'Quels sont les délais de traitement d\'une demande de création d\'entreprise ?',
    answer: 'Le délai varie selon la complexité du dossier, mais en moyenne, nous accompagnons nos clients dans la création de leur entreprise en 2 à 4 semaines, du dépôt du dossier à l\'obtention des documents officiels.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `[CAMOI Contact] ${formData.subject} - ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Une erreur est survenue.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur réseau. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <MetaLayout title="Contact" description="Contactez CAMOI pour toute demande d'information sur nos services ou formations.">
      <PageHero
        label="Contact"
        title="Contactez-nous"
        description="Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute demande d'information."
      />

      <section className="py-[var(--spacing-section-py)] bg-surface-alt">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-16">
            {/* Info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <h2 className="text-xl font-bold text-primary-900 mb-6">Nos coordonnées</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-[-4deg] transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-primary-400 mb-0.5">{info.label}</div>
                      <div className="text-primary-900 font-medium text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="rounded-2xl h-48 overflow-hidden border border-primary-200/40">
                <LocationMap
                  lat={-18.8935}
                  lng={47.4964}
                  label="Lot IVX 72 BIS F, Ankazomanga, Immeuble Héritage troisième étage"
                  zoom={16}
                />
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 border border-primary-100/60 shadow-[var(--shadow-card)]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-100 to-accent-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={28} className="text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Message envoyé !</h3>
                    <p className="text-primary-500 mb-6 text-sm">Merci de votre contact. Nous vous répondrons dans les plus brefs délais.</p>
                    <Button variant="primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); setError(null) }}>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm mb-6">
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-primary-700 mb-1.5 uppercase tracking-wide">Nom complet *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-primary-200/80 text-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/10 focus:border-primary-400 transition-all duration-200 placeholder:text-primary-300"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-primary-700 mb-1.5 uppercase tracking-wide">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-primary-200/80 text-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/10 focus:border-primary-400 transition-all duration-200 placeholder:text-primary-300"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-primary-700 mb-1.5 uppercase tracking-wide">Téléphone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            inputMode="tel"
                            autoComplete="tel"
                            className="w-full px-4 py-3 rounded-xl border border-primary-200/80 text-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/10 focus:border-primary-400 transition-all duration-200 placeholder:text-primary-300"
                            placeholder="+261 ..."
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-primary-700 mb-1.5 uppercase tracking-wide">Sujet *</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-primary-200/80 text-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/10 focus:border-primary-400 transition-all duration-200 bg-white"
                          >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="formation">Demande sur une formation</option>
                            <option value="service">Demande de service</option>
                            <option value="devis">Demande de devis</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-primary-700 mb-1.5 uppercase tracking-wide">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-primary-200/80 text-sm text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/10 focus:border-primary-400 transition-all duration-200 resize-none placeholder:text-primary-300"
                          placeholder="Votre message..."
                        />
                      </div>
                      <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />} className="w-full sm:w-auto" disabled={sending}>
                        {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--spacing-section-py)] bg-white">
        <Container size="sm">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 text-white flex items-center justify-center shadow-sm">
                <HelpCircle size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900 tracking-tight">Questions fréquentes</h2>
                <p className="text-primary-500 text-sm">Retrouvez les réponses aux questions les plus courantes.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="scale">
            <FAQ items={faqItems} />
          </AnimatedSection>
        </Container>
      </section>
    </MetaLayout>
  )
}
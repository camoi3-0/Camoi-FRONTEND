import outils from '@/assets/outils-de-digitalisation.jpeg'
import audit from '@/assets/audit-et-commissariat-aux-comptes.jpg'
import expertiseComptable from '@/assets/expertise-comptable.jpeg'
import juridiqueFiscalSocial from '@/assets/assistance-juridique-fiscale-et-sociale.jpg'
import conseilMarcheStrategie from '@/assets/evaluation-d-entreprise-conseil-en-etude-de-marche.jpeg'

/** Photo illustrant chaque service, indexée sur l'identifiant défini dans services.ts */
export const serviceImages: Record<string, string> = {
  'outils': outils,
  'audit': audit,
  'expertise-comptable': expertiseComptable,
  'juridique-fiscal-social': juridiqueFiscalSocial,
  'conseil-marche-strategie': conseilMarcheStrategie,
}

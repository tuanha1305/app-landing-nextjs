'use client'

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import SocialIcon from '@/components/social-icons'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

import { useContactModal } from './formspree/store'
import { ContactModal } from './formspree'

export default function Footer({ copyright, links }) {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'footer')
  const contactModal = useContactModal()

  const handleContactClick = (): void => {
    contactModal.onOpen()
  }
  function ContactClick(): void {
    handleContactClick()
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <p className="footer__love">{copyright}</p>
            <ul className="footer__links">
              {links.map((link, index) => (
                <li key={index} className="footer__link">
                  <a href={link.url} target={link.target}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

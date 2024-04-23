'use client'

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

export default function Footer({ copyright, links }) {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'footer')

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

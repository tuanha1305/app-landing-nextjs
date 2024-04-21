'use client'

import { useParams, usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'
import SearchButton from './search/SearchButton'
import { useTranslation } from 'app/[locale]/i18n/client'
import type { LocaleTypes } from 'app/[locale]/i18n/settings'

const Header = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, '')
  // Get current page path
  const pathname = usePathname()

  return (
    <header className="app__header container">
      <div className="app__logo-wrapper">
        <img className="app__logo" src="/assets/images/appicon.png" alt={`${siteMetadata.name} Icon`} />
      </div>
      <div className="app__infos">
        <h1 className="app__name">{siteMetadata.name}</h1>
        <p className="app__description">{siteMetadata.description}</p>
        <div className="app__buttons app__buttons--desktop">
          {siteMetadata.android && (
            <a href={siteMetadata.android} className="app__button-play" target="_blank">
              <img src="/assets/images/google-play-badge.png" alt="Get on Google Play" />
            </a>
          )}
          {siteMetadata.iOS && (
            <a href={siteMetadata.iOS} className="app__button-ios" target="_blank">
              <img src="/assets/images/ios.svg" alt="Get on Appstore" />
            </a>
          )}
          {siteMetadata.web && (
            <a href={siteMetadata.web} className="app__button-web" target="_blank">
              <img src="/assets/images/pwa-badge.png" alt="Go to website" />
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

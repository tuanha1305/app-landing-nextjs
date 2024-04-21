import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import { createTranslation } from './i18n/server'
import { LocaleTypes } from './i18n/settings'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
}

interface HomeProps {
  posts: Post[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 5

const appData = {
  title: 'Sample 123',
  android: '',
  iOS: '',
  web: undefined,
  screenshots: [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
  ]
}

export default async function Home({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  return (
    <>
      <div className="app__buttons app__buttons--mobile container">
        {appData.android && (
          <a href={appData.android} className="app__button-play" target="_blank">
            <img src="/assets/images/google-play-badge.png" alt="Get on Google Play" />
          </a>
        )}
        {appData.iOS && (
          <a href={appData.iOS} className="app__button-ios" target="_blank">
            <img src="/assets/images/ios.svg" alt="Get on Appstore" />
          </a>
        )}
        {appData.web && (
          <a href={appData.web} className="app__button-web" target="_blank">
            <img src="/assets/images/pwa-badge.png" alt="Go to website" />
          </a>
        )}
      </div>
      <section className="app__screenshots app__section">
      <div className="container">
        <h2 className="app__section-title">{appData.title}</h2>
      </div>
      <div className="app__screenshots-wrapper container-desktop">
        <div className="app__screenshots-list">
          {appData.screenshots.map((screenshot, index) => (
            <a key={index} href={`/assets/images/screenshots/${screenshot}`} className="lightbox">
              <img src={`/assets/images/screenshots/${screenshot}`} className="app__screenshot" alt="Screenshot" />
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

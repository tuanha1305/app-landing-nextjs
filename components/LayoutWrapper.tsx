import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface LayoutWrapperProps {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const footerData = {
  copyright: "© 2023 Your Company. All rights reserved.",
  links: [
    { url: "https://example.com/about", target: "_blank", title: "About Us" },
    { url: "https://example.com/privacy", target: "_self", title: "Privacy Policy" },
    { url: "https://example.com/contact", target: "_self", title: "Contact" },
  ]
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer copyright={footerData.copyright} links={footerData.links} />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

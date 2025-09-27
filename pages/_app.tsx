import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Paralegal AI — AI Paralegal for Indian Law | Semantic Legal Research & Drafting</title>
        <meta name="description" content="Paralegal AI augments lawyers with RAG-grounded legal research, AI drafting, clause review, and compliance monitoring — built for the complexities of Indian law. Try the freemium tier or book an enterprise demo." />
        <meta property="og:title" content="Paralegal AI — AI Paralegal for Indian Law | Semantic Legal Research & Drafting" />
        <meta property="og:description" content="Paralegal AI augments lawyers with RAG-grounded legal research, AI drafting, clause review, and compliance monitoring — built for the complexities of Indian law. Try the freemium tier or book an enterprise demo." />
        <meta property="og:image" content="https://paralegalai.xyz/assets/og-image.png" />
        <meta property="og:url" content="https://paralegalai.xyz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paralegal AI — AI Paralegal for Indian Law" />
        <meta name="twitter:description" content="AI-powered legal research and drafting for Indian law professionals" />
        <meta name="twitter:image" content="https://paralegalai.xyz/assets/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="canonical" href="https://paralegalai.xyz" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Paralegal AI",
          "url":"https://paralegalai.xyz",
          "logo":"https://paralegalai.xyz/logo.png",
          "description":"AI-powered legal research and drafting platform for Indian law professionals",
          "sameAs":["https://www.linkedin.com/company/paralegalai"]
        })}} />
      </Head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GGS31EQG4K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GGS31EQG4K');
        `}
      </Script>
      
      <Component {...pageProps} />
    </SessionProvider>
  )
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Paralegal AI — AI Paralegal for Indian Law | Semantic Legal Research & Drafting</title>
        <meta name="description" content="Paralegal AI augments lawyers with RAG-grounded legal research, AI drafting, clause review, and compliance monitoring — built for the complexities of Indian law. Try the freemium tier or book an enterprise demo." />
        <meta property="og:title" content="Paralegal AI — AI Paralegal for Indian Law | Semantic Legal Research & Drafting" />
        <meta property="og:description" content="Paralegal AI augments lawyers with RAG-grounded legal research, AI drafting, clause review, and compliance monitoring — built for the complexities of Indian law. Try the freemium tier or book an enterprise demo." />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Paralegal AI",
          "url":"https://paralegalai.example",
          "logo":"https://paralegalai.example/assets/logo.svg",
          "sameAs":["https://www.linkedin.com/company/paralegalai"]
        })}} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

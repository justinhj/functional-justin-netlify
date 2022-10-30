import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Functional[Justin]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Functional Justin" />
        <p className="description">
            Function Justin next.js migration. (wip)
        </p>
      </main>

      <Footer />
    </div>
  )
}

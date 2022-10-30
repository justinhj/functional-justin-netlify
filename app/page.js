import Header from '@components/Header'
import Footer from '@components/Footer'
import '@styles/globals.css'

export default function Home() {
  return (
      <div className="container">
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


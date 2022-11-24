import Header from '@components/Header'
import Footer from '@components/Footer'
import '@styles/globals.css'

import Link from 'next/link'

import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: true
})

export default function Home() {
    return (
        <div className="container">
            <Header title="Functional Justin" />
            <main>
                <p className="description">
                    Function Justin next.js migration. (wip)
                </p>
                <Link href="/about">About</Link>
            </main>
            <Footer />
        </div>
    )
}

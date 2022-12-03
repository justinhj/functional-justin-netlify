import Header from '@components/Header'
import Footer from '@components/Footer'
import '@styles/globals.css'

import Link from 'next/link'

// import mermaid from 'mermaid'

// mermaid.initialize({
//     startOnLoad: true
// })

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center h-32">
                <Header />
            </div>
            <div className="flex flex-row">
                <div className="basis-1/4" />
                <div className="basis-1/2">
                    Function Justin next.js migration. (wip)
                    <Link href="/about">About</Link>
                </div>
                <div className="basis-1/4" />
            </div>
            <div className="flex justify-center h-48 align-bottom">
                <Footer />
            </div>
        </div >
    )
}

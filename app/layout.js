// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Functional Justin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}

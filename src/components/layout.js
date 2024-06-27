import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
 
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Atlassian </title>
        <link rel="icon" href="/atlassian.png" type="image/png" sizes="32x32" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
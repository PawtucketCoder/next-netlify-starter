import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SceneJunction.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="..." />
        <div class="ellipsis-container">
        <div class="ellipsis"></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

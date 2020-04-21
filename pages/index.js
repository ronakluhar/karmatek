import React from 'react'
import Head from 'next/head'
import Banner from 'containers/Crypto/BannerSection'
import BannerSlider from 'containers/Crypto/BannerSlider'
import Transactions from 'containers/Crypto/Transaction'
import ControlSections from 'containers/Crypto/ControlSection'
import TrustedProofSections from 'containers/Crypto/TrustedProof'
import ScalableSections from 'containers/Crypto/ScalableSection'
import SlideSections from 'containers/Crypto/CryptoSlides'
import BetaSections from 'containers/Crypto/BetaSection'
import Footer from 'containers/Crypto/Footer'
import Layout from 'containers/Layout'

const App = () => {
  return (
    <Layout>
      <Head>
        <title>Karmatek</title>
        <meta name="Description" content="Karmatek" />
        <meta name="theme-color" content="#ec5555" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
          rel="stylesheet"
        />
      </Head>
      <Banner />
      <BannerSlider />
      <Transactions />
      <ControlSections />
      <TrustedProofSections />
      <ScalableSections />
      <SlideSections />
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export default App

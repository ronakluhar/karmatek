import React from 'react'
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

import React from 'react'
import Layout from '../containers/Layout'
import Head from 'next/head'
import Banner from '../containers/About/Banner'
import Footer from 'containers/Crypto/Footer'
import BetaSections from 'containers/Crypto/BetaSection'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Banner />
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export default About

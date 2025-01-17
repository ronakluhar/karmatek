import React from 'react'
import Layout from 'containers/Layout'
import Head from 'next/head'
import Banner from 'containers/Banner'
import Footer from 'containers/Crypto/Footer'
import BetaSections from 'containers/Crypto/BetaSection'
import Profile from 'containers/About/Profile'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Banner title="Who we are" />
      <Profile />
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export default About

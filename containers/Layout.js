import React from 'react'
import { ThemeProvider } from 'styled-components'
import Sticky from 'react-stickynode'
import { DrawerProvider } from 'common/src/contexts/DrawerContext'
import Navbar from '../containers/Crypto/Navbar'
import { cryptoTheme } from 'common/src/theme/crypto'
import { ResetCSS } from 'common/src/assets/css/style'
import { GlobalStyle, ContentWrapper } from '../containers/Crypto/crypto.style'
import { SEO } from 'containers'

const Layout = ({ children, customSEO }) => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      {!customSEO && <SEO />}
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        {children}
      </ContentWrapper>
    </ThemeProvider>
  )
}

export default Layout

import React from 'react'
import { SkipNavContent } from '@reach/skip-nav'

import Footer from '../../components/footer'
import Screen from '../../components/screen'
import Page from '../../components/page'

import Container from '../../components/container'

const Index = () => (
  <Page title="Analytics | Explore">
    <Screen offset={64 + 400}>
      <Container wide>
        <header>
          <h2 className="fw7">Analytics</h2>
          <h3 className="f-reset subtitle fw4">
            The latest analytics of hashtags. <br className="display-mobile" />
          </h3>
        </header>
        <SkipNavContent />
        
      </Container>
    </Screen>
    <Footer />
    <style jsx>
      {`
        h2 {
          font-size: 2.5rem;
          letter-spacing: -0.05em;
          margin-bottom: 1rem;
        }
        header {
          text-align: center;
          margin: 2.25rem 0 3rem;
        }
      `}
    </style>
  </Page>
)

export default Index

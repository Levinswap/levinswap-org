import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import ProtocolData from '../components/protocolData'

import { useDarkMode } from '../contexts/Application'

import { CardBGImage, CardNoise } from '../components/utils'

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 3rem 0 0 0;
  margin-bottom: 8rem;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
    margin-bottom: 4rem;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 104px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`
const StyledBodySubTitle = styled.h2`
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
      </BGCard>
      <SEO
        title="Home"
        path="Levinswap"
        description={'A fully decentralized protocol for automated liquidity provision on xDai'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Decentralized Trading Protocol</StyledBodyTitle>
          <StyledBodySubTitle style={{ marginBottom: '3rem' }}>
            Fast & inexpensive transactions powered by the xDai blockchain.
          </StyledBodySubTitle>

          <StyledItemRow>
            <Button
              style={{
                background: `linear-gradient(128.17deg, #ce75a5 -1.78%, #885c99 110.05%)`,
                color: 'white',
                fontSize: '20px'
              }}
              target="_blank"
              href="https://app.levinswap.org/"
            >
              Use Levinswap
            </Button>
            <Button
              outlined
              target="_blank"
              href="https://wiki.levinswap.org/"
              style={{
                fontSize: '20px'
              }}
            >
              Wiki
            </Button>
            <Button
              outlined
              target="_blank"
              href="https://wiki.levinswap.org/faq"
              style={{
                fontSize: '20px'
              }}
            >
              FAQ
            </Button>
          </StyledItemRow>
        </StyledTitle>
        <ProtocolData />

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

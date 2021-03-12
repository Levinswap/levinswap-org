/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = "A fully decentralized protocol for automated liquidity provision on xDai"

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title="Levinswap"
    >
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="title" content={'Levinswap'} />
      <meta name="description" content={'A fully decentralized protocol for automated liquidity provision on xDai'} />

      <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO

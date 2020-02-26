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

function SEO({ description, lang, meta, title, path, ogImageProp, pathname }) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={title}></meta>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={site.siteMetadata.siteUrl + path} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}${
          path ? path : '/'
        }twitter-card.jpg`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@UniswapExchange"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={metaDescription}></meta>
      <meta
        name="twitter:image"
        content={`${site.siteMetadata.siteUrl}${
          path ? path : '/'
        }twitter-card.jpg`}
      ></meta>

      <meta name="twitter:site" content="@UniswapExchange" />
      <meta name="twitter:url" content={site.siteMetadata.siteUrl + path} />

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
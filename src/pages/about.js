import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo2'

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" path={props.location.pathname} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
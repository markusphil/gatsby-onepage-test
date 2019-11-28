/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
/* import { useStaticQuery, graphql } from 'gatsby' */

import Header from './header'
import Footer from './footer'

const Layout = ({ children, navSections }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <Header navSections={navSections} />
      <main>{children}</main>
      <Footer
        links={[
          { url: '/de', name: 'Auf Deutsch ansehen' },
          { url: '/', name: 'Read in english' },
        ]}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/base/layout'
import SEO from '../components/base/seo'
import { ComponentFactory } from './componentFactory'
import { idFromName } from '../utility/helpers'

const getNavSections = edges => {
  if (edges) {
    let navSections = []
    edges.forEach(({ node }) => {
      let nav = node.frontmatter.navSection
      if (nav)
        navSections.push({
          name: nav,
          id: idFromName(nav),
        })
    })
    return navSections
  }
  return []
}

export default ({ data, pageContext }) => {
  return (
    <Layout navSections={getNavSections(data.allMarkdownRemark.edges)}>
      <SEO title="Home" lang="pageContext.lang" />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        node.frontmatter.navId = idFromName(node.frontmatter.navSection)
        return <ComponentFactory key={node.id} node={node} />
      })}
      <div className="log">
        <h4>{data.allMarkdownRemark.totalCount} Components found</h4>
        <h4>Language: {pageContext.lang}</h4>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($langpath: String!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $langpath } }
      sort: { fields: frontmatter___position, order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            component
            title
            subtitle
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            icon {
              publicURL
            }
            navSection
          }
          html
        }
      }
    }
  }
`

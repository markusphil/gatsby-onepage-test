import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ComponentFactory } from "./componentFactory"

const getNavSections = edges => {
  if (edges) {
    let navSections = []
    edges.forEach(({ node }) => {
      let nav = node.frontmatter.navSection
      if (nav) navSections.push(nav)
    })
    return navSections
  }
  return []
}

export default ({ data, pageContext }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Components found</h4>
        <h4>Language: {pageContext.lang}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ComponentFactory
            key={node.id}
            node={node}
            navSections={getNavSections(data.allMarkdownRemark.edges)}
          />
        ))}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
            icon
            navSection
          }
          html
        }
      }
    }
  }
`

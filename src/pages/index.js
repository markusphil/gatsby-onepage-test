import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Components found</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            {node.frontmatter.component === "hero" && (
              <div>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.subtitle}</p>
              </div>
            )}

            {node.frontmatter.component === "content" && (
              <div>
                <div className="container-left">
                  <h3>{node.frontmatter.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
                <div className="container-right">
                  <p>{node.frontmatter.icon}</p>
                </div>
              </div>
            )}
          </div>
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
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            component
            title
            subtitle
            icon
          }
          html
        }
      }
    }
  }
`

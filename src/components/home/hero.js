import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({ node, navSections }) {
  return (
    <BackgroundImage fluid={node.frontmatter.img.childImageSharp.fluid}>
      <h1>{node.frontmatter.title}</h1>
      <p>{node.frontmatter.subtitle}</p>
    </BackgroundImage>
  )
}

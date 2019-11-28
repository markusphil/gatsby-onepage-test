import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({ node, navSections }) {
  return (
    <BackgroundImage
      fluid={node.frontmatter.img.childImageSharp.fluid}
      className="section"
    >
      <h1 className="title-big">{node.frontmatter.title}</h1>
      <p className="subtitle">{node.frontmatter.subtitle}</p>
    </BackgroundImage>
  )
}

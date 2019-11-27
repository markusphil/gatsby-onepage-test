import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({ node, navSections }) {
  return (
    <BackgroundImage fluid={node.frontmatter.img.childImageSharp.fluid}>
      <nav>
        <ul>
          {navSections.map(n => {
            return (
              <li>
                <a href={'#' + n}>{n}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <h1>{node.frontmatter.title}</h1>
      <p>{node.frontmatter.subtitle}</p>
    </BackgroundImage>
  )
}

import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({ node }) {
  return (
    <BackgroundImage
      fluid={node.frontmatter.img.childImageSharp.fluid}
      className="hero"
    >
      <h1 className="title-big">{node.frontmatter.title}</h1>
      <p className="subtitle">{node.frontmatter.subtitle}</p>
      <HeroSVG />
    </BackgroundImage>
  )
}

const HeroSVG = () => {
  return (
    <svg
      className="shape"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1000 300"
    >
      <path
        d="M500.25,248C143,314.875,0,248.375,0,248.375L0.625,300H1000V157.25
    C839,117.25,857.5,181.125,500.25,248z M914.125,233.5c-73.125,24.75-99.833,24.967-174.402-1.043
    c-0.387-0.131-0.598-0.207-0.598-0.207c0.201,0,0,0,0,0.207c6.492,2.189,57.52,7.416,116.902-20.207
    C912.25,186.375,981.213,210.793,914.125,233.5z"
      />
    </svg>
  )
}

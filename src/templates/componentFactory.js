import React from 'react'
import Hero from '../components/home/hero'
import IconContent from '../components/home/IconContent'
import CenteredContent from '../components/home/CenteredContent'

export function ComponentFactory({ node }) {
  switch (node.frontmatter.component) {
    case 'hero':
      return <Hero node={node} />
    case 'with-icon':
      return <IconContent node={node} />
    case 'centered':
      return <CenteredContent node={node} />
    default:
      return (
        <div>
          <p>Oops you tried to add a component that doesn't exist!</p>
        </div>
      )
  }
}

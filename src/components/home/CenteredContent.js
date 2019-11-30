import React from 'react'

export default function CenteredContent({ node }) {
  return (
    <section id={node.frontmatter.navId} className="section">
      <div
        className="content centered"
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </section>
  )
}

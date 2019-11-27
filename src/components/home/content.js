import React from "react"

export default function Content({ node }) {
  return (
    <section id={node.frontmatter.navSection}>
      <div className="container-left">
        <h3>{node.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
      <div className="container-right">
        <p>{node.frontmatter.icon}</p>
      </div>
    </section>
  )
}

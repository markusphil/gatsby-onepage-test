import React from 'react'

export default function Content({ node }) {
  return (
    <section id={node.frontmatter.navSection} className="section">
      <div className="container">
        <div className="row">
          <div className="col is-md-5">
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
          <div className="col is-md-7">
            <p>{node.frontmatter.icon}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

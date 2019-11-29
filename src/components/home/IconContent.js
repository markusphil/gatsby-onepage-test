import React from 'react'

export default function IconContent({ node }) {
  return (
    <section id={node.frontmatter.navSection} className="section">
      <div className="content contrast">
        <div className="row">
          <div className="text-col">
            <h3>{node.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
          <div className="icon-col">
            <img
              className="content-icon"
              src={node.frontmatter.icon.publicURL}
              alt={node.frontmatter.iconAlt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

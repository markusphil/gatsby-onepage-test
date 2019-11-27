import React from "react"

export default function Hero({ node, navSections }) {
  return (
    <div>
      <nav>
        <ul>
          {navSections.map(n => {
            return (
              <li>
                <a href={"#" + n}>{n}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      <h1>{node.frontmatter.title}</h1>
      <p>{node.frontmatter.subtitle}</p>
    </div>
  )
}

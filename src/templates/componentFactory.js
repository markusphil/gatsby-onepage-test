import React from "react"
import Hero from "../components/home/hero"
import Content from "../components/home/content"

export function ComponentFactory({ node, navSections }) {
  switch (node.frontmatter.component) {
    case "hero":
      return <Hero node={node} navSections={navSections} />
    case "content":
      return <Content node={node} />
    default:
      return (
        <div>
          <p>Oops you tried to add a component that doesn't exist!</p>
        </div>
      )
  }
}
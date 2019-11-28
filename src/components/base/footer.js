import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ links }) => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    <ul>
      {links.map(link => (
        <Link to={link.url}>{link.name}</Link>
      ))}
    </ul>
  </footer>
)
export default Footer

import { Link } from 'gatsby'
import React from 'react'

const Footer = ({ links }) => (
  <div className="footer-wrapper">
    <div className="shape-top">
      <FooterShape />
    </div>

    <footer className="footer">
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <ul>
        {links.map(link => (
          <li>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  </div>
)
export default Footer

const FooterShape = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 1000 300"
    className="shape"
  >
    <path
      d="M1000,230C798,96.25,669.184,80.341,691.441,98.375c34.559,28,12.481,132.721-190.816,52.188
	C353.5,92.281,359.75,180.125,242.25,187C133.343,193.372,0,113.875,0,113.875V300h1000V230z"
    />
  </svg>
)

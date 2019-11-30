import { Link } from 'gatsby'
import React from 'react'

const Header = ({ navSections }) => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1 className="title">Your Logo</h1>
        </Link>
      </div>
      {navSections && navSections.length > 0 && (
        <ul className="navlist">
          {navSections.map(n => {
            return (
              <li className="navitem">
                <a href={'#' + n.id}>{n.name}</a>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  </header>
)

export default Header

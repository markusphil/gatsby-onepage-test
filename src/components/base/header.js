import { Link } from 'gatsby'
import React from 'react'

const Header = ({ navSections }) => (
  <header>
    <div>
      <h1>
        <Link to="/">PepperLimeLogo</Link>
      </h1>
      {navSections && navSections.length > 0 && (
        <nav>
          <ul>
            {navSections.map(n => {
              return (
                <li>
                  <a href={'#' + n}>{n}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  </header>
)

export default Header

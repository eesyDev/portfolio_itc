import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-logo">
            <a href="/">Tomiris Portfolio</a>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About me</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Contact</a></li>
            </ul>


          </nav>
          <button className="btn btn--primary">Contact
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_218)">
                <path d="M12.9367 7.47835L8.08083 2.62245L9.21183 1.49146L15.9986 8.2782L15.4331 8.8437L9.21183 15.065L8.08083 13.934L12.9367 9.07805H0.00152588V7.47835H12.9367Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_218">
                  <rect width="16" height="16.7969" fill="white" transform="translate(6.10352e-05 0.279785)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header
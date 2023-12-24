import React from 'react'
import './Header.scss'
import logoHeader from '../../img/header--logo.svg'
function Header() {
  return (
    <div className='Header'>
      <header>
        <div className="container">
            <div className="header__inner">
                <div className="logo">
                  <img src={logoHeader} alt="logoHeader" />
                </div>
                <ul className="header__list">
                  <li>
                    <a href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="header__register">
                  <button className='header__signIn'>
                      Sign In
                  </button>
                  <button className='header__signUp'>
                      SingUp
                  </button>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
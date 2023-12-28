import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__left">
            <div className="hero__left-top">
              <h4>We’ve got your morning covered with</h4>
            </div>
            <div className="hero__left-center">
              <h1 >Coffee</h1>

            </div>
            <div className="hero__left-bottom">
              <p>It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best
                for our customers.
              </p>
            </div>
            <div className="hero__left-button">
              <button>
                  Order Now
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
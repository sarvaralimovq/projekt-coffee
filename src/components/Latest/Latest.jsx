import React from 'react'
import './Latest.scss'
function Latest() {
  return (
    <div className='Latest'>
        <div className="container">
            <div className="bg-color">
                
            </div>
            <div className="latest__inner">
                
                <div className="latest__top">
                    <h2>Subscribe to get the Latest News</h2>
                    <p>Don’t miss out on our latest news, updates, tips and special offers</p>
                </div>
                <div className="latest__bottom">
                    <div className="button">
                    <input type="text" placeholder='Enter your mail'/>
                    <button>Suscribe</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Latest

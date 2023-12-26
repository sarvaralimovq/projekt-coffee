import React from 'react'
import './Discover.scss'
import discoverRight from '../../img/discover--right.png'
function Discover() {
  return (
    <div className='Discover'>
        <div className="container">
            <div className="discover__inner">
                <div className="discover__left">
                    <h2>
                        Discover the best coffee
                    </h2>
                    <p>
                        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className="discover__right">
                    <img src={discoverRight} alt="discoverRight" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover
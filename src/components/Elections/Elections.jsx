import React from 'react'
import './Elections.scss'
import coffeeBeans from '../../img/coffee-beans.png'
import elecImg2 from '../../img/elec-img2.png'
import elecImg3 from '../../img/elec-img3.png'
import elecImg4 from '../../img/elec-img4.png'


function Elections() {
  return (
    <div className='Elections'>
      <div className="container">
        <h2 className='elections__tittle'>Why are we different?</h2>
        <p className='elections__info'>We don’t just make your coffee, we make your day!</p>
        <div className="all__cards">
            <div className="beans">
                <img className='card__beans-img' src={coffeeBeans} alt="" />
                <h4 className='card__beans-tittle'>Supreme Beans</h4>
                <p className='card__beans-info'>Beans that provides <br />great taste</p>
            </div>
            <div className="bean">
                <img className='card__beans-img' src={elecImg2} alt="" />
                <h4 className='card__beans-tittle-2'>High Quality</h4>
                <p className='card__beans-info-2'>Beans that provides <br />great taste</p>
            </div>
            <div className="bean">
                <img className='card__beans-img' src={elecImg3} alt="" />
                <h4 className='card__beans-tittle-3'>Extraordinary </h4>
                <p className='card__beans-info-3'>Beans that provides <br />great taste</p>
            </div>
            <div className="bean">
                <img className='card__beans-img' src={elecImg4} alt="" />
                <h4 className='card__beans-tittle-4'>Affordable Price</h4>
                <p className='card__beans-info-4'>Beans that provides <br />great taste</p>
            </div>
        </div>
        <p className='elections-p'>Great ideas start with great coffee, Lets help you achieve that</p>
        <h5 className='elections-h5'>Get started today.</h5>
        <button className='elections-btn'>Join Us</button>
      </div>
    </div>
  )
}

export default Elections

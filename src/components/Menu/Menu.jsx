import React from 'react'
import './Menu.scss'
import firsCard from '../../img/firs-card.png'
import secCard from '../../img/sec-card.png'
import thirdCard from '../../img/third-card.png'
import fourCard from '../../img/four-card.png'





function Menu() {
  return (
    <div className='menu'>
      <div className="container">
        <h1 className='menu__tittle'>Enjoy a new blend of coffee style</h1>
        <p className='about__tittle'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div className="inner">
        <div className="card-1">
            <img className='firt__card-img' src={firsCard} alt="" />
            <h4 className='menu__card__about-1'>Cappuccino</h4>
            <p className='menu__card__compound'>Coffee 50% | Milk 50%</p>
            <p className='menu__card__price'>$8.50</p>
            <button className='menu__btn'>Order Now</button>
        </div>
        <div className="card-2">
            <img className='sec__card-img' src={secCard} alt="" />
            <h4 className='menu__card__about-2'>Chai Latte</h4>
            <p className='menu__card__compound'>Coffee 50% | Milk 50%</p>
            <p className='menu__card__price'>$8.50</p>
            <button className='menu__btn'>Order Now</button>
        </div>
        <div className="card-3">
            <img className='third__card-img' src={thirdCard} alt="" />
            <h4 className='menu__card__about-3'>Macchiato</h4>
            <p className='menu__card__compound'>Coffee 50% | Milk 50%</p>
            <p className='menu__card__price'>$8.50</p>
            <button className='menu__btn'>Order Now</button>
        </div>
        <div className="card-4">
            <img className='four__card-img' src={fourCard} alt="" />
            <h4 className='menu__card__about-4  '>Expresso</h4>
            <p className='menu__card__compound'>Coffee 50% | Milk 50%</p>
            <p className='menu__card__price'>$8.50</p>
            <button className='menu__btn'>Order Now</button>
        </div>
        </div>
      </div>
    </div> 
  )
} 

export default Menu
 
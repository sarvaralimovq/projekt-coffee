import React from 'react'
import './Invitition.scss'
import Cup from '../../img/cup.png'
// import beenCoffe from '../../img/been-coffe.png'


function Invitition() {
  return (
    <div className='Invitition'>
      <div className="invitition__bg-color">
          
          </div>
      <div className="container">
        
      <div className="wrapper">
      <div className="left-wrap">
        <h2 className='inv-tittle'>Get a chance to have an <br /> Amazing morning</h2>
        <p className='inv__info'>We are giving you are one time opportunity to <br /> experience a better life with coffee.</p>
      <button className='inv__btn'>Order Now</button>
      </div>
      <div className="right__wrpap">
        <img className='inv__cup-img' src={Cup} alt="" />
        {/* <img src={beenCoffe} alt="" /> */}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Invitition

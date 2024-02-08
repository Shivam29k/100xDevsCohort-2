import React from 'react'
import './card1.css'

function Card1({name}) {
  return (
    <div className='bdaycard'>
      <div className="wish">Happy</div>
      <div className="wish">Birthday</div>
      <div className="name">{name}</div>
    </div>
  )
}

export default Card1
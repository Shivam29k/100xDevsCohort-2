import React from 'react'
import './Card2.css'

function Card2({name}) {
  return (
    <div className='bdaycard2'>
      <div className="wish2">Happy</div>
      <div className="wish2">Birthday</div>
      <div className="name2">{name}</div>
    </div>
  )
}

export default Card2
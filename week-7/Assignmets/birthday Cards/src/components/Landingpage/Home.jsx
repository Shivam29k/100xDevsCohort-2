import React from 'react'
import './home.css'

function Home({setName, setButton}) {
  return (
    <div className='home card'>
        <h2>Enter Your Name</h2>
        <input 
          type="text" 
          placeholder='Enter Your name here'
          onChange={(e)=>setName(e.target.value)}
        />
        <button onClick={()=> setButton(true)}>Generate Cards</button>
    </div>
  )
}

export default Home
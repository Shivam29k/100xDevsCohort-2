import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  useEffect(()=>{
    document.body.style.backgroundColor = color;
    console.log(`Color changed to ${color}`);
  }, [color])

  return (
    <>
      <div className='parent'>
        <button onClick={()=>{setColor('red')}}>Red</button>
        <button onClick={()=>{setColor('yellow')}}>Yellow</button>
        <button onClick={()=>{setColor('black')}}>Black</button>
        <button onClick={()=>{setColor('purple')}}>Purple</button>
        <button onClick={()=>{setColor('green')}}>Green</button>
        <button onClick={()=>{setColor('blue')}}>Blue</button>
        <button onClick={()=>{setColor('white')}}>Default</button>
      </div>
    </>
  )
}

export default App

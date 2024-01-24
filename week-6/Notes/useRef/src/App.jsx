import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const divRef = useRef()   

  useEffect(()=>{
    setTimeout(()=>{
        console.log(divRef.current);
        divRef.current.innerHTML = '5 seconds are passed';
    }, 5000)
  })

  return <div>
    hello below is the referenced value 
    <div ref={divRef}>Waiting for 5 secs to pass</div>
  </div>
}

export default App

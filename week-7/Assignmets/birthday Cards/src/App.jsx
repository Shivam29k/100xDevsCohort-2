import { useState } from 'react'
import Card1 from './components/cards/Card1'
import Home from './components/Landingpage/Home'
import Card2 from './components/cards/Card2'
// import './components/cards/Card1.css'


function App() {
  const [name, setName] = useState('None');
  const [button, setButton] = useState(false);
  console.log(name);
  return (
    <>
      {button && <button className="otherName" onClick={()=>setButton(!button)}>Enter Other Name</button>}
      <div className="container">
        { !button && <Home setName={setName} setButton={setButton}/> }
        { button && <Card1 name={name} />}
        { button && <Card2 name={name} />}
      </div>
    </>
  )
}

export default App

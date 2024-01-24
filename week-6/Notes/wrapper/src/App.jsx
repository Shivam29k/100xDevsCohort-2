import { useState } from 'react'

function App() {
  return (
    <div>
      <CardWrapper>
        <div>
          Hi there
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          Hello there
        </div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
  return <div style={{ border: "2px solid black", padding: 20, margin: 2 }}>
    {children}
  </div>
}
export default App

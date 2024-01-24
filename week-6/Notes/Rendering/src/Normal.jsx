import React, { useState } from 'react'

export function Normal() {
  const [title, setTitle] = useState("my name is shivam.");
  function updateTitle() {
    setTitle("my name is "+ Math.random());
  }
  return <>
    <button onClick={updateTitle}>Update the title</button>
    <Header text={title}></Header>
    <Header text="Shivam 2"></Header>
    <Header text="Eery thing is re rendering coz State is in the main div so everything inside that div will rerender"></Header>
  </>
}

function Header({text}){
  return <div>{text}</div> 
}


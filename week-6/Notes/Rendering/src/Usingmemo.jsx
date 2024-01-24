import React, { useState , memo } from 'react'

export function Usingmemo() {
  const [title, setTitle] = useState("my name is shivam.");
  function updateTitle() {
    setTitle("my name is "+ Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header text={title}></Header>
    <Header text="Shivam 2"></Header>
    <Header text="Shivam 2"></Header>
    <Header text="Shivam 2"></Header>
    <Header text="Shivam 2"></Header>
    <Header text="Shivam 2"></Header>
  </div>
}

const Header = memo(function({text}) {
  return <div>{text}</div> 
})
import React from 'react'
import { useState } from 'react'

export function Rerender() {
    // if i do const state here the whole div will rerender
    
  return (
    <div>
        <HeaderWithButton></HeaderWithButton>
        <Header title="Shivam 2"></Header>
        <Header title="Only the div in whih the change is happening id rerendering coz state is indide that div i.e. div 2"></Header>
    </div>
  )
}

function HeaderWithButton() {
    const [title, setTitle] = useState("My name is Shivam");

    function updateTitle() {
        setTitle("my name is " + Math.random())
    }

    return <>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
    </>
}

function Header({ title }) {
    return <div>
        {title}
    </div>
} 



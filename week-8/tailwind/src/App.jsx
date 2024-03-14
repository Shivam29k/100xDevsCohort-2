import { useState } from 'react'
import './App.css'

function App() {
  return (<>
    <Grid />
    <Felx />
    <Responsive />
  </>
  )
}

function Grid() {
  return <div className='grid grid-cols-10'>
    <div className="bg-teal-300 col-span-2">hello 1</div>
    <div className="bg-cyan-500 col-span-3">hello 2</div>
    <div className="bg-red-400 col-span-3">hello 3</div>
    <div className="bg-yellow-400 col-span-2">hello 4</div>
  </div>
}

function Felx() {
  return <div className='flex'>
    <div className="bg-teal-300 w-[20%]">hello 1</div>
    <div className="bg-cyan-500 w-[30%]">hello 2</div>
    <div className="bg-red-400 w-[30%]">hello 3</div>
    <div className="bg-yellow-400 w-[20%]">hello 4</div>
  </div>
}

function Responsive(){
  return <div className='grid md:grid-cols-3'>
    <div className="bg-teal-300 ">hello 1</div>
    <div className="bg-cyan-500 ">hello 2</div>
    <div className="bg-red-400 ">hello 3</div>
  </div>
}

export default App

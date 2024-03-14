import React, { useEffect, useState } from 'react'


const useMousePointer = ()=>{
    const [coordinates, setCoordinates] = useState({x:0, y:0});
    
    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>setCoordinates({x:e.clientX, y:e.clientY}));
    }, []);
    return coordinates
}

function Pointer() {
    const mousePointer = useMousePointer()
  return (
    <div>Pointer location is {mousePointer.x} {mousePointer.y}</div>
  )
}

export default Pointer
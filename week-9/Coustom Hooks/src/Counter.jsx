import React, { useEffect, useState } from 'react'

const useCounter = ()=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(count=>count+1)
        }, 1000)
        return ()=>{
            clearInterval(intervalId);
        }
    },[])
    return count
}

function Counter() {
    const count = useCounter()
  return (
    <div>Counter {count}</div>
  )
}

export default Counter
import React, { useEffect, useState } from 'react'

const useDebounce = (inputValue, time)=>{

  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(()=>{
    let timeoutNo = setTimeout(()=>{
      setDebouncedValue(inputValue)
    }, time)

    return ()=>{
      clearTimeout(timeoutNo)
    }
  }, [inputValue])

  return debouncedValue
}


function UseDebounce(){
  const [value, setvalue] = useState()
  const debouncedValue = useDebounce(value, 500)

  return <div>
    <p>Debounced value is   {debouncedValue}</p>
    
    <input type="text" placeholder='search' onChange={(e)=>{setvalue(e.target.value)}} />
  </div>
}

export default UseDebounce
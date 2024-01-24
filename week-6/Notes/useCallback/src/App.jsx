import { useCallback, useState, memo } from 'react';

function App() {
  const [count, setCount] = useState(0)

  // simple function
  // function inputFunction(){
  //   console.log("hi there");
  // }


  // function using callback
  const inputFunction = useCallback(()=>{
    console.log("hi there");
  }, [])

  return <div>
    <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
    <button onClick={()=>{setCount(count+1)}}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("child member")
  return <div>
    <button>Button Clicked</button>
  </div>
})

export default App


// react is not smart enough to know that a function is changed or not so everytime even after using the function in memo if nothing has changed then also the functions rerenders
// in this example we are passing the inputFunction as props to ButtonComponrnt and the ButtonComponent should not be rerenderd because the functioan is not changing upon clicking Button.
// so to tell react that the function is not changed we need to put the function a variable as a callbcak and then pass the dependency array and leave the dependency array empty if we never want that particular functioina to re-render
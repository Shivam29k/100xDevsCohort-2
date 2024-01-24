import { useEffect, useState } from 'react'

function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('backend url')
      .then((res)=>{
        setTodos(res.data.todos)
      })
  }, [])
}

function App() {
 const todos = useTodos()

  return <div>
    {todos}
  </div>
}

export default App



// we can create coustom hooks like this one outside the app to use it anywhere inside the app
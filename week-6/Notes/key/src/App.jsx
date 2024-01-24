import { useState } from 'react'

let idCount = 4;

function App() {
  const [todos, setTodo] = useState([{
      id: 1,
      title: "got to gym",
      description: "go to gym today"
    },{
      id: 2,
      title: "eat food",
      description: "go mess"
    },{
      id: 3,
      title: "go study",
      description: "go to college"
    }
  ])
  
  function addtodo(){
    setTodo([...todos, {
      id: idCount++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addtodo}>Add a Todo</button>
      {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
      {/* we should key to pass one argument of a list in react whenever we passing a list so thatr eact uniquely identifies the */}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h3>
      {title}
    </h3>
    <p>
      {description}
    </p>
  </div>
}

export default App

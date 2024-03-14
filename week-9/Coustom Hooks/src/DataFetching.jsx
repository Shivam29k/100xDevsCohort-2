import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios'


// Coustom useTodos hook to fetch data from server
function useTodos(sec) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getData = () => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  
    useEffect(() => {
      getData();
      const intervalId = setInterval(() => {
        console.log("auto refreshing.....");
        getData();
      }, sec * 1000);
      return () => {
        console.log("(clean up code)");
        clearInterval(intervalId);
      };
  
    }, [sec]);
  
    return [todos, loading];
  }

function DataFetching() {
    const [todos, loading] = useTodos(5);

    if (loading) {
      return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Todos List</h1>
      <ul>
        {todos.map(todo => <Track key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}


function Track({ todo }) {
    return <div >
      {todo.title}
      <br />
      {todo.description}
      <br />
      <br />
    </div>
  }
  

export default DataFetching
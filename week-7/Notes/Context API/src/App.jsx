import { useState } from 'react'
import {Propdrilling} from './counter/Propdrilling'
import { Contextapi } from './counter/Contextapi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h4>Counter via Context API method</h4>
        <p>In context API method props are passed from parent to the child <br/>which needs the element whithout passing it to the other components.
        </p>
        <Contextapi/>
      </div>
      <hr />
      <div>
        <h4>Counter via Propdrilling method</h4>
        <p>In prop drilling method props aare passed from parent to the child in a UI tree,<br/> but it becomes very complex and hard to maintain and read when props are passed in hundreds of components.</p>
        <Propdrilling/>
      </div>
    </div>
  )
}

export default App

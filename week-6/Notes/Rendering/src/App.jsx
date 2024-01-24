
import { Rerender } from './Rerender.jsx';
import { Usingmemo } from './Usingmemo.jsx';
import { Normal } from './Normal.jsx';


function App() {
  return (
    <>
      <div>
        <h3>Using Memo</h3>
        <Usingmemo />
      </div>
      <div>
        <h3>Normal</h3>
        <Normal></Normal>
      </div>
      <br />
      <div>
        <h3>Rerender</h3>
        <Rerender></Rerender>
      </div>
      <br />
    </>
  )
}



export default App

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CountContext } from './components/context.jsx';
import { countAtom, evenSelector } from './store/atoms/count.js';



// useRecoilState -> [count, setCount]
// useRecoilValue -> count
// useSetRecoilValue -> setCount


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-rendering count");
  return <div>
    <Countererenderer />
    <Even />
    <Buttons />
  </div>
}

function Countererenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  console.log("re-rendering Buttons");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease</button>
  </div>
}

function Even() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even" : null}
  </div>
}

export default App
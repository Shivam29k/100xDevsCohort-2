import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <br />
    <Todo id={2} />
  </RecoilRoot>
}

// function Todo({id}) {
//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

//   return (
//     <>
//       {todo.title}
//       <br />
//       {todo.description}
//       <br />
//     </>
//   )
// }


// useRecoilStateLoadable 
// {
//   contents: {},
//   state: 'hasValue' or 'loading' or 'haseError'
// }


function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === 'loading') {
    return <div>Loading...</div>
  }


  return (
    <>
      {todo.contents.title}
      <br />
      {todo.contents. description}
      <br />
    </>
  )
}

export default App
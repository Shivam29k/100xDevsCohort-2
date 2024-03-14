
import IsOnline from './IsOnline';
import Pointer from './Pointer';
import Counter from './Counter';
import UseDebounce from './UseDebounce';
import DataFetching from './DataFetching';



function App() {



  return (
    <>
      <h4>This is an example of coustom useIsOnline hook to check the online status</h4>
      <IsOnline/>
      <h4>This is an example of coustom useTodos hook to keep fetching the data in every x seconds from the server</h4>
      <DataFetching/>
      <h4>This is an example of coustom hook to get the pointer coordinates</h4>
      <Pointer/>
      <br />
      <h4>This is an example of coustom hook to start a Counter</h4>
      <Counter/>
      <br />
      <h4>This is an example of debounce a input value</h4>
      <UseDebounce/>
    </>
  )
}





export default App
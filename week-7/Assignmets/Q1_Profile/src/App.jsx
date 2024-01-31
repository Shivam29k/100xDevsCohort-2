import { Stats } from './components/Stats'
import { Profile } from './components/Profile'

function App() {

  return (
    <div className='container'>
      <div className='profile'>
        <Profile />
      </div>
      <div className='count'>
        <Stats />
      </div>
    </div>
  )
}



export default App

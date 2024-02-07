import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Stats from './components/Stats'
import axios from 'axios' 


function App() {
  const [data,setData] = useState({});
  useEffect(()=>{
    axios.get('https://api.github.com/users/Shivam29k')
    .then(response => {
      setData(response.data);
    })
  },[]);  

  return (
    <>
      <div className="card">
        <Profile data={data} />
        <Stats data={data} />
      </div>
    </>
  )
}

export default App

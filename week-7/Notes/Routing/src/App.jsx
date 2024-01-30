import {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard =  lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))

function App() {

  return (
    <>
      {/* <div style={{background:"black", color: "white", padding:20}}>
        
        <div>This way will hard reload and it will request everything again from the server</div>

        <button onClick={()=>{
          window.location.href = "/"
        }}>Landing page</button>

        <button onClick={()=>{
          window.location.href = "/dashboard"
        }}> Dashboard page</button>
      </div> */}

      <br />
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard/> </Suspense> } />
          <Route path="/" element={<Suspense fallback={"loading..."}> <Landing/> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate()

  return <div>
    <div style={{background:"black", color: "white", padding:20}}>
        
        <div>This way will do the routing on the clint side and noting will be requested from the server</div>

        <button onClick={()=>{
          navigate("/");
        }}>Landing page</button>

        <button onClick={()=>{
          navigate("/dashboard");
        }}> Dashboard page</button>

      </div>
  </div>
}

export default App

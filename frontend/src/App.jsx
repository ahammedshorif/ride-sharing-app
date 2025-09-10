import {Routes,Route} from "react-router-dom"
import Start from "./Pages/Start"
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from "./Pages/CaptainLogin"
import CaptainSignup from "./Pages/CaptainSignup"
import Home from "./Pages/Home"


function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Start></Start>}></Route>
          <Route path='/login' element={<UserLogin></UserLogin>}></Route>
          <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
          <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
          <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          
       </Routes>
    </div>
  )
}

export default App

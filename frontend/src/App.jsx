import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from "./Pages/CaptainLogin"
import CaptainSignup from "./Pages/CaptainSignup"


function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<UserLogin></UserLogin>}></Route>
          <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
          <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
          <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>
          

       </Routes>
    </div>
  )
}

export default App

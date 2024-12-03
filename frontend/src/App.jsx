import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import CaptainLogin from "./Pages/CaptainLogin"
import CaptainSignup from "./Pages/CaptainSignup"
import CaptainHome from "./Pages/CaptainHome"
import Start from "./Pages/Start"
import UserProtectedWrapper from "./Pages/UserProtectedWrapper"
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>} />
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Components/Notfound'
import SingUp from './Auth/SingUp'
import SingIn from './Auth/SingIn'
import Home from './Pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App

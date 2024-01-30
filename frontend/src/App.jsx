import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import CreateApp from './Pages/CreateApp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/create" element={<CreateApp />}/>
    </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
    </>
  )
}

export default App
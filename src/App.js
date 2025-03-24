import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <h1>Welcome to Recipe App</h1>
      <Navbar/>
      <Home/>
      <Login/>
      <Register/>
    </div>
  )
}

export default App

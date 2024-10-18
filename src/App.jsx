import { useState } from 'react'

import './App.css'
import Home from './components/Pages/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/Signup'
import Signin from './components/Login/Signin'
import ProtectedRoute from './components/ProtectedRoute'

function App() {


  return (
    <Routes>
    
      <Route path='/' element={
       
          <div className='mainpage'>

            <div className='main'>
              <Home />
            </div>
            <Footer />
          </div>
        
      } />

    </Routes>

  )
}

export default App

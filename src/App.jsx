import { useState } from 'react'
import Login from '../src/components/Login'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import forget from './components/Forget' 


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/forget",
      element :<forget/>
    }

  ])
  return(
     
    
  <>
   <RouterProvider router={router} />
  <Login/>
  </>
  )
  
}

export default App

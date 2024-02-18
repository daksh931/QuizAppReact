import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header'
import Quiz from './assets/Components/Quiz'

function App() {


  return (
 
 <div className='bg-purple-300 min-h-[100vh]'>
  
  <Header /> 
  <Quiz />
 </div>

  )
}

export default App

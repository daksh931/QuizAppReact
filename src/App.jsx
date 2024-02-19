import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header'
import Quiz from './assets/Components/Quiz'

function App() {


  return (
 <>
      <p className='text-black'> Daksh Goyal
        </p>
 <div className='bg-purple-300 min-h-[100vh]'>
  <Header /> 
  <Quiz />
 </div>

 </>
  )
}

export default App

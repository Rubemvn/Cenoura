import { useState } from 'react'
import './App.css'
import Score from './components/Score'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className='App'>
        <Score />
        <Form/>
      </div>
    </>
  )
}

export default App

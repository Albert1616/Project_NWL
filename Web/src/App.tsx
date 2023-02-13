import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Habit } from './components/habti'
import './App.css'

function App() {

  return (
    <div className="App">
    <Habit text='Meu pau' num={10} />
    </div>
  )
}

export default App

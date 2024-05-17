import React from 'react'
import MadLibsArea from './MadLibsArea'
import stories from './stories'
import './App.css'

function App() {

  return (
    <div className="App">
      <MadLibsArea stories={stories} />
    </div>
  )
}

export default App
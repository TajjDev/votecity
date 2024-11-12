import React from 'react'
import './App.css'
import Join from './assets/component/join/Join'
import GetStarted from './assets/component/get started/GetStarted'
import About from './assets/component/about/About'
import Nav from './assets/component/nav/Nav'
const App = () => {
  return (
    <>
    <div>
      <Nav></Nav>
    </div>
    <div id="main">
      <Join></Join>
      <GetStarted></GetStarted>
      <About></About>
    </div>
    </>
  )
}

export default App
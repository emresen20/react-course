import { useEffect, useState } from "react"
import Button from "./components/Button"
import Texts from "./components/Texts"

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from 'react-router-dom'
import Home from "./pages/Home"
import Detail from "./pages/Detail"

function App() {

  
  const [name,setName]=useState("react ")

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  
    </>

  )
}

export default App

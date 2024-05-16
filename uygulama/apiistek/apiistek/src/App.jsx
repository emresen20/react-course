import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL= "http://localhost:3005"

const App = () => {



  const   getAllUsers= async()=>{
   const response = await axios.get(BASE_URL + "/users");
   console.log(response.data)
  }

  useEffect(()=>{
    getUSerbyId(1)
  },[])

  const getUSerbyId= async (userId)=>{
    const response = await axios.get(BASE_URL+ "/users/"+userId)
    console.log(response.data)
  }

  return (
    <div>

    </div>
  )
}

export default App

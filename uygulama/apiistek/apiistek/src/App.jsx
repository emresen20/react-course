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
    const newUser={
        "username": "Kemal",
        "password": "123123",

    }
    createUser(newUser)
    
  },[])

  const getUSerbyId= async (userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    console.log(response.data)
  }

  const createUser= async (newUser)=>{
  const response=  await axios.post(`${BASE_URL}/users`,newUser)
    console.log("response",response.data)
  }

  return (
    <div>

    </div>
  )
}

export default App

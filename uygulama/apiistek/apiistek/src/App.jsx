import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL= "http://localhost:3005"

const App = () => {



  const   getAllUsers= async()=>{
   const response = await axios.get(BASE_URL + "/users");
   console.log(response.data)
  }

  //  useEffect(()=>{
  //    const newUser={
  //        "username": "zalim",
  //        "password": "123123",   

  //    }
  //    createUser(newUser)
    
  //  },[])

  // useEffect(()=>{
  //   const newUser={
  //            "username": "Ali",
  //           "password": "12312dddd3",
  //   }

  //   updateUser("af2d",newUser)

  // })


   useEffect(()=>{
     deleteUserbyID("5d49")
   })

  const getUSerbyId= async (userId)=>{

    // Veriyi getirmek için kullanılır
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    console.log(response.data)
  }

  const createUser= async (newUser)=>{

    //yeni veriler eklemek için kullanılır
  const response=  await axios.post(`${BASE_URL}/users`,newUser)
    console.log("response",response.data)
  }

  const updateUser = async(userId,uptaedUser)=>{
    // Put veri güncellleme için kullanulıur
  await  axios.put(`${BASE_URL}/users/${userId}`,uptaedUser);
  }
  const deleteUserbyID = async (userId)=>{

    // silmek için kullanılır
    await axios.delete(`${BASE_URL}/users/${userId}`)
  }

  return (
    <div>

    </div>
  )
}

export default App

import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({children}) => {

  const emres= "buzdolabı"
  
  return (
    <div>
      <div>Container bu</div> 
      {children} 
    </div>
  )
}

export default Home

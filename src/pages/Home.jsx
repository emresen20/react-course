import React from 'react'
import { useNavigate } from 'react-router-dom'

export const data =[
    {
        id:0,
        name:"REact",
        description:"Reat Açıklana"
    },
    {
        id:1,
        name:"REact Native",
        description:"REact Native"
    },
    {
        id:2,
        name:"Vue",
        description:"Vue"
    }
]

const Home = () => {
    const navigate= useNavigate()
  
  return (
    <div>
      {
        data.map((dt,i) => (
            <div key={i} onClick={()=>navigate(`detail/${dt.id}`)}>
                <div>{dt.name}</div>
                <div>{dt.description}</div>
                
            </div>
        ))
      }
    </div>
  )
}

export default Home

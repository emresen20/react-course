import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Home';

const Detail = () => {
    const {id} = useParams();
    const [getData,setGetData]=useState("")
    console.log(id)

    useEffect(()=>{
        if(id)
        setGetData(data.find(dt=>dt.id==id))
    },[id])
  return (
    <div>
      {getData?.name}
    </div>
  )
}

export default Detail

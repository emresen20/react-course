import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");

    useEffect(()=>{
        console.log("Her Zaman Çalışan useefffect")
    })

    useEffect(()=>{
        console.log("SAyfa İlk render edildiğinde çalışan useffecet")
        //veritabanında bunu koy
    },[])

    useEffect(()=>{
        console.log("SAyfa İlk render ve lastname değiştiğinde çalışan useffett")
    },[lastName])

    useEffect(()=>{
        console.log("SAyfa İlk render ve firstname değiştiğinde çalışan useffett")
    },[firstName])
  return (

    <div>
      <button onClick={()=>setFirstName("emre ")}> first nbame </button>
      <div> first name:{firstName}</div>
      <button onClick={()=>setLastName("şen")}> first nbame </button>
      <div> last name:{lastName}</div>
    </div>
  )
}

export default Useeffect

import { useState } from "react"
import Button from "./components/Button"
import Texts from "./components/Texts"
function App() {

  const [babu,setBabu]=useState([])
  const [name,setName]=useState("")
  const clickfunc=(e)=>{
   setName(e.target.value)
  }
  const basfunc=()=>{
     setBabu(prev => ([...prev,name]))
     document.getElementById("inputField").value = "";
   }

  return (
    <>
      <div onClick={()=>setBabu(babu+1)}>
        {name}
      </div>
      <div >
       {babu}
      </div>
      <div onClick={()=>setBabu(babu-1)}>
       azalt
      </div>
      <Texts text={"selam ben props"} name={"React "} />
      <Button name={"bassssss"} onClick={()=>setBabu(babu+1)}/>
      <Button name={"+++"} onClick={basfunc}/>
      <input type="text" onChange={clickfunc} id="inputField"/> 
      <div>
        {
          babu.map((dt,i)=> (
            <div>
              {dt}
            </div>
          ))
        }
      </div>
     
    </>

  )
}

export default App

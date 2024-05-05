import { useState } from "react"
import Button from "./components/Button"
import Texts from "./components/Texts"
function App() {

  const [babu,setBabu]=useState(1)
  const [name,setName]=useState("")
  const clickfunc=()=>{
    setBabu("değişti")
  }

  return (
    <>
      <div onClick={()=>setBabu(babu+1)}>
        arttır
      </div>
      <div >
       {babu}
      </div>
      <div onClick={()=>setBabu(babu-1)}>
       azalt
      </div>
      <Texts text={"selam ben props"} name={"React "} />
      <Button name={"bassssss"} onClick={()=>setBabu(babu+1)}/>
      <Button name={"+++"}/>
      {/* <input type="text" onChange={(e)=> setName(e.target.value)}/> //inputta böyle kullanulır */}
     
    </>

  )
}

export default App

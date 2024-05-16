import React from 'react';
import Home from "./pages/Home";
import Texts from './components/Texts';

function App() {

  const u = "salako"
  const alak="kalem kağıt"
  return (
    <div>  
      <Home>
        <Texts text={"emre şen0"} name={"childeren öğrenme"}/>   
      </Home>
  
    </div> // bu children yapısı companent içi companent için kullanılır
  );
}

export default App;

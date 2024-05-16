import React from 'react';
import Home from "./pages/Home";
import Texts from './components/Texts';
import Useeffect from './pages/Useeffect';

function App() {

  const u = "salako"
  const alak="kalem kağıt"
  return (
    <div>  
      <Useeffect/>
  
    </div> // bu children yapısı companent içi companent için kullanılır
  );
}

export default App;

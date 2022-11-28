import logo from './logo.svg';
import './App.css';
import Second from './Components/Second';
import Third from './Components/Third';

import {useState} from "react";


function App() {

   const [backColor,setBackColor]=useState("blue");
   const [backColor_2, setBackColor_2] = useState("red")

   const colorHandler = () => {
    setBackColor(backColor==="blue"? "red":"blue");
    setBackColor_2(backColor_2==="red"? "blue":"red");

  
    console.log("click");
   }


  return (<div style={{width:"500px",
                       height:"300px",
                       backgroundColor:"black",
                       }}>
    
    <h1 style={{color:'white'}}>hello sister</h1>
    <h1 style={{color:'white'}}>hello bro</h1>
    <button onClick={colorHandler}>change color</button>
    <div style={{display:"flex",
                 flexDirection:"row"}}>
    <Second color={backColor}/>
    <Third  color={backColor_2}/>
    </div>
    </div>
  );
}
//usestate,props,padding,margin,display-flex
export default App;

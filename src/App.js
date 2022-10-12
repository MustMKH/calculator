import './App.css';
import {useState} from "react"
import Nappain from "./Nappain"

let nappaimet = ["1","2","3","4","5","6","7","8", "9", "0","+","-","*","/","="]

function App() {
    const [teksti, setTeksti] = useState("")
    const nappainPainettu=(x)=>{
        if (x=="=") {
            setTeksti(eval(teksti))
            return
        }
        setTeksti(teksti+x)
    }
    return (    
        <div>
        <p>{teksti}</p>
        {nappaimet.map((nappain,index)=><Nappain key={index} nappainPainettu={nappainPainettu} nappain={nappain}/>)}
        </div>        
    );
}

export default App

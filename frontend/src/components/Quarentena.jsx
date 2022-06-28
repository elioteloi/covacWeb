import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./navigation/Navigation"
import Nav from "./navigation/Navigation";


function Formulario() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cellNumber, setCellNumber] = useState("")
  const [dateOfDiagnostic, setDateOfDiagnostic] = useState("")
  const [dateOfLockdown, setDateOfLockdown] = useState("")
  const [placeOfCovid, setPlaceOfCovid] = useState("")
  const [nameOfVaccine, setNameOfVaccine] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [symptoms, setSymptoms] = useState("")


  const center = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: '65vh',
}
  
  const input = {
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    color: "black",
    borderRadius: 10, 
    width: 400,
    height: 50,
    border: "none",
    fontFamily: "Verdana",
    margin: 10,  
    
  }
  
  const button = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: 10,
    width: 400,
    height: 50,
    border: "none",
    fontFamily: "Verdana",
    margin: 10,  
    position: 'static', left: '-500%', top: '50%',
  transform: 'translate(106%, 50%)',
  }
  
  const text = {
    fontFamily: "Verdana",
   
  }

  return (
    <div>
      <Navigation/>
    <div style={center}>
        <form>
            <div>
               
            <input type="text"  style={input} placeholder="Nome"  value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="email" style={input} placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="text"  style={input} placeholder="Numero de celular"  value={cellNumber} onChange={(e) => setCellNumber(e.target.value)}></input>

            </div>
            <div >
            <input type="text"  style={input} placeholder="Data de diagnostico"  value={dateOfDiagnostic} onChange ={(e) => setDateOfDiagnostic(e.target.value)}></input>
        <input type="text"  style={input} placeholder="Data de sua quarentena"  value={dateOfLockdown} onChange={(e) => setDateOfLockdown(e.target.value)}></input>
        <input type="text"  style={input} placeholder="lugar que teve covid"  value={placeOfCovid} onChange={(e) => setPlaceOfCovid(e.target.value)}></input>

          
            </div>
            <div>
               <input type="text"  style={input} placeholder="Nome de sua vacina"  value={nameOfVaccine} onChange={(e) => setNameOfVaccine(e.target.value)}></input>
        <input type="text"  style={input} placeholder="N° de pessoas em contato"  value={numberOfPeople} onChange ={(e) => setNumberOfPeople(e.target.value)}></input>
        <input type="text"  style={input} placeholder="Sintomas"  value={symptoms} onChange ={(e) => setSymptoms(e.target.value)}></input>
            </div>
           <div>
           <button style={button} onClick={() => {
          axios.post("http://localhost:8080/lockdown", {
            name,
            email,
            cellNumber,
            dateOfDiagnostic,
            dateOfLockdown,
            placeOfCovid,
            nameOfVaccine,
            numberOfPeople,
            symptoms
          }).then(res => console.log("Posting data", res))
        }}>Enviar formulario</button>
           </div>
        </form>
        
    </div>
</div>
  )
}

export default Formulario;
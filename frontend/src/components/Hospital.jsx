import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navigation from "./navigation/Navigation"


const Vacinas = () => {

  const [hospital, setHospital] = useState([]);  
  const [query, setQuery] = useState("")

  const search = {
    color: "black",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    borderRadius: 10,
    width: "40%",
    height: 50,
    border: "#FFFAFA",
    fontFamily: "Verdana",
    margin: 10,  
    position: 'static', left: '-50%', top: '50%',
    transform: 'translate(70%, -50%)',    
  }

  const data = {
    color: "black",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    borderRadius: 10,
    width: "40%",
    height: 90,
    border: "#FFFAFA",
    fontFamily: "Verdana",
    margin: 10,
    listStyle: 'none',
    position: 'static', left: '-50%', top: '50%',
    transform: 'translate(16%, -50%)',    
    fontSize: 16,
  }

  useEffect(() => {
  axios.get("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true.")
      .then(res => {
          console.log(res)
          setHospital(res.data)
        })
      .catch(err => {
          console.log(err);
      })
})



return(
  <div>
      <Navigation/>
    <input
    style={search}
    placeholder={"Pequise o seu país..."}
    onChange={e => setQuery(e.target.value)}
    />
      <ol>
        
          {hospital.filter((hospital) => hospital.country.toLowerCase().includes(query)).map(hospital => (
          <button style={data}   key={hospital.id}> 
           {hospital.country} <br/> 
          testados: {hospital.tested} <br/>
          recuperados: {hospital.recovered} <br/>
          infectados: {hospital.infected}</button>
          
          ))}
          
      </ol> 
  </div>
)
  
} 


export default Vacinas  
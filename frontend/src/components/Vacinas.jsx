import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navigation from "./navigation/Navigation"

  

const Vacinas = () => {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("")

  const search = {
    color: "black",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    borderRadius: 10,
    width: "40%",
    height: 50,
    border: "#f0f8ff",
    fontFamily: "Verdana",
    margin: 10,
    position: 'static', left: '-50%', top: '50%',
    transform: 'translate(73%, -50%)',    
  }

  const datas = {
    color: "black",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    borderRadius: 10,
    width: "30%",
    height:50,
    border: "#FFFAFA",
    fontFamily: "Verdana",
    margin: 20,
    listStyle: 'none',
     
  }

  const title = {
    color: "black",
    backgroundColor: "#F8F8FF",
    textAlign: "center",
    borderRadius: 10,
    width: "90%",
    height:50,
    border: "#FFFAFA",
    fontFamily: "Verdana",
    margin: 40,
    fontSize: 25,
    listStyle: 'none',
     
  }

  useEffect(() => {
    axios.get("http://localhost:8080/vacina")
        .then(res => {
            console.log(res)
            setData(res.data)
          })
        .catch(err => {
            console.log(err);
        })
  })

return (
       <div>
       <Navigation/>
     <input
    style={search}
    placeholder={"pequise a sua vacina..."}
    onChange={e => setQuery(e.target.value)}
    /> 
      {
         data.filter((vacina) => vacina.vacina.toLowerCase().includes(query)).map( vacinas => {
          return (
            <div>
              <button style={title} key={vacinas.vacina}>{vacinas.vacina}</button>
             

              {vacinas.paises && vacinas.paises.map( paises => {
                return(
                <button style={datas}>
                  { paises }
                </button>
                )
              })}
            </div>
          )
        })
      }
    </div>
  
)

  
}
export default Vacinas;
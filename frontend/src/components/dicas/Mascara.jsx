import React from "react"


const mascara  = () => {

  const text = {
    fontFamily: "Verdana",
    textAlign: "center",
    fontSize: 25,
    margin: 10,
    color: "black",
  }

  const textTitle = {
    textAlign: "center",
    fontSize: 40,
    margin: 10,
    color: "black",
    fontFamily: "Verdana",
  }

  const alignText = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
  
  }
    return (
      <div>
        <div style={alignText}>
        <h1 style={textTitle}><bold>O uso da máscara{"\n"}</bold></h1>
        <br/>
        <div><h1 style={text}>O uso da máscara é recomendado em ambiente coletivo como em <bold>SALA DE AULA, TRANSPORTE PUBLICO, EVENTOS OU REUNIÃO.{"\n"}</bold></h1></div>
        <div><h1 style={text}>A máscara é fortamente recomendado para reduzir a exposição e a contaminação de <bold>COVID-19{"\n"}</bold></h1></div>
        <div><h1 style={text}>É recomendado lavar as mãos antes de colocar e/ou tirar a máscara, colocando-a sobre o <bold>NARIZ e a BOCA.{"\n"}</bold></h1></div>
      </div>

      </div>
    )
}

export default mascara
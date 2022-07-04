import React from "react"


const prevenir  = () => {

    const text = {
        textAlign: "center",
        fontSize: 25,
        margin: 10,
        color: "black",
        fontFamily: "Verdana",
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
        <h1 style={textTitle}><bold>Prevenir a não contaminação de COVID-19{"\n"}</bold></h1>
<br/>
        <div><h1 style={text}>As medidas indicadas pela <bold>OMS (Organização Mundial da Saude)</bold> são: <br/><bold>DISTANCIAMENTO SOCIAL, HIGIENIZAÇÃO DAS MÃOS,</bold> USO 
         <bold>{"\n"}DE MASCARA.{"\n"}</bold> Em casos de suspeita de contaminação de{"\n"}<bold>COVID-19</bold> é recomendado o <bold>ISOLAMENTO SOCIAL</bold>{"\n"}</h1></div>
        </div>
      </div>
    )
}

export default prevenir
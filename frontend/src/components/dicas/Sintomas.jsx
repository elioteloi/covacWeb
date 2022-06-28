import React from "react"


const sintomas  = () => {

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
        <h1 style={textTitle}><bold>Os sintomas{"\n"}</bold></h1>

        <div><h1 style={text}>Os casos assintomaticos são caracterizados por teste de covid-19 <bold>POSITIVOS</bold> mas com ausencia de sintomas{"\n"}</h1></div>
        <div><h1 style={text}><bold>CASOS LEVES:</bold> São caracterizados por presencia de sintomas como <bold>TOSSE, DOR DE GARGANTA ou CORIZA,</bold> pode estar com perda de <bold>OLFATO e PALADAR, DIAREIA, FEBRE, CALAFRIOS, e FADIGA</bold>{"\n"}</h1></div>
        <div><h1 style={text}><bold>CASOS MODERADOS:</bold> São caracterizados por sinais leves da doenca como <bold>TOSSE e FEBRE</bold> diaria, falta de apetite, diarreia, presença de <bold>PNEUMONIA{"\n"}</bold></h1></div>
        <div><h1 style={text}><bold>CASOS GRAVES:</bold> São caracterizados por sindrome gripal que apresenta dificuldade de respirar, desconforto respiratorio ou pressão persistente no torax ou saturarcão de oxigenio{"\n"}</h1></div>
        <div><h1 style={text}><bold>CASOS CRITICOS:</bold> São caracterizados por sintomas de desconforto resoiratorio, insuficiencia respiratoria ou necessidade de suporte respiratorio e internaçoes em unidades de terapia intensiva{"\n"}</h1></div>
        </div>
      </div>
    )
}

export default sintomas
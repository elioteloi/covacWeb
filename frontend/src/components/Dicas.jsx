import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation/Navigation"

const Login = () =>  {

  const div = {
    position: 'absolute', left: '50%', top: '20%',
    transform: 'translate(-50%, 50%)', 
}


const button = {
    color: "white",
    flexDirection: "row",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: 10,
    width: 300,
    height: 100,
    border: "none",
    fontFamily: "Verdana",
    margin: 20,    
}
 
const textTitle = {
          position: 'absolute', left: '50%', top: '25%',
          transform: 'translate(-50%, 10%)',
          fontFamily: "Verdana",
}
  return (
    <div>
      <Navigation/>
      <h1 style={textTitle}>Dicas contra a Covid-19</h1>
        

        <div style={div}>
          <div>
        <Link to="/dicas/sintomas">
        <button style = {button}>Sintomas</button>
        </Link>

        <Link to="/dicas/transmissao">
        <button style = {button}>Transmissão</button>
        </Link>
        </div>

        <div>
        <Link to="/dicas/prevenir">
        <button style = {button}>Prevenir</button>
        </Link>

        <Link to="/dicas/mascara">
        <button style = {button}>Máscara</button>
        </Link>
        </div>
        </div>
    </div>
  );
}

export default Login;
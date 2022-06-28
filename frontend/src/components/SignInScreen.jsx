import React,{ useState } from 'react';
import covacLogo from "./icons/covacLogo.png"
import { Link } from "react-router-dom";
import axios from 'axios';


const Signin =() =>  {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [vaccine, setVaccine] = useState("")
 

const area = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute', left: '30%', top: '50%',
  transform: 'translate(-50%, -50%)',

}

const textError = {
  textAlign: "center",
  color: "black",
  fontFamily: "Verdana",  
  margin: 10, 
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
}

const text = {
  fontFamily: "Verdana",
}

const image = {
  width: 600,
  height: 600,
  position: 'absolute', left: '200%', top: '-20%',
  transform: 'translate(-50%, 10%)',
}

  return (
    <form style={area}>
      <h1 style={text}>Sign in</h1>
      
      <input type="text" placeholder="name" style={input} value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="email" placeholder="email" style={input} value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" placeholder="password" style={input} value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <input type="text" placeholder="vaccine" style={input} value={vaccine} onChange={(e) => setVaccine(e.target.value)}></input>

      <Link to="/vacinas">
      <button onClick={() => {
        axios.post("http://localhost:8080/subs", {
          username,
          email,
          password,
          vaccine
         
        }).then(res => console.log("Posting data", res))
      }} style={button}>Sign in</button>
    </Link>

    <Link to="/login">
    <button className="Button" style={button}>Go to Login</button>
    </Link>
    <img src={covacLogo} alt="covacLogo" style={image}/>

  </form>
  );
}

export default Signin;
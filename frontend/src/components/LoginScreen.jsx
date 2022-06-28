import React,{ useState } from 'react';
import covacLogo from "../components/icons/covacLogo.png"
import { Link } from "react-router-dom";
import axios from 'axios';


const Login =() =>  {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  


const area = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute', left: '30%', top: '50%',
  transform: 'translate(-50%, -50%)',

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
  position: 'absolute', left: '200%', top: '-60%',
  transform: 'translate(-50%, 10%)',
}

  return (
    <div >
      <form style={area}> 
      <h1 style={text}>Log in</h1>
      
      
      <input type="username" placeholder="username" style={input} value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="password" placeholder="password" style={input} value={password} onChange={(e) => setPassword(e.target.value)}></input>

      <Link to="/vacinas">
      <button onClick={() => {
        axios.get("http://localhost:8080/auth", {
         username,
         password,
        }).then(res => console.log("Posting data", res))
      }} style={button}>Log in</button>
      </Link>

      <Link to="/signin">
    <button className="Button" style={button}>Go to Sign in</button>
    </Link>
     <img src={covacLogo} alt="covacLogo" style={image}/>
    </form>
  </div>
  );
}

export default Login
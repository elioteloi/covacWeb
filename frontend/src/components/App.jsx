import React from "react";
import Home from "./HomeScreen"
import SignIn from "./SignInScreen"
import LogIn from "./LoginScreen"
import Vacinas from "./Vacinas"
import Paises from "./Paises"
import Dicas from "./Dicas"
import Hospital from "./Hospital"
import Quarentena from "./Quarentena"
import Sintomas from "./dicas/Sintomas"
import Transmissao from "./dicas/Transmissao"
import Prevenir from "./dicas/Prevenir"
import Mascara from "./dicas/Mascara"

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/vacinas" element={<Vacinas/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/logIn" element={<LogIn/>}/>
                <Route path="/paises" element={<Paises/>}/>
                <Route path="/dicas" element={<Dicas/>}/>
                <Route path="/hospital" element={<Hospital/>}/>
                <Route path="/quarentena" element={<Quarentena/>}/>
                <Route path="/dicas/sintomas" element={<Sintomas/>}/>
                <Route path="/dicas/transmissao" element={<Transmissao/>}/>
                <Route path="/dicas/prevenir" element={<Prevenir/>}/>
                <Route path="/dicas/mascara" element={<Mascara/>}/>
                
            </Routes>
        </Router>
        )
}

export default App

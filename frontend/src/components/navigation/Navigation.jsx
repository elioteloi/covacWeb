import React from "react";
import { Link } from "react-router-dom";
import vacina from "../icons/vacina.png"
import paise from "../icons/world.png"
import dicas from "../icons/masc.png"
import hospital from "../icons/hospital.png"
import quarentena from "../icons/lockdown.png"


const Nav = () => {

    const nav = {
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "sans-serif",
        background: "white",
        borderRadius: "10px",
        margin: "40px 80px",
        listStyle: "none",  
                  
    }
    
    const link = {
        color: "black",
        textDecoration: "none",
        fontFamily: "Verdana",
        
    }

    const image = {
     width: 50,
    height: 40,
    
        
}
    return (
        <nav style={nav}>
            
                <Link style={link} to="/vacinas">
                    <img src={vacina} alt="vacina" style={image}/>
                <li>Vacinas</li>
                </Link>

                <Link style={link} to="/paises">
                <img src={paise} alt="vacina" style={image}/>
                <li>Paises</li>
                </Link>
                
                <Link style={link} to="/dicas">
                <img src={dicas} alt="vacina" style={image}/>
                <li>Dicas</li>
                </Link>

                <Link style={link} to="/hospital">
                <img src={hospital} alt="vacina" style={image}/>
                <li>Hospital</li>
                </Link>

                <Link style={link} to="/quarentena">
                <img src={quarentena} alt="vacina" style={image}/>
                <li>Quarentena</li>
                </Link>
            
            </nav>   
        
    )
}

export default Nav

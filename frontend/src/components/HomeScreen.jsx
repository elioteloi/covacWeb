import React, {useState} from "react";
import { Link } from "react-router-dom";
import covacLogo from "../components/icons/covacLogo.png"
import googleplayLogo from "../components/icons/googleplay.png"
import covacApp from "../components/icons/covacAppLogo.png"
import Modal from "react-modal/lib/components/Modal";


const Home = () => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [modalIsOpen3, setModalIsOpen3] = useState(false)
  const [modalIsOpen4, setModalIsOpen4] = useState(false)
  const [modalIsOpen5, setModalIsOpen5] = useState(false)
  const [modalIsOpen6, setModalIsOpen6] = useState(false)
  const [modalIsOpen7, setModalIsOpen7] = useState(false)


   

    const image = {
        width: 500,
        height: 500,
        position: 'absolute', left: '4%', top: '20%',
        
      }

        const text = {
            textAlign: "center",
            fontSize: 28,
            margin:30,
            color: "black",
            fontFamily: "Verdana",
          }
        
          const textTitle = {
            textAlign: "center",
            fontSize: 60,
            margin: 10,
            color: "black",
            fontFamily: "Verdana",
          }
        
          const alignText = {
            position: 'absolute', left: '50%', top: '1%',
            transform: 'translate(-20%, 50%)',
            borderRadius: 10,
            margin: 0,
          }

          
          const textCovid = {
            position: 'absolute', left: '50%', top: '-25%',
            transform: 'translate(-50%, 50%)',  
          }

          const div = {
            position: 'absolute', left: '50%', top: '80%',
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
       

          const googleplay = {
            width: 250,
            height: 110,
            position: 'absolute', left: '33%', top: '500%',
          }

          const nav = {
            display: "flex",
            justifyContent: "space-around",
            minHeight: "12vh",
            alignItems: 'center',
            fontFamily: "sans-serif",
            background: "white",
            borderRadius: "10px",
            margin: "40px 80px", 
            textAlign: "center",
       
        }

        const link = {
            color: "white",
            flexDirection: "row",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 150,
            height: 60,
            border: "none",
            fontFamily: "Verdana",
            margin: 20,
        }

      const pageLink = {
        color: "black",
        textDecoration: "none",
        fontFamily: "Verdana",
      }

      const buttonPopup = {
        
        color: "white",
            flexDirection: "row",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            border: "none",
            fontFamily: "Verdana",
            position: 'absolute', left: '50%', top: '70%',
            transform: 'translate(-50%, 50%)',  
      }  

      const covacAppLogo = {
        position: 'absolute', left: '50%', top: '60%',
        transform: 'translate(-50%, 50%)',  
        width: 300,
        height: 300,
      }

      const covid = {
        position: 'absolute', left: '50%', top: '100%',
        transform: 'translate(-50%, 50%)',  
       
      }

      const covacapp = {
        position: 'absolute', left: '50%', top: '230%',
        transform: 'translate(-50%, 50%)',  
       
      }
    return (
        <div style={nav}>
            

              <a href="./#sobre" style={pageLink}>Sobre</a>
              
              <a href="./#covid" style={pageLink}>Tipos de covid</a>

              <a href="./#appCovac" style={pageLink}>App</a>

              <Link to="/signin">
              <button style={link}>Sign In</button>
              </Link>

              <Link to="/login">
              <button style={link}>Log In</button>
              </Link>
            
         
        <img src={covacLogo} alt="covacLogo" style={image}/>

        <div style={alignText} id="sobre">
        <h1 style={textTitle}>Covac{"\n"}</h1>
        <h2 style={text}>O covac e um site que foi criado para que você tenha um melhor acesso
        todos os dados sobre o Covid-19,{"\n"} se cadastrando você vai poder usufruir
        de todos os recursos propositos
        Dados sobre as vacinas e quais paises aceitam elas
        Dicas sobre Sintomas e transmissão
        Os numeros de vacinados no Brasil e em todos os Estados,{"\n"}
        Alem de poder enviar um formulario sobre o seu estado caso voce tenha covid-19</h2>
        </div>
        <div id="covid" style={covid}>

        </div>
        <div style={div}>
        
            <h1 style={textCovid}>Variantes do coronavírus</h1>
            <div>
           <button style={button} onClick={()  => setModalIsOpen1(true)}>Alfa</button>
           <Modal isOpen={modalIsOpen1} 
           onRequestClose={()=> setModalIsOpen1(false)}
           >
               <h2 style={textTitle}>Alfa</h2>
               <p style={text}>Originalmente conhecida como B.1.1.7, a variante Alfa foi identificada pela primeira vez em setembro de 2020, no condado de Kent, no Reino Unido. Essa linhagem é altamente transmissível e já foi detectada em mais de 80 países.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen1(false)}>Close</button>
           </Modal>
       
           <button style={button} onClick={()  => setModalIsOpen2(true)}>Beta</button>
           <Modal isOpen={modalIsOpen2} 
           onRequestClose={()=> setModalIsOpen2(false)}
           >
               <h2 style={textTitle}>Beta</h2>
               <p style={text}>Vista pela primeira vez na África do Sul, esta variante tem a mutação E484K, que está ligada ao escape imunológico, e a mutação N501Y, que é suspeita de ajudar outras variantes a serem mais contagiosas.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen2(false)}>Close</button>
           </Modal>
       </div>

       <div >
           <button style={button} onClick={()  => setModalIsOpen3(true)}>Gama</button>
           <Modal isOpen={modalIsOpen3} 
           onRequestClose={()=> setModalIsOpen3(false)}
           >
               <h2 style={textTitle}>Gama</h2>
               <p style={text}>Inicialmente denominada P.1, foi vista pela primeira vez no Brasil, também possui as mutações E484K e N501Y, além de mais de 30 outras mutações. Foi demonstrado que ela escapa dos efeitos do tratamento com anticorpos monoclonais da Lilly, mas não de outro produzido pela Regeneron.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen3(false)}>Close</button>
           </Modal>

           <button style={button} onClick={()  => setModalIsOpen4(true)}>Delta</button>
           <Modal isOpen={modalIsOpen4} 
           onRequestClose={()=> setModalIsOpen4(false)}
           >
               <h2 style={textTitle}>Delta</h2>
               <p style={text}>A variante Delta, originalmente conhecida como B.1.617.2, existe desde o final de 2020, mas nos últimos meses tornou-se rapidamente dominante em muitos países. É responsável por mais de 80% dos casos recém-diagnosticados nos Estados Unidos, de acordo com os Centros de Controle e Prevenção de Doenças (CDC).</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen4(false)}>Close</button>
           </Modal>
       </div>

       <div>
           <button style={button} onClick={()  => setModalIsOpen5(true)}>Ômicron</button>
           <Modal isOpen={modalIsOpen5} 
           onRequestClose={()=> setModalIsOpen5(false)}
           >
               <h2 style={textTitle}>Ômicron</h2>
               <p style={text}>A OMS incluiu, no dia 26 de novembro, essa linhagem na lista de variantes de preocupação. Os casos foram identificados na Botsuana, África do Sul, Hong Kong, Israel, Bélgica, Reino Unido, Alemanha, Itália e Holanda.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen5(false)}>Close</button>
           </Modal>
       
           <button style={button} onClick={()  => setModalIsOpen6(true)}>Mu</button>
           <Modal isOpen={modalIsOpen6} 
           onRequestClose={()=> setModalIsOpen6(false)}
           >
               <h2 style={textTitle}>Mu</h2>
               <p style={text}>A variante Mu foi identificada pela primeira vez na Colômbia em janeiro e, desde então, foi relatada em 39 países, de acordo com o relatório. Embora a prevalência global da variante Mu tenha diminuído e atualmente esteja abaixo de 0,1%, sua prevalência na Colômbia aumentou para 39% e no Equador para 13%</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen6(false)}>Close</button>
           </Modal>
       </div>

       <div>
           <button style={button} onClick={()  => setModalIsOpen7(true)}>Lambda</button>
           <Modal isOpen={modalIsOpen7} 
           onRequestClose={()=> setModalIsOpen7(false)}
           >
               <h2 style={textTitle}>Lambda</h2>
               <p style={text}>Esta variante do coronavírus foi identificada pela primeira vez no Peru em dezembro de 2020. Em 14 de junho de 2021 foi designada como uma variante de interesse.

A variante não é tão preocupante quanto a variante Delta nos Estados Unidos, que tem impulsionado um aumento de casos em todo o país, mas os primeiros estudos sugerem que ela tem mutações que a tornam mais transmissível do que a variante original do coronavírus.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen7(false)}>Close</button>
           </Modal>
       </div>
       </div>

           <div id="appCovac" style={covacapp}>
               <h1 >Você tambem pode baixar o nosso aplicativo no Google Play Store.</h1>
               <img src={covacApp} alt="covacAppLogo" style={covacAppLogo}/>
               <img src={googleplayLogo} alt="googleplay" style={googleplay}/>
           </div>
           
           </div>
            
    )
} 

export default Home; 
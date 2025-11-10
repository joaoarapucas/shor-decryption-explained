import './landing.css'
import {Atom} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function LandingPage(){
  const navigate = useNavigate(); 
  function irParaOutraPagina(){
    console.log("oi boi");
    navigate('/explorar');
  }

  return(
    <body>
      <Atom className="atom-icon"/>
      <h1>Descriptografia Quântica</h1>
      <h3>Descriptografando dados através do algoritmo de Shor</h3>
      <button className='landing-button' onClick={irParaOutraPagina}>Explorar conceitos</button>
    </body>  
  )
}
import './landing.css'
import {Atom} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function LandingPage(){
  const navigate = useNavigate(); 
  function irParaOutraPagina(){
    navigate('/explorar');
  }

  return(

    <div className='landing-container'>
      <div className='centralizar'>
        <Atom className="atom-icon"/>
        <h1>Física Quântica</h1>
        <h3>
          "Se você acha que entende mecânica quântica, é porque não entende mecânica quântica."<br></br>
          -Richard P. Feynnman
        </h3>
        <button className='landing-button' onClick={irParaOutraPagina}>Explorar conceitos</button>
      </div>
    </div>  
  )
}
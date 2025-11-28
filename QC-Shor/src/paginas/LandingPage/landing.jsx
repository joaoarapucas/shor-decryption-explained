import BotaoNavegar from '../../componentes/BotaoNavegar/BotaoNavegar'
import './landing.css'
import {Atom} from 'lucide-react'

export function LandingPage(){
 
  return(

    <div className='landing-container'>
      <div className='centralizar'>
        <Atom className="atom-icon"/>
        <h1>Física Quântica</h1>
        <h3>
          "Se você acha que entende mecânica quântica, é porque não entende mecânica quântica."<br></br>
          -Richard P. Feynnman
        </h3>
        <BotaoNavegar nome={"Iniciar"} endereco={"/explorar"} />
      </div>
    </div>  
  )
}
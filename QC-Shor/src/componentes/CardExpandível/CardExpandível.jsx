import './CardExpandivel.css'
import { Repeat2 } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function CardExpandivel( { icon, titulo, descricao }){
    
    const [aberto, setAberto] = useState(false);

    let expandIcon = aberto ? <ChevronUp size={40}/> : < ChevronDown size={40}/>

    function handleExpandClick(){
        setAberto(!aberto);
    }
    return(
        <div className="card-expandivel">
            <div className='card-row-container' onClick={handleExpandClick} >
                {icon}
                <p className='card-title'>{titulo}</p>
                <button className='card-expand-arrow'> {expandIcon} </button>
            </div>
            <div className={`conteudo-expandivel ${aberto ? "aberto" : ""}`}>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

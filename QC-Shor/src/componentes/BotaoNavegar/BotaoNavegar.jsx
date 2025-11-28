import './BotaoNavegar.css'
import { useNavigate } from 'react-router-dom'

export default function BotaoNavegar( { nome, endereco } ){
    const navigate = useNavigate(); 
    function irParaOutraPagina(){
        navigate(endereco);
    }

    return(
        <button className="botao-navegar" onClick={irParaOutraPagina}>
            {nome}
        </button>
    )
}
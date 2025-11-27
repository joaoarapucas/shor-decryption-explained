import './CardComputacaoQuantica.css'

export default function CardComputacaoQuantica( { titulo, descricao } ){
    return(
        <div className="card-computacao-quantica">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}
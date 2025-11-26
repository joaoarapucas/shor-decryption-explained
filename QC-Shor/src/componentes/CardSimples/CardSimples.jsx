import './CardSimples.css'

export function CardSimples( {titulo, descricao} ){

    return (
        <div className="card-simples">
            <h1>{titulo}</h1>
            <p> {descricao} </p>
        </div>
    );
}

import './CardDefinicao.css'

export default function CardDefinicao( { icon, title } ){

    return(
        <div className="card-descricao">
            {icon}
            <p className="title">{title}</p>
        </div>
    )
}
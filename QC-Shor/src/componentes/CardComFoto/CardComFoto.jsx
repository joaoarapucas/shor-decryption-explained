import './CardComFoto.css'

export function CardComFoto( {img, titulo, subtitulo} ){
    return (
        <div className = "card">
            <img className="avatar" src={img} alt='Max Planck' />
            <p className='card-title'>{titulo}</p>
            <p className='card-subtitle'>{subtitulo}</p>
        </div>
    )
}
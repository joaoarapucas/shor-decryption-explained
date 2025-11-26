import { CardSimples } from "../../../componentes/CardSimples/CardSimples"
import './ClassicoVsQuantico.css'
export function ClassicoVsQuantico() {

    let data = [
        {
            titulo: 'Física clássica',
            descricao: 'A física clássica descreve o mundo macroscópico de forma determinística e contínua.'
        },
        {
            titulo: 'Física quântica',
            descricao: 'A física quântica trabalha com probabilidades e quantizações em nível microscópico. A física quântica introduz conceitos como dualidade, onda-partícula, quantização da energia e incerteza fundamental nas medições.​'
        }
    ]

    return (
        <>
            <div className="card-container">
                {data.map(d => <CardSimples titulo={d.titulo} descricao={d.descricao}/>)}
            </div>
        </>
    )
}

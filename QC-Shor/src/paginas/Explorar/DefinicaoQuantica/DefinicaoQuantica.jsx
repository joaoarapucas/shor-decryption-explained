import CardDefinicao from '../../../componentes/CardDefinicao/CardDefinicao'
import './DefinicaoQuantica.css'
import { Atom } from 'lucide-react'
import { Lightbulb } from 'lucide-react'
import { Wifi } from 'lucide-react'


export default function DefinicaoQuantica(){

    let iconSize = 96;
    let dados = [
        {
            icon: <Atom size={iconSize}/>,
            title: "Partículas"
        },
        {
            icon: <Lightbulb size={iconSize}/>,
            title: "Fótons"
        },
        {
            icon: <Wifi size={iconSize}/>,
            title: "Ondas"
        },
    ]

    return (
        <div className="definicao-container">
            <p className='resumo'>
                Física Quântica é o ramo da física que estuda o comportamento das partículas em 
                escalas muito pequenas, como átomos e partículas subatômicas, onde as leis da física 
                clássica não se aplicam. Ela surgiu no início do século 20 para explicar fenômenos que 
                a física tradicional não conseguia, como a radiação do corpo negro e o efeito fotoelétrico, 
                com contribuições fundamentais de cientistas como Max Planck, Albert Einstein, Niels Bohr, 
                Werner Heisenberg e Erwin Schrödinger.
            </p>
            <div className='elementos-container'>
                {dados.map(i => (<CardDefinicao icon={i.icon} title={i.title} />))}
            </div>
        </div>
    )
}
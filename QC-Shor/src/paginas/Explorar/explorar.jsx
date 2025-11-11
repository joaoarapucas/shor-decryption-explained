import { useState } from "react";
import { MenuLateral } from "../../componentes/MenuLateral/MenuLateral"
import './explorar.css'
import { PrincipaisCientistas } from "./PrincipaisCientistas/PrincipaisCientistas";

export function Explorar(){
    const topicos = [
        "O que é física quântica?",
        "Clássico vs Quântico",
        "Principais cientistas",
        "Princípios fundamentais",
        "Computação quântica",
        "Simulação",
        "Descriptografia quântica",
        "Referências",
    ];
    const [topicoSelecionado, setTopicoSelecionado] = useState(topicos[0]);

    let conteudo = <></>;

    switch(topicoSelecionado){
        default:
            conteudo = <>! ! ! Em construção ! ! !</>
            break;
        case "Principais cientistas":
            conteudo = <PrincipaisCientistas />
            break;
    }

    return (
    <div className="pagina-inteira">
        <MenuLateral onSelecionarTopico={setTopicoSelecionado} options={topicos}/>
        <h1 className="title">{topicoSelecionado}</h1>
        <div className="conteudo-container">
            {conteudo}
        </div>
    </div>
    )
};
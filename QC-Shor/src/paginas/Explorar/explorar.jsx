import { useState } from "react";
import { MenuLateral } from "../../componentes/MenuLateral/MenuLateral"
import './explorar.css'
import { PrincipaisCientistas } from "./PrincipaisCientistas/PrincipaisCientistas";
import { PrincipiosFundamentais } from "./PrincipiosFundamentais/PrincipiosFundamentais";
import { ClassicoVsQuantico } from "./ClassicoVsQuantico/ClassicoVsQuantico";
import DefinicaoQuantica from "./DefinicaoQuantica/DefinicaoQuantica";
import ComputacaoQuantica from "./ComputacaoQuantica/ComputacaoQuantica";
import Referencias from "./Referencias/Referencias";
import DescriptografiaQuantica from "./DescriptografiaQuantica/DescriptografiaQuantica";

export function Explorar(){
    const topicos = [
        "O que é física quântica?",
        "Clássico vs Quântico",
        "Principais cientistas",
        "Princípios fundamentais",
        "Computação quântica",
        "Descriptografia quântica",
        "Referências",
    ];
    const [topicoSelecionado, setTopicoSelecionado] = useState(topicos[0]);

    let conteudo = <></>;

    switch(topicoSelecionado){
        default:
            conteudo = <div>
                            <p>! ! ! Em construção ! ! !</p>
                            <img src="https://www.pngkey.com/png/full/397-3975496_under-construction-png-website-under-construction-icon.png" width={500}></img>
                       </div>
            break;
        case "O que é física quântica?":
            conteudo = <DefinicaoQuantica />
            break;
        case "Clássico vs Quântico":
            conteudo = <ClassicoVsQuantico />
            break;
        case "Principais cientistas":
            conteudo = <PrincipaisCientistas />
            break;
        case "Princípios fundamentais":
            conteudo = <PrincipiosFundamentais />
            break;
        case "Computação quântica":
            conteudo = <ComputacaoQuantica />
            break;
        case "Descriptografia quântica":
            conteudo = <DescriptografiaQuantica />
            break;
        case "Referências":
            conteudo = <Referencias />
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
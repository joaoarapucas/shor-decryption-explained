import { useState } from "react";
import { MenuLateral } from "../../componentes/MenuLateral/MenuLateral"
import './explorar.css'
import { PrincipaisCientistas } from "./PrincipaisCientistas/PrincipaisCientistas";
import { PrincipiosFundamentais } from "./PrincipiosFundamentais/PrincipiosFundamentais";
import { ClassicoVsQuantico } from "./ClassicoVsQuantico/ClassicoVsQuantico";
import DefinicaoQuantica from "./DefinicaoQuantica/DefinicaoQuantica";

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
            conteudo = <div>
                            <p>! ! ! Em construção ! ! !</p>
                            <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230423%2Foriginal%2Fpngtree-3d-safety-helmet-for-construction-site-work-png-image_9084703.png&sp=1764126803Te3b58f65c8c80f040312d3e11f76479902111ce397fc9bd39d13de0e2236db79" width={500}></img>
                       </div>
            break;
        case "O que é física quântica?":
            conteudo = <DefinicaoQuantica />
            break;
        case "Principais cientistas":
            conteudo = <PrincipaisCientistas />
            break;
        case "Princípios fundamentais":
            conteudo = <PrincipiosFundamentais />
            break;
        case "Clássico vs Quântico":
            conteudo = <ClassicoVsQuantico />
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
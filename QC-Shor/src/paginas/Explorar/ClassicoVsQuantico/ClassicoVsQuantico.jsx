import { CardSimples } from "../../../componentes/CardSimples/CardSimples"
import './ClassicoVsQuantico.css'
export function ClassicoVsQuantico() {

    let data = [
        {
            titulo: 'Física clássica',
            descricao: <>
                <p>A física clássica descreve o mundo de forma determinística e contínua. Nela, os sistemas possuem estados bem definidos: uma partícula tem posição e velocidade precisas ao mesmo tempo. Assim, conhecendo-se o estado inicial, é possível, em princípio, prever exatamente a evolução futura do sistema.</p>
                <p>As grandezas físicas, como posição, velocidade e energia, variam de modo contínuo, admitindo qualquer valor dentro de um intervalo. Além disso, os efeitos da observação podem ser desprezados: medir um sistema não altera seu comportamento de forma fundamental. Em outras palavras, a medição é passiva, e não interfere significativamente no estado do sistema.</p>
            </>
        },
        {
            titulo: 'Física quântica',
            descricao: <>
                <p>A física quântica trabalha com probabilidades e quantizações em nível microscópico. O estado de um sistema não é descrito por valores fixos de posição e momento simultaneamente, mas sim por uma função de onda, que codifica as probabilidades dos possíveis resultados de uma medição.</p>
                <p>Antes da observação, o sistema encontra-se em uma superposição de estados (por exemplo, um elétron pode estar em vários níveis de energia ao mesmo tempo). Ao realizar uma medição, a função de onda colapsa para um resultado específico, introduzindo um limite fundamental ao determinismo clássico.</p>
                <p>Entre suas diferenças principais em relação à física clássica estão:</p>
                <ul>
                    <li>Quantização: energia, momento angular e outros observáveis assumem valores discretos, e não contínuos.</li>
                    <li>Dualidade onda-partícula: tanto a luz quanto a matéria podem se comportar como ondas (interferência e difração) ou como partículas (fótons e elétrons detectados pontualmente).</li>
                    <li>Papel do observador: o ato de medir altera o estado do sistema, refletindo-se no Princípio da Incerteza de Heisenberg e em experimentos mentais como o gato de Schrödinger.</li>
                    
                </ul>
            </>
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

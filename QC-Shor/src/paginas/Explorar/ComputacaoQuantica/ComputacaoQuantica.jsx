import CardComputacaoQuantica from "../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica";
import CardResumoCQ from "../../../componentes/CardResumoCQ/CardResumoCQ";
import './ComputacaoQuantica.css'

export default function ComputacaoQuantica(){

    let dados = [
        {
            titulo: 'Qubis e superposição',
            descricao: 'Um qubit é a unidade básica da computação quântica, podendo representar simultaneamente estados 0 e 1 graças à superposição. Diferente do bit clássico que está em 0 ou 1, qubits permitem maior complexidade e capacidade de processamento exponencial conforme a quantidade aumenta. Qubits podem ser implementados em partículas quânticas como fótons, elétrons ou circuitos supercondutores.​'
        },
        {
            titulo: 'Portas lógicas quânticas',
            descricao: <>
                            Portas lógicas quânticas operam sobre qubits para manipular estados quânticos. Exemplos incluem:
                            <ul>
                                <li>Porta Hadamard: cria superposição.</li>
                                <li>Porta CNOT: faz uma inversão condicional (controle).</li>
                                <li>Porta Pauli-X: similar a NOT clássica, inverte o estado do qubit.  </li>
                                
                            </ul>
                       </>
        },
        {
            titulo: 'Processamento paralelo e probabilístico',
            descricao: 'Computadores quânticos utilizam a superposição para avaliar múltiplas possibilidades simultaneamente, aumentando a eficiência em problemas complexos. Isso permite soluções mais rápidas para certas tarefas, como busca em bases de dados ou fatoração de números grandes, devido à capacidade de explorar vários caminhos em paralelo.'
        },
        {
            titulo: 'Empresas na área',
            descricao: <>
                            Há diversas empresas fazendo pesquisas na área. As líderes incluem:
                            <ul>
                                <li>IBM</li>
                                <li>Google</li>
                                <li>D-Wave</li>
                                <li>QuEra Computing</li>
                            </ul>
                            Podemos dar destaque para a IBM, que permite que você programe em 
                            computadores quânticos através da nuvem, e possuem também uma API 
                            para simular circuitos quânticos!
                       </>
        },
    ]

    return(
        <>
            <CardResumoCQ descricao={<>A computação quântica é uma área que aplica os princípios da 
                                    mecânica quântica na ciência da computação para processar informações
                                    de uma forma fundamentalmente diferente da computação clássica. Ela
                                    utiliza unidades chamadas qubits, que, ao contrário dos bits clássicos,
                                    podem existir em superposição de estados (0 e 1 ao mesmo tempo) e podem
                                    estar emaranhados, permitindo processamento paralelo e probabilístico. <br/><br/>
                                    Ela utiliza das propriedades da física quântica, como superposição e emaranhamento,
                                    para criar computadores que processam informações de maneira diferente dos computadores
                                    clássicos. Ela promete resolver problemas que são intratáveis para máquinas tradicionais,
                                    acelerando cálculos massivos e complexos simultaneamente.​</>} />
            <div className="definicoes-CQ-container">
                {dados.map(i => (<CardComputacaoQuantica titulo={i.titulo} descricao={i.descricao}/>))}
            </div>
        </>
    )
}
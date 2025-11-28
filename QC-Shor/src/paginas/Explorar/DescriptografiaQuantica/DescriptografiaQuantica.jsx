import { useEffect, useState, useRef } from 'react'
import CardComputacaoQuantica from '../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica'
import '../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica.css'
import { criptografar } from '../../../utils/Criptografar'
import './DescriptografiaQuantica.css'
import QuantumVsClassicCanvas from '../../../utils/CanvasSuperposicao'
import Duplafenda from '../../../utils/ExperimentoDuplaFenda'
import DoubleSlit from '../../../utils/ExperimentoDuplaFenda'

export default function DescriptografiaQuantica(){

    const [msg, setMsg] = useState("");
    const [msgCifrada, setMsgCifrada] = useState("o");
    const textareaRef = useRef(null);
    const textareaCifradaRef = useRef(null);
    
    const resizeBoth = () => {
        const original = textareaRef.current;
        const cifrada  = textareaCifradaRef.current;

        if (!original || !cifrada) return;

        // Reseta antes de calcular
        original.style.height = "auto";
        cifrada.style.height = "auto";

        // pega a maior altura necessária
        const altura = Math.max(
            original.scrollHeight,
            cifrada.scrollHeight
        );

        // aplica nas duas
        original.style.height = altura + "px";
        cifrada.style.height = altura + "px";
    };

    const handleCipherChange = (e) => {
        setMsg(e.target.value);
    };



    useEffect(()=>{
        if(!msg) {
            setMsgCifrada("");
            return;
        }

        setMsgCifrada(criptografar(msg))
    }, [msg])

    useEffect(() => {
        resizeBoth();
    }, [msg, msgCifrada]);

    let dados = [
        {
            titulo: 'Criptografia atual',
            descricao: <>
                            <p>Quando trocamos arquivos, mensagens, ou qualquer tipo de informação em dispositivos eletrônicos, não queremos que um terceiro veja o que não deveria. Na segurança da informação, chamamos isso de confidencialidade: o pilar que garante o sigilo dos dados, assegurando que apenas indivíduos ou sistemas autorizados possam acessar o seu conteúdo.</p>
                            <p>Quando conectado em uma rede, porém, é um processo trivial verificar os pacotes que estão sendo enviados: programas que chamamos de sniffers podem capturar esses pacotes, e então bastaria ler o conteúdo dentro!</p>
                            
                            <figure>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png"></img>
                                <figcaption>Wireshark, um dos <i>sniffers</i> mais utilizados no mercado.</figcaption>
                            </figure>
                            <p>E como resolver esse problema? O método que utilizamos é a criptografia: usando um algoritmo difícil de se descriptografar, basta fazer com que o pacote se torne ilegível. Assim, mesmo que seja capturado, ninguém conseguiria ler o conteúdo. Por exemplo, suponha que Alice deseja enviar a mensagem “hello, world” para Bob. Sem criptografia, o pacote contendo a mensagem poderia ser simplesmente capturado e lido. Porém, ao criptografar (neste exemplo usarei o algoritmo AES), o pacote se torna algo como <code>7d40ff7bde5611c86b2921abac1407e5</code>. Caso um atacante deseje capturar essa mensagem, podemos apenas desejar boa sorte, pois levaria um tempo absurdo para ser descriptografado e propriamente lido!</p>
                            
                            <p>Você pode usar o campo abaixo para criptografar uma mensagem sua! A criptografia será feita usando o algoritmo AES.</p>
                            <div className='container-criptografia'>
                                <div>
                                    <p>Mensagem original</p>
                                    <textarea ref={textareaRef} value={msg} onChange={handleCipherChange} placeholder='Digite aqui...'/>
                                </div>
                                <div>
                                    <p>Mensagem criptografada</p>
                                    <textarea ref={textareaCifradaRef} value={msgCifrada} readOnly placeholder='Mensagem cifrada...'/>
                                </div>
                            </div>
                            <p>Em geral, os algoritmos de criptografia se baseiam em problemas matemáticos que são difíceis de serem resolvidos, mesmo para computadores. Alguns problemas que podemos citar são o de fatorar números muito grandes ou o problema do logaritmo discreto. Existem técnicas que podem solucionar esses problemas, porém o tempo para calcular é realmente muito grande, tornando-se inviável descriptografar. </p>
                            <p>Note que esse foi apenas um dos algoritmos de criptografia, e que há diversos outros conceitos importantes envolvidos que não serão mencionados neste site, pois fogem do escopo! Mostraremos apenas o necessário para demonstrar a importância do algoritmo de Shor para a descriptografia de informações.</p>
                       </>
        },
        {
            titulo: 'Algoritmo RSA',
            descricao: <>
                            <li>Apresentação</li>
                            <p>Com o básico de criptografia explicado, podemos falar sobre o algoritmo RSA para criptografia. Ele é um dos algoritmos mais usados no mundo. Você pode confirmar isso verificando no seu navegador: clique no ícone de cadeado na esquerda da URL da página, verifique o certificado e procure algo como “algoritmo de assinatura” ou “algoritmo de chave pública”; muito provavelmente ele usará o RSA. Esse site que você está lendo usa o RSA! Outros exemplos famosos incluem a Google, a Amazon e até a Microsoft.</p>
                            <li>Explicação</li>
                            <p>O algoritmo RSA utiliza a criptografia por chaves assimétricas. Isso significa que haverão duas chaves para criptografar e descriptografar: uma chave pública, e uma chave privada. Vamos utilizar os personagens Alice e Bob novamente para explicar melhor. Suponha que Alice deseja enviar uma mensagem confidencial para Bob. Para isso, Bob passará sua chave pública: uma chave que qualquer um pode saber. Alice usará a chave pública de Bob para criptografar a mensagem. Ótimo! Agora que a mensagem está criptografada, ela envia a mensagem para Bob. Por fim, Bob usa sua chave privada, uma chave que apenas ele pode conhecer, para descriptografar a mensagem. Fim!</p>
                            <li>Princípios</li>
                            <p>Mencionamos antes que esse tipo de algoritmo se baseia em problemas matemáticos. O RSA utiliza o problema da fatoração de números muito grandes. Para explicar, podemos fazer uma analogia a tintas: é trivial misturar cores, mas separar a mistura das cores é uma tarefa complexa. Ou seja, é fácil multiplicar números (utilizamos os números primos), mas descobrir quais números primos multiplicam o valor final é uma tarefa difícil. Para colocar em perspectiva, fatorar os valores atuais padrão na indústria, mesmo com supercomputadores clássicos, levaria mais tempo que a idade do universo. De fato, inviável! Mas apenas no mundo clássico. O matemático Peter Shor conseguiu montar um algoritmo quântico que consegue fatorar esses valores de forma veloz, quebrando o RSA.</p>
                       </>,
        },
        {
            titulo: 'Algoritmo de Shor',
            descricao: <>
                            <li>Introdução</li>
                            <p>Finalmente, podemos introduzir o algoritmo de Shor. Proposto em 1994 por Peter Shor, este algoritmo consegue resolver o problema da fatoração de forma muito eficiente.</p>
                            <li>Explicação</li>
                            <p>A explicação de como funciona será bem simplificada, pois envolve bastante teoria dos números e matemática que não é trivial; o foco será voltado para o funcionamento do algoritmo, evitando as fórmulas e cálculos numéricos. Mesmo assim, ainda veremos pelo menos um pouco de matemática.</p>
                            <p>Para conseguir fatorar os números, nós temos o que chamamos de função. Eu vou escrever esse texto assumindo que saibam pelo menos o conteúdo do ensino médio, mas de forma resumida uma função é uma conta matemática do tipo “me diga um valor, que te direi o resultado”. Para descriptografar, o algoritmo exige que descubramos qual o período de uma função. Período é um conceito muito importante para o algoritmo de Shor: ele diz quantos passos levamos até que os valores de uma função comecem a se repetir.</p>
                            <p>Sabendo o período de uma função, conseguimos calcular o máximo divisor comum entre o número que estamos fatorando e o um número baseado no período. E tudo isso é possível com computadores clássicos. Problema resolvido! Na verdade não. Como mencionado, calcular é custoso: isso cresce exponencialmente. O algoritmo de Shor é interessante pois consegue encontrar esse período de forma que cresça polinomialmente, e não exponencialmente. Isso significa que o algoritmo de Shor funciona bem melhor para valores maiores (como os valores usados na indústria para cifras).</p>
                            <p>Vamos ver agora como o quântico se relaciona com tudo isso. Ao aplicar a porta Hadamard no circuito, conseguimos ter uma superposição nos qubits. Com muitos qubits, isso significa que teremos muitos valores, todos ao mesmo tempo. Agora aplicamos uma conta para calcular o período. Como estão em superposição, esta conta será aplicada em todos os estados, e então teremos “calculado” o período para todos os valores possíveis simultaneamente! Mas isso enquanto não observarmos ou medirmos o valor. Neste caso, o valor colapsaria e teríamos apenas um valor. </p>
                            <div className="canvas">
                                <QuantumVsClassicCanvas />
                            </div>
                            <p>E como isso é útil? Através de ondas e interferência. As ondas de todos os estados da superposição interferem entre si, reforçando umas às outras, ou destruindo. Isso implica que muitas ondas vão apontar para o valor que desejamos, o período, e muitas vão estar espalhadas aleatoriamente. As que apontam para o valor que desejamos vão se reforçar, fazendo com que o estado delas seja mais provável, enquanto as diferentes fazem o contrário. Usando o que chamamos de Transformada de Fourier Quântica, pode-se usar a interferência para que o valor relacionado ao período seja mais provável de ser medido. Por fim, basta medirmos para colapsar a superposição e ver qual o resultado - como é probabilístico, ainda pode estar errado, mas a interferência faz com que a probabilidade de estar certo fique maior.</p>
                            <figure>
                                <iframe src="https://editor.p5js.org/jonasbroder/full/-YbYeoym5"></iframe>
                                <figcaption>Experimento da dupla fenda, que mostra visualmente a interferência das ondas.</figcaption>
                            </figure>
                            <li>Limitações</li>
                            <p>Atualmente, o motivo de o mundo não estar acabando pelo algoritmo de Shor se deve a limitações físicas. Os computadores quânticos atuais possuem uma quantidade muito baixa de qubits lógicos efetivos, e mesmo assim ainda há muito ruído atrapalhando na medição dos valores. O algoritmo de Shor já foi demonstrado, porém para números muito baixos, servindo como prova de conceito.</p>
                       </>
        }
    ]

    return(
        <div className='container-explicacao-shor'>
            {dados.map(i => (
                <CardComputacaoQuantica titulo={i.titulo} descricao={i.descricao} />
            ))}
        </div>
    )
}
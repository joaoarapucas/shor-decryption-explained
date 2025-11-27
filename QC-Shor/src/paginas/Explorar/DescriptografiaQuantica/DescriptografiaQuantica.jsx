import CardComputacaoQuantica from '../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica'
import '../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica.css'
import './DescriptografiaQuantica.css'
export default function DescriptografiaQuantica(){

    let dados = [
        {
            titulo: 'Criptografia atual',
            descricao: <>
                            <p>Quando trocamos arquivos, mensagens, ou qualquer tipo de informação em dispositivos eletrônicos, não queremos que um terceiro veja o que não deveria. Na segurança da informação, chamamos isso de confidencialidade: o pilar que garante o sigilo dos dados, assegurando que apenas indivíduos ou sistemas autorizados possam acessar o seu conteúdo.</p>
                            <p>Quando conectado em uma rede, porém, é um processo trivial verificar os pacotes que estão sendo enviados: programas que chamamos de sniffers podem capturar esses pacotes, e então bastaria ler o conteúdo dentro!</p>
                            <p>E como resolver esse problema? O método que utilizamos é a criptografia: usando um algoritmo difícil de se descriptografar, basta fazer com que o pacote se torne ilegível. Assim, mesmo que seja capturado, ninguém conseguiria ler o conteúdo. Por exemplo, suponha que Alice deseja enviar a mensagem “hello, world” para Bob. Sem criptografia, o pacote contendo a mensagem poderia ser simplesmente capturado e lido. Porém, ao criptografar (neste exemplo usarei o algoritmo AES), o pacote se torna algo como 7d40ff7bde5611c86b2921abac1407e5. Caso um atacante deseje capturar essa mensagem, podemos apenas desejar boa sorte, pois levaria um tempo absurdo para ser descriptografado e propriamente lido!</p>
                            <p>Em geral, os algoritmos de criptografia se baseiam em problemas matemáticos que são difíceis de serem resolvidos, mesmo para computadores. Alguns problemas que podemos citar são o de fatorar números muito grandes ou o problema do logaritmo discreto. Existem técnicas que podem solucionar esses problemas, porém o tempo para calcular é realmente muito grande, se tornando realmente inviável descriptografar. </p>
                            <p>Note que esse foi apenas um dos algoritmos de criptografia, e que há diversos outros conceitos importantes envolvidos que não serão mencionados neste site, pois fogem do escopo! Mostraremos apenas o necessário para demonstrar a importância do algoritmo de Shor para a descriptografia de informações.</p>
                       </>
        },
        {
            titulo: 'Algoritmo RSA',
            descricao: <>
                            <li>Apresentação do algoritmo</li>
                            <p>Com o básico de criptografia explicado, podemos falar sobre o algoritmo RSA para criptografia. Ele é um dos algoritmos mais usados no mundo. Você pode confirmar isso verificando no seu navegador: clique no ícone de cadeado na esquerda da URL da página, verifique o certificado e procure algo como “algoritmo de assinatura” ou “algoritmo de chave pública”; muito provavelmente ele usará o RSA. Esse site que você está lendo usa o RSA! Outros exemplos famosos incluem a Google, a Amazon e até a Microsoft.</p>
                            <li>Explicação do algoritmo</li>
                            <p>O algoritmo RSA utiliza a criptografia por chaves assimétricas. Isso significa que haverão duas chaves para criptografar e descriptografar: uma chave pública, e uma chave privada. Vamos utilizar os personagens Alice e Bob novamente para explicar melhor. Suponha que Alice deseja enviar uma mensagem confidencial para Bob. Para isso, Bob passará sua chave pública: uma chave que qualquer um pode saber. Alice usará a chave pública de Bob para criptografar a mensagem. Ótimo! Agora que a mensagem está criptografada, ela envia a mensagem para Bob. Por fim, Bob usa sua chave privada, uma chave que apenas ele pode conhecer, para descriptografar a mensagem. Fim!</p>
                            <li>Princípios do algortimo</li>
                            <p>Mencionamos antes que esse tipo de algoritmo se baseia em problemas matemáticos. O RSA utiliza o problema da fatoração de números muito grandes. Para explicar, podemos fazer uma analogia a tintas: é trivial misturar cores, mas separar a mistura das cores é uma tarefa complexa. Ou seja, é fácil multiplicar números (utilizamos os números primos), mas descobrir quais números primos multiplicam o valor final é uma tarefa difícil. Para colocar em perspectiva, fatorar os valores atuais padrão na indústria, mesmo com supercomputadores clássicos, levaria mais tempo que a idade do universo. De fato, inviável! Mas apenas no mundo clássico. O matemático Peter Shor conseguiu montar um algoritmo quântico que consegue fatorar esses valores de forma veloz, quebrando o RSA.</p>
                       </>,
        },
        {
            titulo: 'Algoritmo de Shor',
            descricao: 'por fim acabamos !!!'
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
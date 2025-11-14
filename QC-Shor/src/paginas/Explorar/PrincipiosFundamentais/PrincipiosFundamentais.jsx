import { CardExpandivel } from "../../../componentes/CardExpandível/CardExpandível";

import { Repeat } from 'lucide-react';
import { MoveDiagonal } from 'lucide-react';
import { Cat } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';
import { Shuffle } from 'lucide-react';

export function PrincipiosFundamentais(){
    
    let sizeIcon = 40;
 
    let dadosCards = [
        {
            icon: <Repeat size={sizeIcon}/>,
            titulo: 'Spin',
            descricao: 'O spin é o momento angular intrínseco das partículas e pode assumir valores como "spin para cima" ou "spin para baixo". Ele está relacionado ao magnetismo das partículas e é fundamental na descrição de férmions e bósons. Em computação quântica, o spin é explorado para criar e manipular qubits, a unidade básica de informação quântica.​'
        },
        {
            icon: <MoveDiagonal size={sizeIcon}/>,
            titulo: 'Emaranhamento quântico',
            descricao: 'É o fenômeno onde partículas que estiveram em interação ficam conectadas de forma que o estado de uma afeta instantaneamente o estado da outra, mesmo a grandes distâncias. Isso desafia conceitos clássicos de localidade e é uma base essencial para a computação quântica e comunicação quântica, permitindo transmissões seguras e processamento eficiente de informações.​'
        },
        {
            icon: <Cat size={sizeIcon}/>,
            titulo: 'Gato de Schrödinger',
            descricao: 'Proposto por Erwin Schrödinger em 1935, é um experimento mental que ilustra a superposição quântica. Um gato dentro de uma caixa pode estar simultaneamente vivo e morto até que a caixa seja aberta e o estado observado. O experimento mostra que a observação interfere na realidade quântica, destacando a natureza probabilística e não determinística dos estados das partículas.'
        },
        {
            icon: <CircleQuestionMark size={sizeIcon}/>,
            titulo: 'Princípio da incerteza',
            descricao: 'Esse princípio estabelece que é impossível medir simultaneamente a posição e a velocidade (momento) de uma partícula com precisão absoluta. Quanto mais precisamente se mede a posição, menos precisa é a medição da velocidade, e vice-versa. Isso ocorre porque, no mundo quântico, a própria ação de medir interfere nas partículas devido à sua natureza ondulatória e discreta.​'
        },
        {
            icon: <Shuffle size={sizeIcon}/>,
            titulo: 'Superposição quântica',
            descricao: 'A superposição é a capacidade das partículas estarem em vários estados ao mesmo tempo até que sejam medidas. Um exemplo simples é um interruptor que pode estar ligado e desligado simultaneamente no domínio quântico. Na computação quântica, isso permite que qubits representem 0, 1 ou ambos simultaneamente, aumentando muito o poder de processamento.​​'
        },
        
    ]

    return (
        <>
            {dadosCards.map(d => <CardExpandivel icon={d.icon} titulo={d.titulo} descricao={d.descricao} />)}
        </>
    )
}
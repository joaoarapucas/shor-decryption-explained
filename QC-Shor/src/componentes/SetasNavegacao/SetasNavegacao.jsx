import { ArrowLeft, ArrowRight } from 'lucide-react';
import './SetasNavegacao.css'

/**
 * Componente de navegação entre tópicos.
 *
 * @param {object} props
 * @param {string[]} props.topicos A lista completa de tópicos.
 * @param {string} props.topicoAtual O tópico atualmente selecionado.
 * @param {function} props.onSelecionarTopico A função para atualizar o tópico.
 */
export function NavegacaoSetas({ topicos, topicoAtual, onSelecionarTopico }) {
    const indiceAtual = topicos.indexOf(topicoAtual);
    const isPrimeiro = indiceAtual === 0;
    const isUltimo = indiceAtual === topicos.length - 1;

    const navegarAnterior = () => {
        if (!isPrimeiro) {
            const topicoAnterior = topicos[indiceAtual - 1];
            onSelecionarTopico(topicoAnterior);
        }
    };

    const navegarProximo = () => {
        if (!isUltimo) {
            const topicoProximo = topicos[indiceAtual + 1];
            onSelecionarTopico(topicoProximo);
        }
    };

    return (
        <div className="setas">
            
            {/*esquerda*/}
            {!isPrimeiro &&
            <button
                onClick={navegarAnterior}
                className='seta'
                aria-label="Tópico Anterior"
            >
                <ArrowLeft size={24} />
            </button>
            }
            {/*direita*/}
            {!isUltimo &&
                <button
                    onClick={navegarProximo}
                    className='seta'
                    aria-label="Próximo Tópico"
                >
                    <ArrowRight size={24} />
                </button>
            }
        </div>
    );
}
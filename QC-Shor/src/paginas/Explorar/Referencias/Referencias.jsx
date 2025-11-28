import './Referencias.css'

export default function Referencias(){

    let refLivros = [
        'SCHEINERMAN, Edward. Matemática Discreta: Uma Introdução',
        'TANENBAUM, Andrew S. Computer Networks (Redes de Computadores). 4th Edition',
        'STALLINGS, William. Cryptography and Network Security: Principles and Practice. 4th Edition',
        'YANOFSKY, Noson S. e MANNUCCI, Mirco A. Quantum Computing for Computer Scientists',
        'CORMEN, Thomas H.; LEISERSON, Charles E.; RIVEST, Ronald L.; STEIN, Clifford. Introduction to Algorithms',
    ]

    let refLinks = [
        'https://www.ufmg.br/espacodoconhecimento/o-nascimento-da-fisica-quantica/',
        'https://www.scielo.br/j/ea/a/YbnySRbBmTSgCc9nNyWCWPL/?format=html&lang=pt',
        'https://unicamp.br/~chibeni/textosdidaticos/fisquantica.pdf',
        'https://www.ibm.com/br-pt/think/topics/quantum-computing',
        'https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-computacao-quantica.htm',
        'https://www.alura.com.br/empresas/artigos/computacao-quantica',
        'https://www.cisoadvisor.com.br/estudo-chip-asic-pode-quebrar-a-criptografia-rsa-de-2-048-bits/',
        'https://mundoeducacao.uol.com.br/fisica/fisica-quantica.htm',
        'https://www.todamateria.com.br/fisica-quantica/',
        'https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-fisica-quantica.htm',
        'https://www.ufmg.br/espacodoconhecimento/o-nascimento-da-fisica-quantica/',
        'https://unicamp.br/~chibeni/textosdidaticos/fisquantica.pdf',
        'https://www.scielo.br/j/ea/a/YbnySRbBmTSgCc9nNyWCWPL/?format=html&lang=pt',
        'https://mundoeducacao.uol.com.br/quimica/principio-incerteza-heisenberg.htm',
        'https://cref.if.ufrgs.br/?contact-pergunta=fisica-quantica-e-spin',
        'https://revistapesquisa.fapesp.br/ligacoes-perdidas/',
        'https://pt.khanacademy.org/science/physics/quantum-physics/quantum-numbers-and-orbitals/a/the-quantum-mechanical-model-of-the-atom',
    ]

    return(
        <div className="ref-container">
            <ul>
                {refLivros.map(r => (
                    <li>
                        {r}
                    </li>
                ))}

                {refLinks.map(r => (<li>
                                    <a href={r}>
                                        {r}
                                    </a>
                                </li>))}
            </ul>
        </div>
    )
}
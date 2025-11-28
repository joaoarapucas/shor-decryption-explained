import './Introducao.css'
import '../../LandingPage/landing.css'
import CardComputacaoQuantica from '../../../componentes/CardComputacaoQuantica/CardComputacaoQuantica'
import CardResumoCQ from '../../../componentes/CardResumoCQ/CardResumoCQ'
import BotaoNavegar from '../../../componentes/BotaoNavegar/BotaoNavegar'


export default function Introducao(){
    return(
        <div className='container-intro'>
            <CardComputacaoQuantica titulo={"Objetivo"} descricao = {
                <>
                    <p>Esse site tem como objetivo explicar de maneira introdutória e simplificada alguns conceitos de física quântica, a fim de explicar o algoritmo de Shor. Não faz parte do escopo deste projeto explicar com detalhes os algoritmos ou os cálculos por trás da física quântica: escrevemos de forma que uma pessoa sem estudo na área de exatas conseguiria entender o conteúdo, ou pelo menos saberia o que pesquisar para entender melhor.</p>
                </>
                } />
            <CardComputacaoQuantica titulo={"Metodologia"} descricao = {
                <>
                    <p>Para escrever os textos deste site, primeiro pesquisamos em sites ou notícias introdutórias sobre cada tópico, a fim de ter uma visão geral do tema. Após compreendido o conceito, buscamos aprofundamento em livros mais técnicos e extensos.</p>
                </>
                } />
            <CardResumoCQ descricao ={"Com escopo e propósito definidos, basta clicar no botão abaixo para ler mais sobre física quântica e computação."} /> 
        </div>
    )
}
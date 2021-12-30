import React from 'react';
import './style.css';
import { Box } from '../../components';

function Sobre() {
  return (
    <Box>
        <h1>Its Tail Time!</h1>
        <br></br>
        <div className='containerSobre'>
          <img src={require('../../assets/gex-rez.png')} width="300" height="500" alt="Gex e Rez"/>
          <div>
            <p>
              Gex foi criado por Lyle Hall em 1993, logo depois que ele se juntou à Crystal Dynamics, 
              e inicialmente seguiu um dublê de filme chamado Gecko X antes de ser refeito a conselho 
              do programador líder Gregg Tavares.
            </p>
            <br></br>
            <p>
              O personagem principal do jogo foi
              criado para ser uma espécie de “mascote” para o 3DO, que pudesse rivalizar com outros personagens 
              de consoles populares, como Sonic e Mario. Gex protagonizou um game em 1994 de plataforma 
              com bastante competência. Tanto é que, após o fracasso do console, o personagem ganhou versões 
              para PC, Playstation e Sega Saturn, garantindo ainda mais fama para o personagem.
            </p>
            <br></br>
            <p>
              A versão do 3DO conseguiu vender mais de um milhão de cópias, tornando-se um dos 
              jogos mais vendidos do console. Duas sequências foram lançadas posteriormente, 
              intituladas Gex: Enter the Gecko e Gex 3: Deep Cover Gecko, com Gex se tornando o 
              mascote da Crystal Dynamics por um curto período de tempo.
            </p>
            <br></br>
            <p>
            Gex é uma lagartixa apaixonada em assistir televisão, o que faz dele um alvo para o ser cibernético 
            "Imperador Rez". O imperador Rez está determinado a derrubar a dimensão da mídia, 
            o "mundo" da televisão.
            </p>
          </div>
        </div>
    </Box>
  );
}

export default Sobre;

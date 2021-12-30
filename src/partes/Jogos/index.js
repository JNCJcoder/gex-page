import React from 'react';
import { Box, GameView } from '../../components';
import './style.css';

function Jogos() {
  return (
    <Box>
      <h1>Jogos</h1>
      <div className='container'>
        <GameView 
          nome="Gex"
          plataformas="3DO, PlayStation, Sega Saturn, PC"
          imagem={require('../../assets/Gex1-box.jpg')}
          trailerLink="https://www.youtube.com/watch?v=FuzHNUGt9sM"
        />
        <GameView 
          nome="Gex: Enter The Gecko"
          plataformas="PC, PlayStation, Nintendo 64, GBC"
          imagem={require('../../assets/Gex2-box.jpg')}
          trailerLink="https://www.youtube.com/watch?v=9BKAa2qExPY"
        />
        <GameView 
          nome="Gex: Deep Cover Gecko"
          plataformas="PlayStation, Nintendo 64, GBC"
          imagem={require('../../assets/Gex3-box.jpg')}
          trailerLink="https://www.youtube.com/watch?v=bszwOwVLUvs"
        />
      </div>
    </Box>
  );
}

export default Jogos;

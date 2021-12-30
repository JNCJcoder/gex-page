import React from 'react';
import { Box } from '../../components';
import './style.css';

function Historia() {
  return (
    <Box>
        <h1>Historia</h1>
        <br></br>
        <div className='gexHistoria'>
          <p>
            Gex é uma lagartixa muito esperta que mora com sua família em Maui, Havaí.
            Ele passa os dias com os amigos, surfando, tocando ukulele e dando festas de poi na praia
            com as lagartixas locais. Após a morte de seu pai, ele começa a assistir a uma grande quantidade 
            de TV para superar a tragédia. Ele eventualmente herda mais de vinte bilhões de dólares de 
            seu falecido tio-avô e compra a maior televisão do mundo. Ele tem seu próprio refúgio em uma ilha, chamado GEXCave, localizado no sul do Pacífico.
            <br></br>
            <br></br>
            Na novel, Rez afirma que ele é o pai de Gex e se tornou do jeito que é após a 
            explosão, se isso é verdade ou não, não está claro, embora Rez faça a mesma afirmação em Gex 2, 
            mas com uma história diferente (dizendo que ele caiu em um monte de sucata ao tentar conseguir uma TV gratuita).
          </p>
          <img src={require('../../assets/Gex.webp')} width="200" height="200" alt="Gex segurando um Controle"/>
        </div>
    </Box>
  );
}

export default Historia;

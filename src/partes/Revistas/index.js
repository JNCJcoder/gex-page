import React from 'react';
import { Box } from '../../components';
import './style.css';

function Revistas() {
  return (
    <Box>
        <h1>Revistas</h1>
        <p>Gex já foi capa de algumas revistas aqui no brasil:</p>
        <br></br>
        <div className='containerRevistas'>
            <img src={require('../../assets/Revista-gameX.jpg')} width="200" height="250" alt="Revista GameX"/>
            <img src={require('../../assets/Revista-progames.jpg')} width="200" height="250" alt="Revista GameX"/>
            <img src={require('../../assets/Revista-videogamenews.jpg')} width="200" height="250" alt="Revista GameX"/>
      </div>
      <br></br>
    </Box>
  );
}

export default Revistas;

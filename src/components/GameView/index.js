import React from 'react';
import './style.css';

const GameView = ({ nome, plataformas, imagem, trailerLink }) =>
{
    return (
        <div>
            <a href={trailerLink}>
                <img className='Imagem' src={imagem} width="155" height="155" alt={nome}/>
            </a>
            <h1 className='Nome'>{nome}</h1>
            <p className='Consoles'>Consoles: {plataformas}</p>
        </div>
    );
}

export default GameView;
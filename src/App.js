import React from 'react';
import { Logo, Sobre, Historia, Jogos, Revistas, Footer } from './partes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Sobre />
      <Historia />
      <Jogos />
      <Revistas />
      <Footer />
    </div>
  );
}

export default App;

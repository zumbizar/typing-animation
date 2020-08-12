import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';
function App() {
  return (
    <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">

                   <strong className="logo">eSportsNow</strong> 

                  <div className="tudonospan">

                    <Typing>
                      <span>Aqui você encontra: </span>
                      <br></br>
                      <br></br>


                      <span>Jogos do seu time favorito! </span>
                      <Typing.Delay ms={1000} />

                      <Typing.Backspace count={28} />
                      <Typing.Delay ms={1000} />

                      <span> Não perca nenhum jogo</span>
                      <Typing.Delay ms={1000} />

                      <Typing.Backspace count={21} />
                      <Typing.Delay ms={1000} />

                      <span>Não fique fora dessa, venha para <strong> eSportsNow! </strong></span>


                    </Typing>
                </div>
                      
                </div>
                <div className="buttons-container">
                  <a href="#" className="jogosgravados">
                      Jogos Gravados
                  </a>

                  <a href="#" className="jogosaovivo">
                      Jogos Ao Vivo
                  </a>
                </div>

                <span className="total-players">
                    Total de 41 players online ♥
                </span>
            </div>
        </div>
        

        
     
  );
}

export default App;

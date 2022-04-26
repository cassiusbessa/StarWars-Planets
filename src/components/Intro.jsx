import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import IntroButton from '../style/IntroButton';
import introStarWars from '../assets/audio/introStarWars.mp3';
import babyYoda from '../assets/imgs/babyYoda2.jpg';

const introTime = 40000;
function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(introStarWars);
  const navigate = useNavigate();

  const starPage = () => {
    console.log('starWars');
    setIsPlaying(true);
    play();
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        navigate('/table');
      }, introTime);
    }
  }, [isPlaying, navigate]);

  useEffect(() => () => stop(), [stop]);

  return (
    <div>

      { !isPlaying ? (
        <IntroButton>
          <h1>Star Wars Planets</h1>

          <button
            type="button"
            onClick={ starPage }
          >
            Clique Aqui para Começar Aventura
            <img src={ babyYoda } alt="Baby Yoda" />
          </button>
        </IntroButton>
      ) : (

        <div className="intro-container">
          <section className="star-wars">

            <div className="crawl">

              <div className="title">
                <p>Episode I</p>
                <h1>O Desafio da Tabela de Planetas</h1>
              </div>
              <p>Durante o aprendizado de front-end, a grande escola de programação Trybe me enviou um grande desafio: Receber os dados de vários planetas da série Star Wars e organizá-los em forma de uma grande tabela, exibindo-os em uma tela.</p>
              <p>Durante a batalha, Foi necessário receber os dados de uma api, fazer vários filtros, filtros de filtros, e outros filtros. Além disso você poderá ordenar a tabela por vários critérios. Tudo isso controlando o ciclo de vida para não quebrar a aplicação.</p>
              <p>Após bugs e mais bugs, filtros e mais filtros, a tabela está funcionando (com alguns poucos bugs), eu ainda inventei de fazer essa intro que vocês estão vendo agora. Aproveitem!</p>
            </div>
          </section>
          <button className="skip" type="button" onClick={ () => navigate('/table') }>Apertar os Cintos</button>

        </div>

      ) }
    </div>

  );
}

export default Intro;

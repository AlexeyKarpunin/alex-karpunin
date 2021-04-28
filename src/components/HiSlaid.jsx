import React, { useEffect, useState } from 'react';
import '../css/showButton.css';

export default function HiSlaid ({showContentFunc}) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [portfolioStatus, setPortfolioStatus] = useState(false);


  
  function HendelHover () {setHoverStatus(true)}
  function hendelOut () {setHoverStatus(false)}
  function showPortfolio () {
    setPortfolioStatus(true);
    showContentFunc(true);
    setTimeout( () => sessionStorage.setItem('preview', 'true'), 500 )
  }

  return (
    <section className={`section hi-slaider ${portfolioStatus ? '' : 'hi-slaider_active' }`}>
      <div className="hi-slaider__info">
        <h2 
          className={`hi-slaider__header ${ hoverStatus ? 'hi-slaider__header_active' : ''}`} 
        >
          Сайт-портфолио
        </h2>
        <h1 
          className={`hi-slaider__header ${ hoverStatus ? 'hi-slaider__header_active' : ''}`}>
          Алексей Карпунин
        </h1>
        <h2 
          className={`hi-slaider__header ${ hoverStatus ? 'hi-slaider__header_active' : ''}`}>
          Frontend developer
        </h2>

        <div 
          onMouseOver={HendelHover}
          onMouseOut={hendelOut}
          className="btnflip" 
          href="#!"
        >
          <span onClick={showPortfolio}  className="btnflip-item btnflip__front">Show</span>
          <span onClick={showPortfolio}  className="btnflip-item btnflip__center"></span>
          <span onClick={showPortfolio}  className="btnflip-item btnflip__back">Portfolio</span>
        </div>
      </div>
    </section>
  )
}
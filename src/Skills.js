import React from 'react';
import PopPupLouder from './components/PopPupLouder';
import { Link } from 'react-router-dom';

import js from './img/js.png';
import react from './img/react.png';
import nextjs from './img/nextjs.png';
import redux from './img/redux.png';
import WP from './img/WP.png';
import html from './img/html.png';
import css from './img/css.png';


export default function Skills () {
  return (
    <section className="section section-skills">
      <Link to='/'><a className='back-arrow'></a></Link>
      <div className="skills-list">
        <img className="skills-list__item" src={js} alt="skill" style={{width:'200px', height:'170px'}} />
        <img className="skills-list__item" src={react} alt="skill" style={{width:'200px'}} />
        <img className="skills-list__item" src={nextjs} alt="skill" style={{width:'200px'}} />
        <img className="skills-list__item" src={redux} alt="skill" style={{width:'190px', height:'200px'}} />
        <img className="skills-list__item" src={WP} alt="skill" style={{width:'350px'}} />
        <img className="skills-list__item" src={html} alt="skill" style={{width:'200px'}} />
        <img className="skills-list__item" src={css} alt="skill" style={{width:'280px'}} />
        {/* <img className="skills-list__item" src="" alt="skill" /> */}
      </div>
      <PopPupLouder color={'#FFF0F5'} />
    </section>
  )
}
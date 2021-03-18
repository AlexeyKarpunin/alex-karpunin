import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const slaiderContent = [
  {
    title: 'Обо мне',
    background: '#FFF5EE',
    link: '/about-me',
  }, 
  {
    title: 'Скиллы',
    background: '#FFF0F5',
    link: '/skills',
  }, 
  {
    title: 'Портфолио',
    background: '#F0FFF0',
    link: '/portfolio',
  }, 
  {
    title: 'Контакты',
    background: '#FFE4B5',
    link: '/contacts',
  }];

export default function Content () {
  const [activeSlaide, setActiveSlaide] = useState(0);
  const [slaidPosition, setPosition] = useState(50);
  const [width, setWidth] = useState(1920);

  useEffect ( () => {
    function seeWidth () {setWidth(window.innerWidth);}
    setWidth(window.innerWidth);
    window.addEventListener('resize', seeWidth);
    return () => window.removeEventListener('resize', seeWidth);
  }, []);

  function next () {
    if (activeSlaide === slaiderContent.length - 1) return;
    setActiveSlaide( (prev) => prev += 1)
    setPosition( (prev) => prev -= 25);
  };

  function prev () {
    if (activeSlaide === 0) return;
    setActiveSlaide( (prev) => prev -= 1)
    setPosition( (prev) => prev += 25)
  };

  function teleport (e, position) {
    if (position === activeSlaide) return;
    const movePosition = activeSlaide - position; 
    setActiveSlaide(position);
    if (Math.sign(movePosition)) {
      const calc = movePosition * 25;
      setPosition(prev => prev += calc);
    } else {
      const calc = movePosition * (-1) * 25
      setPosition( prev => prev -= calc);
    }
  }

  function preventDefaultFunc (e, index) {
    if (index !== activeSlaide) {
      e.preventDefault();
    }
  }
  

  return (
    <Section 
      back={slaiderContent[activeSlaide].background} 
      className="section section-content"
    >
      <div onClick={prev} className='slaider__btn slaider__btn-left'></div>

      <div className="slaider">
        <Slider position={slaidPosition} width={width}>

          {slaiderContent.map( (item, index) => {
            return (
              <Link onClick={(e) => preventDefaultFunc(e, index) }  key={index} to={item.link}>
                <Slide 
                  width={activeSlaide === index ? width * 50 / 100 : width * 25 / 100}
                  className={`slaider__item ${activeSlaide === index ? 'slaider__item_active' : 'slaider__item_shadow'}`}
                >
                  {item.title}
                </Slide>
              </Link>
            )
          })}
        </Slider>
        <div className='slaider-inline-btns'>
          {slaiderContent.map( (item, index) => {
            return (
              <div 
                className={`slaider-inline__item ${activeSlaide === index ? 'slaider-inline__item_active' : ''}`} 
                onClick={(e) => teleport(e, index)}
                key={index}>
              </div>
            )
          })}
        </div>
      </div>
      <div onClick={next} className='slaider__btn slaider__btn-right'></div>
    </Section>
  )
}

const Slide = styled.div`
  width: ${props => props.width}px;
`;

const Section = styled.section`
  background-color: ${props => props.back};
  transition: 1s;
`;

const Slider = styled.div`
  display: flex;
  position: relative;
  transition: 1s;
  left: ${props => props.position}%;
  margin-left: -${props => props.width * 50 / 100 / 2}px;
`;
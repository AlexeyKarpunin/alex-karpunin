import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function PopPupLoader ({color}) {

  const [radius, setRadius] = useState(0);
  const [reloder, setReloder] = useState(true);

  useEffect( () => {
    const intrerval = setInterval(function () {
      setRadius( prev => prev += 1);
    }, 5);

    setTimeout(() => {
      clearInterval(intrerval)
    }, 1000);

  }, [])

  useEffect( () => {
    window.addEventListener('unload', function() {
      sessionStorage.setItem('reloder', false)
    });

    if (sessionStorage.getItem('reloder') === 'false') {
      console.log(typeof sessionStorage.getItem('reloder'))
      setReloder(false)
    }

    return () => {
      sessionStorage.setItem('reloder', true)
    }
  }, [])

  

  return (
    <>
      { reloder ? 
        <PopUp 
          className='pop-up-preloder'
          radius={radius}
          color={color}
        /> : null}  
    </>
  )
}

const PopUp = styled.div`
  background: radial-gradient(circle, rgba(255,255,255,0) ${props => props.radius}%, ${props => props.color} 10%);
  display: ${ props => props.radius >= 100 ? 'none' : 'block'};
`;
import React from 'react';
import HiSlaider from './components/HiSlaid';
import Content from './components/Contents';

export default function MainPage () {

  return (
    <section className='section section-for-hi-slaider'>
      {sessionStorage.getItem('preview') ? null : <HiSlaider />}
      <Content />
    </section>
  )
}
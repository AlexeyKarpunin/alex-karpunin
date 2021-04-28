import React, { useEffect, useState } from 'react';
import HiSlaider from './components/HiSlaid';
import Content from './components/Contents';

export default function MainPage () {

  const [showContent, setShowContent] = useState(false);

  useEffect( () => {
    if (sessionStorage.getItem('preview')) {setShowContent(true);} 
  }, [])

  return (
    <section className='section section-for-hi-slaider'>
      {sessionStorage.getItem('preview') ? null : <HiSlaider showContentFunc={setShowContent} />}
      {showContent ?  <Content /> : null}
    </section>
  )
}


// function MainPageContent () {
//   return (
//     <>
     
//     </>
//   )
// }
import React from 'react';
import PopPupLouder from './components/PopPupLouder'
import { Link } from 'react-router-dom';

export default function Contacts() {
  return (
    <section className='section section-relative'>
      
      <Link to='/'><a className='back-arrow'></a></Link>
      <h1>Способы связаться со мной</h1>
      <div className='info'>
        <div className='info__item'>
          <div className='info__container'>
            <div className='info__social-img info__social-img_mail'></div>
            <p>Email: mr.offlain@mail.ru</p>
          </div>
        </div>
        <div className='info__item'>
          <div className='info__container'>
            <div className='info__social-img info__social-img_phone'></div>
            <p>+79171919744</p>
          </div>
        </div>
        <div className='info__item'>
          <div className='info__container'>
            <div className='info__social-img info__social-img_social'></div>
            <ul style={{padding: '7px 0 0 5px'}}>
              <li>vk: <a href='https://vk.com/karpunin1997' target="_blank" rel="noreferrer">https://vk.com/karpunin1997</a></li>
              <li>inst: <a href='https://www.instagram.com/lokiloka/' target="_blank" rel="noreferrer">https://www.instagram.com/lokiloka/</a> </li>
            </ul>
          </div>
        </div>
        <div className='info__item'>
          <div className='info__container'>
            <div className='info__social-img info__social-img_hh'></div>
            <p>hh.ru: {' '}
              <a href='https://astrakhan.hh.ru/resume/fb5230e3ff08b322dc0039ed1f494e55354631' target="_blank" rel="noreferrer">
                Моё резюме
              </a>
            </p> 
          </div>
        </div>
      </div>
     
      <PopPupLouder color={'#FFE4B5'} />
    </section>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import PopPupLouder from './components/PopPupLouder'


function AboutMe() {

  return (
    <section className='section section-relative'>
      <Link to='/'><a className='back-arrow'></a></Link>
      <h1 className='section__header'>Обо Мне</h1>
      <div className='content'>
        <div className='content__box'>
          <h2 className='content__box--header'>Немного о себе</h2>
          <p className='content__box--text'>
            Привет! Меня зовут Алексей Карпунин. Мне {`${new Date().getFullYear() - 1997} `}
            года, я занимаюсь web-разработкой, созданием адаптивных сайтов с нуля, добавленем новых элементов
            или функционала на сайт. Меня не пугают новые технологии, языки, всегда готов разобраться в чем-то интересном
            и применить это на практике.
          </p>
        </div>
        <div className='content__box'>
          <h2 className='content__box--header'>Образование</h2>
          <ul className='content__box__table'>
            <li className='content__box__table--item content__box__table_header'>Coursera:</li>
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/verify/Z4ZCTD8BSFZS' target="_blank" rel="noreferrer">
                Основы HTML and CSS
              </a>
            </li>
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/verify/3LU33AUGKQ3F' target="_blank" rel="noreferrer">
                Тонкости верстки
              </a>
            </li> 
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/verify/MXLC8L3828VA' target="_blank" rel="noreferrer">
                JavaScript, часть 1: основы и функции
              </a>
            </li>
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/verify/J8X296SVFTTZ' target="_blank" rel="noreferrer">
                JavaScript, часть 2: прототипы и асинхронность
              </a>
            </li>
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/verify/BFAZW2WU6TM2' target="_blank" rel="noreferrer">
                Coursera финальный проект
              </a>
            </li>
            <li className='content__box__table--item'>
              <a href='https://www.coursera.org/account/accomplishments/specialization/DV38ZUUNUU3X' target="_blank" rel="noreferrer">
                MIPT & Yandex & Coursera Разработка интерфейсов: вёрстка и JavaScript
              </a>
            </li>
          </ul>
        </div>
        <div className='content__box'>
          <h2 className='content__box--header'>Почему я занялся IT</h2>
          <p className='content__box--text'>
            Меня всегда интересовала тема создания игр, сайтов, приложений и в 2020 году я начал изучать web. Первое время
            это было просто хобби, но со временем я стал понимать, что хочу этим заниматься на профессиональном 
            уровне. Сейчас, ни один день не проходит без программирования и помимо того, это очень интересно, IT
            дает возможность развиваться как личность.
          </p>
        </div>
      </div>
      <PopPupLouder color={'#FFF5EE'} />
    </section>
  );
}

export default AboutMe;





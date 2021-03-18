import React from 'react';
import PopPupLouder from './components/PopPupLouder';
import jqSlaider from './img/jquery-color-slaider.png';
import table from './img/table.png';
import memo from './img/memo.png'
import { Link } from 'react-router-dom';

export default function Portfolio () {
  return (
    <section className="section">
      <Link to='/'><a className='back-arrow'></a></Link>
      <h1>Мои проекты</h1>
      <div className="portfolio-container">
        <ul className="projects">
          <li className="projects__item">
            <h2>Jquery color slaider</h2>
            <img src={jqSlaider} alt='photo of the project'></img>
            <p className="projects__discription">
              Описание: Было интересно посмотреть как такие слайдеры создаются на jquery
            </p>
            <a className="project__link" href="https://alexeykarpunin.github.io/jquery-color-slaider/" target="_blank" rel="noreferrer">
              Ссылка на проект: Jquery color slaider.
            </a>
            <br />
            <a className="project__link" href="https://github.com/AlexeyKarpunin/jquery-color-slaider" target="_blank" rel="noreferrer">
              Ссылка на код: Jquery color slaider.
            </a>
          </li>

          <li className="projects__item">
            <h2>Таблица</h2>
            <img src={table} alt='photo of the project'></img>
            <p className="projects__discription">
              Описание: Было тестовым задание в компанию. Задача заключалось в том, что бы
              сделать таблицу на 50 строк, используя react, и у столбцы была возможность сортировки.
              Так же у пользователя должна быть возможность создавать новые листы
              (так же в этом проекте я использовал styled-components).
            </p>
            <a className="project__link" href="https://alexeykarpunin.github.io/Crazy-Panda-table-task/" target="_blank" rel="noreferrer">
              Ссылка на проект: Таблица.
            </a>
            <br/>
            <a className="project__link" href="https://github.com/AlexeyKarpunin/Crazy-Panda-table-task" target="_blank" rel="noreferrer">
              Ссылка на код: Таблица.
            </a>
          </li>
          <li className="projects__item">
            <h2>MemojiGame</h2>
            <img src={memo} alt='photo of the project'></img>
            <p className="projects__discription">
              Описание: Финальный проект пройденных мной курсов на портале Coursera,
              Переписанный с чистого js на react и собранный при помощи webpack.
            </p>
            <a className="project__link" href="https://alexeykarpunin.github.io/memoji-game/" target="_blank" rel="noreferrer" >
              Ссылка на проект: Мемоджи.
            </a>
            <br/>
            <a className="project__link" href="https://github.com/AlexeyKarpunin/memoji-game" target="_blank" rel="noreferrer" >
              Ссылка на код: Мемоджи.
            </a>
          </li>
        </ul>
      </div>
      <PopPupLouder color={'#F0FFF0'} />
    </section>)
}
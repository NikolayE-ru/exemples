import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ClassNamingExample.style.scss';

const ClassNamingExample: FC = () => {
    return (
        <div className={'example-container'}>
            <div className={'example-header'}>
                <h2>Как именовать классы в большом проекте</h2>
                <p>
                    Общий контекст: Это продолжение темы БЭМ. Главный принцип — «не мешайте друг другу». Классы должны
                    быть как уникальные ID для компонентов. Если вы работаете в команде, вы должны быть уверены, что ваш
                    новый класс .card не сломает карточку в другом месте сайта, написанную другим разработчиком. БЭМ и
                    подобные методологии — это и есть ответ на этот вызов.
                </p>
            </div>

            <div className={'example-content'}>
                <div className={'feature-section'}>
                    <h3>Практические принципы именования (расширяем БЭМ)</h3>

                    <div className={'feature-block'}>
                        <h4>Блок = Независимый компонент</h4>
                        <p>Называйте его по функции, а не по внешнему виду:</p>

                        <div className={'comparison-container'}>
                            <div className={'comparison-item'}>
                                <h5>Плохо:</h5>
                                <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                                    {`<div class="red-list">
  <div class="big-red-text">Заголовок</div>
  <ul class="square-bullets">
    <li>Элемент списка</li>
  </ul>
</div>`}
                                </SyntaxHighlighter>
                            </div>

                            <div className={'comparison-item'}>
                                <h5>Хорошо:</h5>
                                <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                                    {`<div class="news-feed">
  <div class="news-feed__title">Заголовок</div>
  <ul class="news-feed__list">
    <li class="news-feed__item">Элемент списка</li>
  </ul>
</div>`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Элемент = Часть блока</h4>
                        <p>Называйте его по роли, а не по стилю:</p>

                        <div className={'comparison-container'}>
                            <div className={'comparison-item'}>
                                <h5>Плохо:</h5>
                                <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                                    {`<div class="card">
  <div class="big-red-text">Заголовок карточки</div>
  <div class="blue-border-box">Содержимое</div>
  <div class="small-gray-button">Кнопка</div>
</div>`}
                                </SyntaxHighlighter>
                            </div>

                            <div className={'comparison-item'}>
                                <h5>Хорошо:</h5>
                                <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                                    {`<div class="card">
  <div class="card__title">Заголовок карточки</div>
  <div class="card__content">Содержимое</div>
  <div class="card__button">Кнопка</div>
</div>`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Модификатор = Состояние или вариант</h4>
                        <p>Используйте для визуальных изменений, состояний, размеров:</p>

                        <div className={'comparison-container'}>
                            <div className={'comparison-item'}>
                                <h5>Примеры модификаторов:</h5>
                                <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                                    {`// Визуальные изменения
.button--theme-dark { background: #333; }
.button--theme-light { background: #fff; }

// Состояния
.button--disabled { opacity: 0.5; cursor: not-allowed; }
.button--active { transform: scale(1.05); }

// Размеры
.button--size-s { padding: 5px 10px; }
.button--size-m { padding: 8px 15px; }
.button--size-l { padding: 12px 20px; }`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Соглашение для модификаторов элементов</h4>
                        <p>Если нужно изменить элемент, часто используют форму блок__элемент--модификатор:</p>

                        <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                            {`<ul class="menu">
  <li class="menu__item">Обычный пункт</li>
  <li class="menu__item menu__item--active">Активный пункт</li>
  <li class="menu__item menu__item--disabled">Неактивный пункт</li>
</ul>`}
                        </SyntaxHighlighter>

                        <div className={'demo-menu'}>
                            <ul className={'menu'}>
                                <li className={'menu__item'}>Обычный пункт</li>
                                <li className={'menu__item menu__item--active'}>Активный пункт</li>
                                <li className={'menu__item menu__item--disabled'}>Неактивный пункт</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassNamingExample;

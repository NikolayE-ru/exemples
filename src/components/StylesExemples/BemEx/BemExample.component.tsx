import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './BemExample.style.scss';

const BemExample: FC = () => {
    return (
        <div className={'example-container'}>
            <div className={'example-header'}>
                <h2>БЭМ на практике: блок, элемент, модификатор</h2>
                <p>
                    Общий контекст: БЭМ — это система именования, которая отвечает на вопрос «Как назвать класс, чтобы
                    через полгода было понятно, что этот div делает?». Она делит интерфейс на независимые кусочки:
                </p>
                <ul>
                    <li>
                        <strong>Блок</strong> — самостоятельный компонент (например, search-form).
                    </li>
                    <li>
                        <strong>Элемент</strong> — неотделимая часть блока (например, search-form__input).
                    </li>
                    <li>
                        <strong>Модификатор</strong> — свойство или состояние (например, search-form--disabled).
                    </li>
                </ul>
                <p>
                    Смысл: Из таких имен сразу ясно, кто есть кто и как они связаны. Это сильно упрощает поддержку и не
                    дает стилям случайно «пересечься» и сломаться.
                </p>
            </div>

            <div className={'example-content'}>
                <div className={'feature-section'}>
                    <h3>Вложенность блоков ≠ вложенность элементов</h3>

                    <div className={'feature-block'}>
                        <h4>Правильно: Блоки могут содержать другие блоки</h4>

                        <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                            {`<!-- Правильно: Блоки могут содержать другие блоки -->
<div class="header">
  <div class="search-form"> <!-- Блок внутри блока -->
    <input class="search-form__input"> <!-- Элемент блока search-form -->
    <button class="button"> <!-- Самостоятельный блок button -->
      <span class="button__text">Искать</span>
    </button>
  </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Модификаторы элементов (часто забывают!)</h4>

                        <SyntaxHighlighter language='html' style={coy} className='code-highlighter'>
                            {`// У элемента тоже могут быть модификаторы 
<button class="button">
  <span class="button__text button__text_uppercase">Текст</span>
</button>`}
                        </SyntaxHighlighter>

                        <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                            {`.button__text {
  font-size: 16px;

  &_uppercase {
    text-transform: uppercase;
  }
}`}
                        </SyntaxHighlighter>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Главное преимущество БЭМ - Нулевая специфичность (почти)!</h4>

                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`/* БЭМ: почти всегда один класс */
.block__elem { }          /* специфичность: 0,0,1,0 */
.block__elem_mod { }      /* специфичность: 0,0,1,0 */

/* Без БЭМ: растет специфичность */
.block .elem { }          /* 0,0,2,0 */
.block .elem.mod { }      /* 0,0,3,0 */`}
                        </SyntaxHighlighter>
                    </div>

                    <div className={'feature-block'}>
                        <h4>Иерархия от НАИМЕНЬШЕЙ к НАИБОЛЬШЕЙ специфичности</h4>
                        <span>1. Универсальный селектор (специфичность: 0,0,0,0) </span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`* { color: black; } /* 0-0-0-0 */`}
                        </SyntaxHighlighter>
                        <span>2. Селекторы элементов и псевдоэлементов (специфичность: 0,0,0,1)</span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`div { color: red; }          /* 0-0-0-1 */
p::before { content: "!"; }  /* 0-0-0-2 */`}
                        </SyntaxHighlighter>
                        <span>3. Классы, атрибуты и псевдоклассы (специфичность: 0,0,1,0)</span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`.button { color: blue; }               /* 0-0-1-0 */
[type="text"] { color: green; }        /* 0-0-1-0 */
:hover { color: purple; }              /* 0-0-1-0 */
:not(.button) { color: gray; }         /* 0-0-1-0 (считается только .button)*/`}
                        </SyntaxHighlighter>
                        <span>4. ID селекторы (специфичность: 0,1,0,0)</span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`#header { color: orange; }  /* 0-1-0-0 */`}
                        </SyntaxHighlighter>
                        <span>5. Инлайн-стили (специфичность: 1,0,0,0)</span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`<div style="color: pink;">Текст</div>  /* 1-0-0-0 */ `}
                        </SyntaxHighlighter>
                        <span>6. !important (переопределяет всё)</span>
                        <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
                            {`.text { color: red !important;   /* Переопределяет ВСЕ остальные */`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BemExample;

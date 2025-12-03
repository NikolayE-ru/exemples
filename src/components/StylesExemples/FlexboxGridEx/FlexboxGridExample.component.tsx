import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './FlexboxGridExample.style.scss';

const FlexboxGridExample: FC = () => {
  return (
    <div className={'example-container'}>
      <div className={'example-header'}>
        <h2>Flexbox и CSS Grid</h2>
        <p>
          Flexbox и CSS Grid - две современные технологии CSS для создания гибких и адаптивных макетов. Они дополняют друг друга и решают разные задачи.
        </p>
      </div>

      <div className={'example-content'}>
        <div className={'feature-section'}>
          <h3>Flexbox (Flexible Box Layout)</h3>

          <div className={'feature-block'}>
            <h4>Назначение</h4>
            <p>Одномерная система компоновки для распределения элементов вдоль одной оси (горизонтальной или вертикальной).</p>
          </div>

          <div className={'feature-block'}>
            <h4>Свойства по умолчанию</h4>
            <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.flex-container {
  display: flex; /* активирует flexbox */

  /* Значения по умолчанию: */
  flex-direction: row; /* направление основной оси */
  flex-wrap: nowrap; /* запрет переноса на новую строку */
  justify-content: flex-start; /* выравнивание по основной оси */
  align-items: stretch; /* выравнивание по поперечной оси */
  align-content: stretch; /* выравнивание многострочных контейнеров */
}

.flex-item {
  /* Значения по умолчанию: */
  flex-grow: 0; /* не растягивается */
  flex-shrink: 1; /* может сжиматься */
  flex-basis: auto; /* базовый размер зависит от содержимого */
}`}
            </SyntaxHighlighter>
          </div>

          <div className={'feature-block'}>
            <h4>Основные свойства Flexbox</h4>
            <p>Для контейнера:</p>
            <ul>
              <li><span className='highlight'>display</span>: flex или <span className='highlight'>display</span>: inline-flex</li>
              <li><span className='highlight'>flex-direction</span>: направление основной оси (row, column, row-reverse, column-reverse)</li>
              <li><span className='highlight'>flex-wrap</span>: перенос элементов (nowrap, wrap, wrap-reverse)</li>
              <li><span className='highlight'>justify-content</span>: выравнивание по основной оси</li>
              <li><span className='highlight'>align-items</span>: выравнивание по поперечной оси</li>
              <li><span className='highlight'>align-content</span>: выравнивание строк в многострочном контейнере</li>
            </ul>

            <p>Для элементов:</p>
            <ul>
              <li><span className='highlight'>flex-grow</span>: коэффициент роста элемента</li>
              <li><span className='highlight'>flex-shrink</span>: коэффициент сжатия элемента</li>
              <li><span className='highlight'>flex-basis</span>: начальный размер элемента</li>
              <li><span className='highlight'>flex</span>: сокращенная запись (grow shrink basis)</li>
              <li><span className='highlight'>align-self</span>: индивидуальное выравнивание элемента</li>
            </ul>
          </div>

          <div className={'feature-block'}>
            <h4>Пример Flexbox</h4>
            <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 300px;
  border-radius: 8px;
}

.flex-item {
  flex: 1 1 200px; /* grow shrink basis */
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  border-radius: 5px;
  text-align: center;
  min-height: 100px;
}

.flex-item:nth-child(2) {
  background-color: #50c878;
  align-self: flex-start; /* индивидуальное выравнивание */
}

.flex-item:nth-child(3) {
  background-color: #ff6b6b;
  flex-grow: 2; /* растет в 2 раза быстрее */
}`}
            </SyntaxHighlighter>

            <div className="flex-container">
              <div className="flex-item">Элемент 1</div>
              <div className="flex-item">Элемент 2 (выровнен отдельно)</div>
              <div className="flex-item">Элемент 3 (растет быстрее)</div>
              <div className="flex-item">Элемент 4</div>
              <div className="flex-item">Элемент 5</div>
            </div>
          </div>

          <h3>CSS Grid</h3>

          <div className={'feature-block'}>
            <h4>Назначение</h4>
            <p>Двумерная система компоновки для создания сложных сеток и макетов страниц.</p>
          </div>

          <div className={'feature-block'}>
            <h4>Основные свойства CSS Grid</h4>
            <p>Для контейнера:</p>
            <ul>
              <li><span className='highlight'>display</span>: grid или <span className='highlight'>display</span>: inline-grid</li>
              <li><span className='highlight'>grid-template-columns</span>: определение столбцов сетки</li>
              <li><span className='highlight'>grid-template-rows</span>: определение строк сетки</li>
              <li><span className='highlight'>grid-template-areas</span>: именованные области сетки</li>
              <li><span className='highlight'>grid-gap</span>: расстояние между элементами сетки</li>
              <li><span className='highlight'>justify-items</span>: выравнивание элементов по горизонтали</li>
              <li><span className='highlight'>align-items</span>: выравнивание элементов по вертикали</li>
            </ul>

            <p>Для элементов:</p>
            <ul>
              <li><span className='highlight'>grid-column-start</span>/<span className='highlight'>grid-column-end</span>: начальная/конечная позиция столбца</li>
              <li><span className='highlight'>grid-row-start</span>/<span className='highlight'>grid-row-end</span>: начальная/конечная позиция строки</li>
              <li><span className='highlight'>grid-column</span>: сокращенная запись для столбцов</li>
              <li><span className='highlight'>grid-row</span>: сокращенная запись для строк</li>
              <li><span className='highlight'>grid-area</span>: имя или позиция области сетки</li>
              <li><span className='highlight'>justify-self</span>: индивидуальное выравнивание по горизонтали</li>
              <li><span className='highlight'>align-self</span>: индивидуальное выравнивание по вертикали</li>
            </ul>
          </div>

          <div className={'feature-block'}>
            <h4>Пример CSS Grid</h4>
            <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 15px;
  min-height: 300px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.grid-item {
  padding: 20px;
  color: white;
  border-radius: 5px;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header {
  grid-area: header;
  background-color: #4a90e2;
}

.sidebar {
  grid-area: sidebar;
  background-color: #50c878;
}

.main {
  grid-area: main;
  background-color: #ff6b6b;
}

.aside {
  grid-area: aside;
  background-color: #ffa500;
}

.footer {
  grid-area: footer;
  background-color: #9370db;
}`}
            </SyntaxHighlighter>

            <div className="grid-container">
              <div className="grid-item header">Header</div>
              <div className="grid-item sidebar">Sidebar</div>
              <div className="grid-item main">Main</div>
              <div className="grid-item aside">Aside</div>
              <div className="grid-item footer">Footer</div>
            </div>
          </div>

          <div className={'feature-block'}>
            <h4>Сокращенное написание для grid-area: span / span</h4>

            <div className={'feature-block'}>
              <h5>1. Синтаксис</h5>
              <p>grid-area: &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;</p>
            </div>

            <div className={'feature-block'}>
              <h5>2. Ключевое слово span</h5>
              <p>Указывает, сколько строк или столбцов должен занимать элемент.</p>
            </div>

            <div className={'feature-block'}>
              <h5>3. Примеры использования</h5>
              <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.grid-item-1 {
  grid-area: 1 / 1 / span 2 / span 2; /* начинается в первой строке, первом столбце и занимает 2 строки и 2 столбца */
}

.grid-item-2 {
  grid-area: span 3 / span 1; /* занимает 3 строки и 1 столбец (автоматическое размещение) */
}

.grid-item-3 {
  grid-row: span 2; /* занимает 2 строки */
}

.grid-item-4 {
  grid-column: span 3; /* занимает 3 столбца */
}`}
              </SyntaxHighlighter>
            </div>

            <div className={'feature-block'}>
              <h5>4. Преимущества</h5>
              <ul>
                <li>Более компактная запись по сравнению с отдельным указанием grid-row-start, grid-column-start и т.д.</li>
                <li>Удобно для создания сложных макетов</li>
              </ul>
            </div>

            <div className={'feature-block'}>
              <h5>Пример использования span</h5>
              <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.span-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.span-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
}

.span-item-1 {
  background-color: #4a90e2;
  grid-area: 1 / 1 / span 2 / span 2;
}

.span-item-2 {
  background-color: #50c878;
  grid-area: 1 / 3;
}

.span-item-3 {
  background-color: #ff6b6b;
  grid-area: 1 / 4 / span 2;
}

.span-item-4 {
  background-color: #ffa500;
  grid-area: 2 / 3;
}

.span-item-5 {
  background-color: #9370db;
  grid-area: 3 / 1 / span 1 / span 4;
}`}
              </SyntaxHighlighter>

              <div className="span-container">
                <div className="span-item span-item-1">Элемент 1 (2x2)</div>
                <div className="span-item span-item-2">Элемент 2</div>
                <div className="span-item span-item-3">Элемент 3 (2 строки)</div>
                <div className="span-item span-item-4">Элемент 4</div>
                <div className="span-item span-item-5">Элемент 5 (4 столбца)</div>
              </div>
            </div>
          </div>

          <div className={'feature-block'}>
            <h4>Когда использовать Flexbox, а когда Grid?</h4>
            <p>Используйте Flexbox для:</p>
            <ul>
              <li>Расположения элементов в одной строке или столбце</li>
              <li>Выравнивания элементов внутри контейнера</li>
              <li>Создания навигационных меню</li>
              <li>Центрирования элементов</li>
            </ul>

            <p>Используйте Grid для:</p>
            <ul>
              <li>Создания сложных двухмерных макетов</li>
              <li>Разметки целых страниц</li>
              <li>Создания сеток карточек</li>
              <li>Когда важен контроль над строками и столбцами одновременно</li>
            </ul>

            <p>Совместное использование:</p>
            <p>Flexbox и Grid могут использоваться вместе. Например, Grid для общего макета страницы, а Flexbox для выравнивания элементов внутри отдельных областей сетки.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxGridExample;

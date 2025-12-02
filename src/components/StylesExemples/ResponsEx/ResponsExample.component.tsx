import { FC, useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ResponsExample.style.scss';

const ResponsExample: FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
      if (elementRef.current) {
        setElementWidth(elementRef.current.getBoundingClientRect().width);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);

    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

  return (
    <div className={'example-container'}>
      <div className={'example-header'}>
        <h2>Адаптивность в CSS</h2>
        <p>
          В CSS существует множество возможностей для создания адаптивных интерфейсов. Вот основные технологии и подходы:
        </p>
      </div>

      <div className={'example-content'}>
        <div className={'feature-section'}>
          <h3>1. Медиазапросы (Media Queries)</h3>
          <p>Наиболее фундаментальный инструмент адаптивности.</p>

          <div className={'feature-block'}>
            <h4>Примеры медиазапросов</h4>
            <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`/* Мобильные устройства */
@media (max-width: 767px) {
  .container { padding: 10px; }
}

/* Планшеты */
@media (min-width: 768px) and (max-width: 1023px) {
  .container { padding: 20px; }
}

/* Десктопы */
@media (min-width: 1024px) {
  .container { padding: 30px; }
}

/* Ориентация устройства */
@media (orientation: landscape) {
  .header { height: 80px; }
}

/* Плотность пикселей */
@media (min-resolution: 2dppx) {
  .image { background-image: url('image@2x.png'); }
}`}
            </SyntaxHighlighter>
          </div>

          <h3>2. Контейнерные запросы (Container Queries)</h3>
          <p>Ключевое отличие от медиазапросов:</p>
          <ul>
            <li>Медиа-запросы реагируют на размеры вьюпорта/экрана</li>
            <li>Контейнерные запросы реагируют на размеры родительского контейнера</li>
          </ul>

          <div className={'feature-block'}>
            <h4>Пример</h4>
            <p>Представьте компонент продукта, который используется:</p>
            <ul>
              <li>В сайдбаре (узкий)</li>
              <li>В основной сетке (средний)</li>
              <li>На странице продукта (широкий)</li>
            </ul>
            <p>Без контейнерных запросов придется создавать разные классы или использовать JavaScript.</p>
            <p>С контейнерными запросами:</p>
            <SyntaxHighlighter language='css' style={coy} className='code-highlighter'>
{`.product-card {
  container-type: inline-size;
}

/* Узкий вариант (сайдбар) */
@container (max-width: 250px) {
  .product-card__details { 
    display: none; 
  }
}

/* Средний вариант (сетка) */
@container (min-width: 251px) and (max-width: 450px) {
  .product-card { 
    flex-direction: column; 
  }
}

/* Широкий вариант (страница продукта) */
@container (min-width: 451px) {
  .product-card { 
    display: grid; 
    grid-template-columns: 1fr 2fr;
  }
}`}
            </SyntaxHighlighter>
            <div className={'feature-block'}>
              <h4>Важно!</h4>
              <p>Используйте медиа-запросы для макета страницы и глобальной адаптивности, а контейнерные запросы — для независимых, переиспользуемых компонентов, которые должны адаптироваться к своему контексту, а не к размеру экрана.</p>
            </div>
          </div>

          <h3>3. Относительные единицы измерения</h3>
          <ul>
            <li><span className="highlight">%</span> - проценты от родительского элемента</li>
            <li><span className="highlight">vw/vh</span> - проценты от ширины/высоты окна</li>
            <li><span className="highlight">rem</span> - относительно размера шрифта корневого элемента</li>
            <li><span className="highlight">em</span> - относительно размера шрифта родительского элемента</li>
          </ul>

          <h3>4. Функции для динамических значений (min(), max(), clamp())</h3>
          <ul>
            <li><span className="highlight">min()</span> - берет список значений и выбирает самое маленькое на основе текущего контекста.</li>
            <li><span className="highlight">max()</span> - берет список значений и выбирает самое большое на основе текущего контекста.</li>
            <li><span className="highlight">clamp()</span> — золотая середина (объединяет в себе min и max)</li>
          </ul>

          <div className={'feature-block'}>
            <h4>Демонстрация работы clamp()</h4>
            <p>Измените размер окна браузера, чтобы увидеть, как работает clamp().</p>
            <p><em>Важно: 50% вычисляется от ширины контейнера, а не от ширины окна просмотра!</em></p>

            <div className="wrapper">
              <p><strong>Container width</strong></p>
              <div className="v-width"><span className="v-width-value">{containerWidth}px</span></div>
              <div className="clamp-container" ref={containerRef}>
                <div className="element" ref={elementRef}>Element</div>
              </div>
              <div className="e-width"><code>width: clamp(200px, 50%, 350px)</code></div>
              <p>Element width is <span className="w-actual">{elementWidth}px</span></p>
              <p className="clamp-explanation">
                <strong>Как это работает:</strong><br/>
                • Минимальная ширина: 200px<br/>
                • Предпочтительная ширина: 50% от контейнера<br/>
                • Максимальная ширина: 350px<br/>
                <br/>
                <strong>Текущее вычисление:</strong><br/>
                50% от {containerWidth}px = {Math.round(containerWidth * 0.5)}px<br/>
                clamp(200px, {Math.round(containerWidth * 0.5)}px, 350px) = {elementWidth}px<br/>
                <br/>
              </p>
            </div>
          </div>

          <div className={'feature-block'}>
            <h4>Важно!</h4>
            <p>Функции <span className="highlight">min()</span>, <span className="highlight">max()</span>, <span className="highlight">clamp()</span> нельзя использовать в медиа запросах!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsExample;

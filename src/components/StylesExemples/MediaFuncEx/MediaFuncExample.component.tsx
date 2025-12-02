import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './MediaFuncExample.style.scss';

const MediaFuncExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>Медиа-функции CSS</h2>
                <p>
                    В этом разделе мы рассмотрим медиа-функции CSS, которые позволяют адаптировать
                    дизайн под различные устройства, условия использования и пользовательские предпочтения.
                </p>
            </div>

            <div className='example-content'>
                <div className='feature-section'>
                    <h3>prefers-color-scheme</h3>
                    <p>
                        <span className='highlight'>prefers-color-scheme</span> — это медиа-функция (или медиа-запрос). 
                        Она проверяет настройки операционной системы или браузера пользователя.
                    </p>

                    <div className='code-block'>
                        <SyntaxHighlighter language="css" style={coy} className="code-highlighter">
{`/* Базовые стили (светлая тема по умолчанию) */
body {
  background-color: #f8f9fa;
  color: #212529;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Темная тема */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #e0e0e0;
  }

  /* Меняем только определенные изображения */
  .logo {
    /* Используем инвертированную версию логотипа для темной темы */
    content: url('logo-dark.svg');
  }
}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>hover и pointer</h3>
                    <p>
                        <span className='highlight'>hover</span> и <span className='highlight'>pointer</span> — это медиа-функции, 
                        но с одной важной оговоркой. Они относятся к категории медиа-запросов 4-го уровня, 
                        которые проверяют не характеристики устройства или окна, а возможности устройства ввода пользователя.
                    </p>

                    <div className='feature-block'>
                        <h4>hover</h4>
                        <p>
                            <span className='highlight'>hover</span> — проверяет, есть ли у основного устройства ввода возможность наведения (например, мышь).
                        </p>
                        <ul>
                            <li><strong>@media (hover: hover)</strong>— устройство имеет возможность наведения.</li>
                            <li><strong>@media (hover: none)</strong>— устройство не имеет такой возможности (тачскрин).</li>
                        </ul>

                        <div className='code-block'>
                            <SyntaxHighlighter language="css" style={coy} className="code-highlighter">
{`/* Базовые стили для всех устройств */
.nav-link {
  padding: 12px 16px;
  text-decoration: none;
  color: #333;
  display: block;
}

/* Стили только для устройств с мышью */
@media (hover: hover) {
  .nav-link:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }

  /* Сложные ховер-эффекты, которые не нужны на тач-устройствах */
  .product-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
  }
}

/* Для тач-устройств упрощаем интерфейс */
@media (hover: none) {
  .nav-link {
    /* Увеличиваем область касания */
    padding: 14px 20px;
  }
}`}
                            </SyntaxHighlighter>
                        </div>

                        <p className='last-paragraph'>
                            <span className='highlight'>Практическое применение:</span> Создание сложных hover-эффектов для десктопов и их отключение на мобильных устройствах для улучшения UX.
                        </p>
                    </div>

                    <div className='feature-block'>
                        <h4>pointer</h4>
                        <p>
                            <span className='highlight'>pointer</span> — проверяет точность основного устройства ввода.
                        </p>
                        <ul>
                            <li><strong>@media (pointer: fine)</strong>— точное устройство (мышь, стилус).</li>
                            <li><strong>@media (pointer: coarse)</strong>— неточное устройство (палец на тачскрине).</li>
                            <li><strong>@media (pointer: none)</strong>— устройство ввода отсутствует (например, управление голосом).</li>
                        </ul>

                        <div className='code-block'>
                            <SyntaxHighlighter language="css" style={coy} className="code-highlighter">
{`/* Базовые стили для всех устройств */
.button {
  padding: 10px 20px;
  font-size: 16px;
}

/* Оптимизация для точных указателей (мышь) */
@media (pointer: fine) {
  .button {
    /* Для мыши можно делать элементы более компактными */
    padding: 8px 16px;
  }
}

/* Оптимизация для неточных указателей (пальцы) */
@media (pointer: coarse) {
  .button {
    /* Большие кликабельные области для пальцев */
    padding: 14px 24px;
    min-height: 44px; /* Минимальный размер для касания по рекомендациям Apple */
  }
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaFuncExample;

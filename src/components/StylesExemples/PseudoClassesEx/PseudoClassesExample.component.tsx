import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './PseudoClassesExample.style.scss';

const PseudoClassesExample: FC = () => {
    return (
        <div className={'example-container'}>
            <div className={'example-header'}>
                <h2>Псевдоклассы в CSS/SCSS</h2>
                <p>
                    Псевдоклассы — это специальные ключевые слова, которые добавляются к селекторам для описания особого
                    состояния элемента. Они позволяют стилизовать элементы не только по их имени или классу, но и по их
                    состоянию, положению или действию пользователя.
                </p>
            </div>

            <div className={'example-content'}>
                <div className={'feature-section'}>
                    <h3>Основные группы псевдоклассов</h3>

                    <div className={'feature-block'}>
                        <h4>1. Состояния взаимодействия</h4>
                        <p>Демонстрация псевдоклассов :hover, :focus и :active:</p>

                        <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                            {`// Когда пользователь наводит курсор
&:hover { background: blue; }

// Когда элемент в фокусе (например, input после клика)
&:focus { outline: 2px solid orange; }

// Когда элемент активен (удерживается клик)
&:active { transform: scale(0.95); }`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className={'feature-block'}>
                    <h4>2. Состояния форм</h4>
                    <p>Демонстрация псевдоклассов :checked, :invalid и :required:</p>

                    <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                        {`// Выбранный checkbox/radio
&:checked { background: green; }

// Невалидное поле
&:invalid { border-color: red; }

// Обязательное поле
&:required { border-color: blue; }`}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className={'feature-block'}>
                <h4>3. Структурные (положение среди соседей)</h4>
                <p>Демонстрация псевдоклассов :first-child, :last-child и :nth-child:</p>

                <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                    {`// Первый дочерний элемент
&:first-child { margin-top: 0; }

// Последний дочерний элемент  
&:last-child { margin-bottom: 0; }

// Каждый 3-й элемент
&:nth-child(3n) { color: red; }`}
                </SyntaxHighlighter>
            </div>

            <div className={'feature-block'}>
                <h4>4. Состояния ссылок</h4>
                <p>Демонстрация псевдоклассов :link и :visited:</p>

                <SyntaxHighlighter language='scss' style={coy} className='code-highlighter'>
                    {`// Непосещенная ссылка
&:link { color: blue; }

// Посещенная ссылка
&:visited { color: purple; }`}
                </SyntaxHighlighter>
            </div>

            <div className={'feature-block'}>
                <h4>Ключевые особенности</h4>
                <ul>
                    <li>Добавляются через : — :hover, :focus, :first-child</li>
                    <li>Работают без JS — браузер сам отслеживает состояния</li>
                    <li>Каскадируются — можно комбинировать: :hover:focus</li>
                    <li>Специфичность — имеют вес как класс (0,1,0)</li>
                </ul>
            </div>

            <div className={'feature-block'}>
                <h4>Амперсанд (&) в SCSS: Ссылка на родительский селектор</h4>
                <p>
                    Амперсанд (&) — это специальный символ, который ссылается на текущий родительский селектор. Он
                    позволяет избежать повторений и создавать сложные селекторы в компактном виде.
                </p>

                <p><strong>Амперсанд (&)</strong> — это мощный инструмент для:</p>
                <ul>
                    <li>✅ Создания псевдоклассов (:hover, :focus)</li>
                    <li>✅ Добавления модификаторов (.button.active)</li>
                    <li>✅ Работы с БЭМ (&__element, &--modifier)</li>
                    <li>✅ Контекстных стилей (.theme-dark &)</li>
                </ul>

                <div className={'highlight'}>
                    Главное правило: Пишите & слитно с тем, что следует за ним (без пробелов), чтобы получить правильный
                    селектор!
                </div>
            </div>
        </div>
    );
};

export default PseudoClassesExample;

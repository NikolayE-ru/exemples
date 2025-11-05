import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CounterExampleDesc: FC = () => {
    const codeExample = `import { FC, useState } from 'react';

const CounterExample: FC = () => {
    // Шаг 1: Инициализация состояния счетчика
    const [count, setCount] = useState<number>(0);

    // Шаг 2: Создание функций для обновления состояния
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    // Шаг 3: Использование состояния в интерфейсе
    return (
        <div className='result-block'>
            <h3>Пример 1: Счетчик</h3>
            <p>
                Текущее значение: <span className='highlight'>{count}</span>
            </p>
            <button className='btn' onClick={increment}>
                +
            </button>
            <button className='btn btn-secondary' onClick={decrement}>
                -
            </button>
        </div>
    );
};

export default CounterExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Счетчик'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useState:</h4>

                <SyntaxHighlighter
                    language="javascript"
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги подключения:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Импорт хука:</strong> <code>import {'{ useState }'} from 'react'</code>
                        </li>
                        <li className='step-item'>
                            <strong>Инициализация состояния:</strong> <code>const [count, setCount] = useState(0)</code>
                            <br/>
                            <small>• count - текущее значение</small>
                            <br/>
                            <small>• setCount - функция обновления</small>
                            <br/>
                            <small>• 0 - начальное значение</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функции обновления:</strong> Создаем increment и decrement для изменения состояния
                        </li>
                        <li className='step-item'>
                            <strong>Использование в JSX:</strong> Отображаем count и привязываем функции к кнопкам
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует базовое использование хука <code>useState</code> для управления
                    состоянием счетчика.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        Состояние <code>count</code> хранит текущее значение счетчика
                    </li>
                    <li>
                        Функция <code>setCount</code> используется для обновления состояния
                    </li>
                    <li>
                        При вызове <code>increment</code> или <code>decrement</code> компонент перерисовывается с
                        новым значением
                    </li>
                    <li>
                        Использование функциональной формы <code>setCount(prevCount ={'>'} prevCount + 1)</code>{' '}
                        гарантирует работу с актуальным предыдущим значением
                    </li>
                </ul>
                <p>
                    Это фундаментальный пример, который показывает, как React реагирует на изменения состояния и
                    обновляет интерфейс.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default CounterExampleDesc;

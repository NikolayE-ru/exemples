import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BooleanExampleDesc: FC = () => {
    const codeExample = `import { FC, useState } from 'react';

const BooleanExample: FC = () => {
    // Шаг 1: Инициализация булевых состояний
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAccepted, setIsAccepted] = useState<boolean>(false);

    // Шаг 2: Функции для переключения значений
    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    const toggleAcceptance = () => {
        setIsAccepted((prevState) => !prevState);
    };

    // Шаг 3: Использование в условном рендеринге
    return (
        <div className='result-block'>
            <h3>Пример 4: Булево значение</h3>

            <div className='visibility-toggle'>
                <button className='btn' onClick={toggleVisibility}>
                    Переключить видимость
                </button>
                {isVisible && (
                    <div className='message info message-container'>
                        Этот текст виден, когда isVisible = true
                    </div>
                )}
            </div>

            <div>
                <button className='btn' onClick={toggleAcceptance}>
                    {isAccepted ? 'Отменить' : 'Принять'} условия
                </button>
                <div className='status-container'>
                    Статус принятия условий:
                    <span className='highlight'>
                        {isAccepted ? ' Принято' : ' Не принято'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BooleanExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 4: Работа с булевыми значениями'>
            <div className='description-container'>
                <h4>Пошаговая процедура работы с булевыми значениями в useState:</h4>

                <SyntaxHighlighter
                    language='javascript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с булевыми значениями:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Инициализация булевых состояний:</strong>
                            <br />
                            <code>const [isVisible, setIsVisible] = useState{`<boolean>`}(true);</code>
                            <br />
                            <code>const [isAccepted, setIsAccepted] = useState{`<boolean>`}(false);</code>
                            <br />
                            <small>
                                • Тип <code>boolean</code> для строгой типизации
                            </small>
                            <br />
                            <small>• Начальные значения: true и false</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функции переключения:</strong>
                            <br />
                            <code>setIsVisible((prevState) ={'>'} !prevState);</code>
                            <br />
                            <small>
                                • Используем оператор <code>!</code> для инверсии значения
                            </small>
                            <br />
                            <small>• Функциональная форма гарантирует актуальное состояние</small>
                        </li>
                        <li className='step-item'>
                            <strong>Условный рендеринг:</strong>
                            <br />
                            <code>{`{isVisible && (<div>...</div>)}`}</code>
                            <br />
                            <small>
                                • Элемент отображается только когда <code>isVisible = true</code>
                            </small>
                            <br />
                            <small>
                                • Используем логический оператор <code>&&</code>
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Динамический контент:</strong>
                            <br />
                            <code>{`{isAccepted ? 'Отменить' : 'Принять'} условия`}</code>
                            <br />
                            <small>• Тернарный оператор меняет текст кнопки</small>
                            <br />
                            <small>• Статус отображается в зависимости от значения</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует работу с булевыми значениями через хук <code>useState</code>.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>Булевы состояния идеально подходят для переключателей, флагов и условий</li>
                    <li>
                        <code>isVisible</code> управляет видимостью элемента через условный рендеринг
                    </li>
                    <li>
                        <code>isAccepted</code> демонстрирует динамическое изменение текста и статуса
                    </li>
                    <li>Функции переключения используют инверсию текущего значения</li>
                    <li>Тернарный оператор и логический оператор && часто используются с булевыми состояниями</li>
                </ul>
                <p>
                    Булевы значения - один из самых частых случаев использования useState для управления UI-состояниями.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default BooleanExampleDesc;

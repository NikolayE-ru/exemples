import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const WindowWidthExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useEffect } from 'react';

const WindowWidthExample: FC = () => {
    // Шаг 1: Инициализация состояния с текущей шириной окна
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    // Шаг 2: Эффект для подписки на события изменения размера
    useEffect(() => {
        // Функция-обработчик события resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Подписываемся на событие изменения размера окна
        window.addEventListener('resize', handleResize);

        // Шаг 3: Функция очистки - отписка от события
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

    return (
        <div className='result-block'>
            <h3>Пример 2: Отслеживание размера окна</h3>
            <p>
                Текущая ширина окна: <span className='highlight'>{windowWidth}px</span>
            </p>
            <p className='message info'>Измените размер окна браузера</p>
        </div>
    );
};

export default WindowWidthExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Отслеживание размера окна с useEffect'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useEffect для подписки на события:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useEffect для подписки на события:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Инициализация состояния:</strong>
                            <br />
                            <code>const [windowWidth, setWindowWidth] = useState{`<number>`}(window.innerWidth);</code>
                            <br />
                            <small>• Начальное значение - текущая ширина окна</small>
                            <br />
                            <small>
                                • Используем <code>window.innerWidth</code> для получения актуального размера
                            </small>
                            <br />
                            <small>• Состояние будет обновляться при изменении размера окна</small>
                        </li>
                        <li className='step-item'>
                            <strong>Создание эффекта с подпиской:</strong>
                            <br />
                            <code>
                                useEffect(() ={'>'} {'{ ... }'}, []);
                            </code>
                            <br />
                            <small>• Пустой массив зависимостей - эффект выполняется один раз при монтировании</small>
                            <br />
                            <small>
                                • Создаем функцию-обработчик <code>handleResize</code>
                            </small>
                            <br />
                            <small>
                                • Подписываемся на событие <code>resize</code> с помощью <code>addEventListener</code>
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Функция очистки (обязательная):</strong>
                            <br />
                            <code>
                                return () ={'>'} {`{ window.removeEventListener('resize', handleResize) }`};
                            </code>
                            <br />
                            <small>• Выполняется при размонтировании компонента</small>
                            <br />
                            <small>
                                • Отписываемся от события <code>resize</code>
                            </small>
                            <br />
                            <small>• Предотвращаем утечки памяти и выполнение кода после удаления компонента</small>
                        </li>
                        <li className='step-item'>
                            <strong>Обновление состояния при событиях:</strong>
                            <br />
                            <code>
                                const handleResize = () ={'>'} {'{ setWindowWidth(window.innerWidth) }'};
                            </code>
                            <br />
                            <small>• При каждом изменении размера окна вызывается эта функция</small>
                            <br />
                            <small>
                                • Обновляем состояние <code>windowWidth</code> текущим значением
                            </small>
                            <br />
                            <small>• React автоматически перерисовывает компонент с новым значением</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Ключевые особенности этого подхода:</h5>
                <ul>
                    <li>
                        <strong>Автоматическая отписка</strong> - функция очистки гарантирует, что подписка будет
                        удалена
                    </li>
                    <li>
                        <strong>Оптимальная производительность</strong> - подписка создается один раз при монтировании
                    </li>
                    <li>
                        <strong>Реактивность</strong> - компонент автоматически реагирует на изменения размера окна
                    </li>
                    <li>
                        <strong>Без утечек памяти</strong> - правильная очистка предотвращает проблемы с памятью
                    </li>
                </ul>

                <h5>Паттерны для работы с событиями в useEffect:</h5>
                <div className='event-patterns'>
                    <h6 className='event-patterns-title'>📝 Общая структура для подписки на события:</h6>
                    <pre className='code-pattern'>
                        {`useEffect(() => {
    // 1. Создаем функцию-обработчик
    const handler = () => {
        // Логика обработки события
    };

    // 2. Подписываемся на событие
    element.addEventListener('eventName', handler);

    // 3. Возвращаем функцию очистки
    return () => {
        element.removeEventListener('eventName', handler);
    };
}, []); // Пустой массив - подписка создается один раз`}
                    </pre>
                </div>

                <h5>Другие примеры использования этого паттерна:</h5>
                <div className='event-examples'>
                    <h6 className='event-examples-title'>🎯 Похожие сценарии:</h6>
                    <ul>
                        <li>
                            <strong>Отслеживание прокрутки:</strong>
                        </li>
                        <pre className='code-example'>
                            {`useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);`}
                        </pre>

                        <li>
                            <strong>Отслеживание видимости страницы:</strong>
                        </li>
                        <pre className='code-example'>
                            {`useEffect(() => {
    const handleVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
}, []);`}
                        </pre>

                        <li>
                            <strong>Обработка нажатия клавиш:</strong>
                        </li>
                        <pre className='code-example'>
                            {`useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
}, []);`}
                        </pre>
                    </ul>
                </div>

                <p>
                    <strong>Важно:</strong> Всегда используйте функцию очистки при подписке на события, таймеры или
                    любые внешние ресурсы. Это предотвращает утечки памяти и ошибки.
                </p>
                <p>
                    <strong>Производительность:</strong> В этом примере используется пустой массив зависимостей, что
                    гарантирует создание только одной подписки за время жизни компонента.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default WindowWidthExampleDesc;

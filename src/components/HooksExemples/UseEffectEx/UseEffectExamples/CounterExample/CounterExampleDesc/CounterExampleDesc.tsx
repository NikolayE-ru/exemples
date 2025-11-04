import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CounterExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useEffect } from 'react';

const CounterExample: FC = () => {
    const [count, setCount] = useState<number>(0);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };

    // Пример 1: Эффект при монтировании (пустой массив зависимостей)
    useEffect(() => {
        addLog('Компонент смонтирован');

        return () => {
            addLog('Компонент будет размонтирован');
        };
    }, []); // Пустой массив - выполняется только при монтировании

    // Пример 2: Эффект при изменении count
    useEffect(() => {
        addLog(\`Счетчик изменился: \${count}\`);

        // Функция очистки - выполняется перед следующим вызовом эффекта
        return () => {
            addLog('Очистка после изменения счетчика');
        };
    }, [count]); // Зависимость - count

    // Пример 3: Эффект после каждого рендера (без массива зависимостей)
    useEffect(() => {
        addLog('Компонент отрендерен');
    }); // Нет массива зависимостей - выполняется после каждого рендера

    const clearLogs = () => {
        setLogs([]);
    };

    return (
        <div className='result-block'>
            <h3>Пример 1: Демонстрация работы useEffect</h3>
            <p>
                Текущее значение: <span className='highlight'>{count}</span>
            </p>
            <button className='btn' onClick={() => setCount(count + 1)}>
                Увеличить
            </button>
            <button className='btn' onClick={clearLogs} style={{marginLeft: '10px'}}>
                Очистить логи
            </button>

            <div className='result-block'}>
                <h4>Логи выполнения:</h4>
                <div className='message info'}>
                    {logs.map((log, index) => (
                        <div key={index} style={{fontFamily: 'monospace', fontSize: '12px'}}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>

            <p className='message info'>
                Нажимайте "Увеличить" чтобы увидеть как работает useEffect
            </p>
        </div>
    );
};

export default CounterExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Демонстрация работы useEffect'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура подключения useEffect:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    customStyle={{
                        borderRadius: '8px',
                        fontSize: '14px',
                        marginTop: '15px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div style={{ marginTop: '20px' }}>
                    <h5>Шаги работы с useEffect:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Эффект при монтировании (componentDidMount):</strong>
                            <br />
                            <code>
                                useEffect(() ={'>'} {'{ ... }'}, []);
                            </code>
                            <br />
                            <small>• Пустой массив зависимостей</small>
                            <br />
                            <small>• Выполняется один раз при монтировании компонента</small>
                            <br />
                            <small>• Функция очистки выполняется при размонтировании</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Эффект при изменении зависимостей (componentDidUpdate):</strong>
                            <br />
                            <code>
                                useEffect(() ={'>'} {'{ ... }'}, [count]);
                            </code>
                            <br />
                            <small>• Указываем зависимости в массиве</small>
                            <br />
                            <small>• Выполняется при изменении count</small>
                            <br />
                            <small>• Функция очистки выполняется перед следующим вызовом</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Эффект после каждого рендера:</strong>
                            <br />
                            <code>
                                useEffect(() ={'>'} {'{ ... }'});
                            </code>
                            <br />
                            <small>• Без массива зависимостей</small>
                            <br />
                            <small>• Выполняется после каждого рендера компонента</small>
                            <br />
                            <small>• Может негативно влиять на производительность</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Функция очистки (cleanup):</strong>
                            <br />
                            <code>
                                return () ={'>'} {'{ addLog("Очистка") }'};
                            </code>
                            <br />
                            <small>• Выполняется перед следующим вызовом эффекта</small>
                            <br />
                            <small>• Или при размонтировании компонента</small>
                            <br />
                            <small>• Для отписки от событий, таймеров, запросов</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования useEffect:</h5>

                <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#1565c0' }}>✅ Когда использовать useEffect:</h6>
                    <ul>
                        <li>
                            <strong>Запросы к API</strong> - загрузка данных при монтировании
                        </li>
                        <li>
                            <strong>Подписки на события</strong> - WebSocket, таймеры, DOM события
                        </li>
                        <li>
                            <strong>Работа с DOM</strong> - ручное управление элементами
                        </li>
                        <li>
                            <strong>Синхронизация с внешними системами</strong> - интеграции со сторонними библиотеками
                        </li>
                        <li>
                            <strong>Побочные эффекты</strong> - любые действия, влияющие на внешний мир
                        </li>
                    </ul>

                    <h6 style={{ color: '#c62828' }}>❌ Когда НЕ использовать useEffect:</h6>
                    <ul>
                        <li>
                            <strong>Преобразование данных для рендера</strong> - используйте useMemo
                        </li>
                        <li>
                            <strong>Обработка событий пользователя</strong> - используйте обработчики событий
                        </li>
                        <li>
                            <strong>Вычисления на основе пропсов/состояния</strong> - используйте useMemo
                        </li>
                        <li>
                            <strong>Установка состояния на основе пропсов</strong> - обычно антипаттерн
                        </li>
                        <li>
                            <strong>Для логики, которая может быть в обработчике события</strong> - перенесите в
                            обработчик
                        </li>
                    </ul>
                </div>

                <h5>Паттерны использования useEffect:</h5>
                <div style={{ background: '#f3e5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#7b1fa2' }}>🔧 Распространенные сценарии:</h6>
                    <ul>
                        <li>
                            <strong>Загрузка данных:</strong>
                        </li>
                        <pre style={{ background: '#e1bee7', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                            {`useEffect(() => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data));
}, []);`}
                        </pre>

                        <li>
                            <strong>Подписка и отписка:</strong>
                        </li>
                        <pre style={{ background: '#e1bee7', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                            {`useEffect(() => {
    const subscription = api.subscribe(data => setData(data));
    return () => subscription.unsubscribe();
}, []);`}
                        </pre>

                        <li>
                            <strong>Таймеры:</strong>
                        </li>
                        <pre style={{ background: '#e1bee7', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                            {`useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(timer);
}, []);`}
                        </pre>
                    </ul>
                </div>

                <p>
                    <strong>Важно:</strong> Всегда указывайте правильные зависимости в массиве. Используйте{' '}
                    <code>exhaustive-deps</code> правило ESLint для автоматической проверки.
                </p>
                <p>
                    <strong>Порядок выполнения в примере:</strong> при нажатии "Увеличить" вы увидите: очистка
                    предыдущего эффекта → рендер компонента → выполнение эффектов.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default CounterExampleDesc;

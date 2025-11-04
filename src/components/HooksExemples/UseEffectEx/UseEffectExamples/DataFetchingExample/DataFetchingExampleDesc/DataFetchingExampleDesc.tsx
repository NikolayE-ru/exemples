import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DataFetchingExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useEffect } from 'react';

interface DataItem {
    id: number;
    title: string;
}

const DataFetchingExample: FC = () => {
    // Шаг 1: Инициализация состояний для данных, загрузки и ошибок
    const [data, setData] = useState<DataItem | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Шаг 2: Функция загрузки данных
    const fetchData = () => {
        setLoading(true);
        setError(null);

        // Имитация запроса к API
        setTimeout(() => {
            try {
                // В реальном приложении здесь был бы fetch/axios запрос
                const mockData: DataItem = { 
                    id: Date.now(), 
                    title: \`Загруженные данные #\${Date.now()}\` 
                };
                setData(mockData);
                setLoading(false);
            } catch (err) {
                setError('Ошибка загрузки данных');
                setLoading(false);
            }
        }, 1000);
    };

    // Шаг 3: Эффект для загрузки данных при монтировании компонента
    useEffect(() => {
        fetchData();
    }, []); // Пустой массив зависимостей - выполняется только при монтировании

    return (
        <div className='result-block'>
            <h3>Пример 3: Загрузка данных</h3>
            {loading && <p className='message info'>Загрузка...</p>}
            {error && <p className='message error'>{error}</p>}
            {data && (
                <div>
                    <p>
                        ID: <span className='highlight'>{data.id}</span>
                    </p>
                    <p>
                        Заголовок: <span className='highlight'>{data.title}</span>
                    </p>
                </div>
            )}
            <button className='btn' onClick={fetchData}>
                Обновить данные
            </button>
        </div>
    );
};

export default DataFetchingExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 3: Загрузка данных с useEffect'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура подключения useEffect для загрузки данных:</h4>

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
                    <h5>Шаги работы с useEffect для загрузки данных:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Инициализация состояний:</strong>
                            <br />
                            <code>const [data, setData] = useState{`<DataItem | null>`}(null);</code>
                            <br />
                            <code>const [loading, setLoading] = useState{`<boolean>`}(false);</code>
                            <br />
                            <code>const [error, setError] = useState{`<string | null>`}(null);</code>
                            <br />
                            <small>
                                • <code>data</code> - для хранения загруженных данных (может быть null)
                            </small>
                            <br />
                            <small>
                                • <code>loading</code> - флаг состояния загрузки
                            </small>
                            <br />
                            <small>
                                • <code>error</code> - для хранения сообщений об ошибках
                            </small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Создание функции загрузки данных:</strong>
                            <br />
                            <code>
                                const fetchData = () ={'>'} {'{ ... }'};
                            </code>
                            <br />
                            <small>
                                • Устанавливаем <code>loading: true</code> и сбрасываем ошибки
                            </small>
                            <br />
                            <small>
                                • Имитируем асинхронный запрос с помощью <code>setTimeout</code>
                            </small>
                            <br />
                            <small>
                                • Обрабатываем успех и ошибки в блоке <code>try/catch</code>
                            </small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Использование useEffect для автоматической загрузки:</strong>
                            <br />
                            <code>
                                useEffect(() ={'>'} {'{ fetchData() }'}, []);
                            </code>
                            <br />
                            <small>• Пустой массив зависимостей - выполняется один раз при монтировании</small>
                            <br />
                            <small>• Автоматически загружает данные при первом рендере</small>
                            <br />
                            <small>
                                • Эквивалент <code>componentDidMount</code> в классовых компонентах
                            </small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Условный рендеринг состояний:</strong>
                            <br />
                            <code>{`{loading && <p>Загрузка...</p>}`}</code>
                            <br />
                            <code>{`{error && <p>{error}</p>}`}</code>
                            <br />
                            <code>{`{data && <div>...</div>}`}</code>
                            <br />
                            <small>
                                • Показываем индикатор загрузки когда <code>loading = true</code>
                            </small>
                            <br />
                            <small>
                                • Показываем ошибку если <code>error</code> не null
                            </small>
                            <br />
                            <small>• Показываем данные только когда они загружены</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Ключевые особенности этого подхода:</h5>
                <ul>
                    <li>
                        <strong>Три состояния UI</strong> - загрузка, ошибка, успех
                    </li>
                    <li>
                        <strong>Автоматическая загрузка</strong> - данные загружаются при монтировании компонента
                    </li>
                    <li>
                        <strong>Обработка ошибок</strong> - блок try/catch защищает от сбоев
                    </li>
                    <li>
                        <strong>Повторная загрузка</strong> - кнопка позволяет обновить данные вручную
                    </li>
                </ul>

                <h5>Улучшенные паттерны для загрузки данных:</h5>
                <div style={{ background: '#e8f5e8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#2e7d32' }}>🚀 Продвинутые подходы:</h6>

                    <p>
                        <strong>1. Отмена запросов при размонтировании:</strong>
                    </p>
                    <pre style={{ background: '#c8e6c9', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/data');
            if (!cancelled) {
                const data = await response.json();
                setData(data);
            }
        } catch (err) {
            if (!cancelled) setError('Ошибка загрузки');
        } finally {
            if (!cancelled) setLoading(false);
        }
    };
    
    fetchData();
    
    return () => { cancelled = true; };
}, []);`}
                    </pre>

                    <p>
                        <strong>2. Загрузка с зависимостями:</strong>
                    </p>
                    <pre style={{ background: '#c8e6c9', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`useEffect(() => {
    fetchData(userId);
}, [userId]); // Перезагружает данные при изменении userId`}
                    </pre>
                </div>

                <h5>Типичные ошибки и их решения:</h5>
                <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#c62828' }}>⚠️ Частые проблемы:</h6>
                    <ul>
                        <li>
                            <strong>Утечка памяти:</strong> запрос выполняется после размонтирования компонента
                            <br />
                            <em>Решение:</em> использовать флаг отмены или AbortController
                        </li>
                        <li>
                            <strong>Гонка запросов:</strong> несколько одновременных запросов
                            <br />
                            <em>Решение:</em> отслеживать актуальный запрос, отменять предыдущие
                        </li>
                        <li>
                            <strong>Бесконечный цикл:</strong> неправильные зависимости в useEffect
                            <br />
                            <em>Решение:</em> правильно указывать массив зависимостей
                        </li>
                    </ul>
                </div>

                <h5>Лучшие практики:</h5>
                <ul>
                    <li>Всегда обрабатывайте состояния загрузки и ошибок</li>
                    <li>Используйте TypeScript для типизации данных</li>
                    <li>Рассмотрите использование React Query или SWR для сложных сценариев</li>
                    <li>Добавляйте функцию очистки для отмены запросов</li>
                    <li>Кэшируйте данные когда это уместно</li>
                </ul>

                <p>
                    <strong>Производительность:</strong> В реальных приложениях рассмотрите использование
                    специализированных библиотек для управления состоянием запросов (React Query, SWR, Apollo Client).
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default DataFetchingExampleDesc;

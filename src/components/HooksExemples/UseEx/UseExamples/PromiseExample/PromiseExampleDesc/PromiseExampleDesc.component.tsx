import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PromiseExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, use, Suspense } from 'react';

interface DataItem {
    id: number;
    title: string;
}

// Компонент, который использует use для работы с промисами
const DataFetcher: FC<{ promise: Promise<DataItem> }> = ({ promise }) => {
    // Шаг 1: Использование use для "разворачивания" промиса
    const data = use(promise);

    return (
        <div className='result-block'>
            <h3>Данные, полученные через use(promise)</h3>
            <p>
                ID: <span className='highlight'>{data.id}</span>
            </p>
            <p>
                Заголовок: <span className='highlight'>{data.title}</span>
            </p>
        </div>
    );
};

const PromiseExample: FC = () => {
    const [dataPromise, setDataPromise] = useState<Promise<DataItem> | null>(null);

    // Шаг 2: Функция для создания нового промиса
    const loadData = () => {
        // Создаем новый промис при каждом клике
        const promise = new Promise<DataItem>((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        id: Date.now(),
                        title: \`Данные, загруженные в \${new Date().toLocaleTimeString()}\`,
                    }),
                1500,
            ),
        );

        setDataPromise(promise);
    };

    return (
        <div className='result-block'>
            <h3>Пример 2: Работа с промисами с помощью use</h3>
            <button className='btn' onClick={loadData}>
                Загрузить данные
            </button>

            {/* Шаг 3: Оборачивание в Suspense для обработки состояний загрузки */}
            {dataPromise && (
                <Suspense fallback={<div className='message info'>Загрузка данных...</div>}>
                    <DataFetcher promise={dataPromise} />
                </Suspense>
            )}
        </div>
    );
};

export default PromiseExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Работа с промисами через use'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения use для работы с промисами:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с use для промисов:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Создание компонента с use для промиса:</strong>
                            <br />
                            <code>const data = use(promise);</code>
                            <br />
                            <small>• Хук use "приостанавливает" компонент до разрешения промиса</small>
                            <br />
                            <small>• Возвращает результат промиса когда он выполнен</small>
                            <br />
                            <small>• При ошибке промиса будет выброшено исключение</small>
                        </li>
                        <li className='step-item'>
                            <strong>Управление состоянием промиса:</strong>
                            <br />
                            <code>
                                const [dataPromise, setDataPromise] = useState{`<Promise<DataItem> | null>`}(null);
                            </code>
                            <br />
                            <small>• Храним промис в состоянии компонента</small>
                            <br />
                            <small>• Начальное значение - null (данные не загружаются)</small>
                            <br />
                            <small>• При каждом клике создается новый промис</small>
                        </li>
                        <li className='step-item'>
                            <strong>Создание промиса с задержкой:</strong>
                            <br />
                            <code>
                                const promise = new Promise{`<DataItem>`}((resolve) ={'>'} setTimeout(() ={'>'}{' '}
                                resolve(...), 1500));
                            </code>
                            <br />
                            <small>• Имитирует асинхронную загрузку данных</small>
                            <br />
                            <small>• Задержка 1.5 секунды показывает работу Suspense</small>
                            <br />
                            <small>• Каждый промис имеет уникальные данные (timestamp)</small>
                        </li>
                        <li className='step-item'>
                            <strong>Оборачивание в Suspense:</strong>
                            <br />
                            <code>{`<Suspense fallback={<div>Загрузка данных...</div>}>`}</code>
                            <br />
                            <small>• Suspense обрабатывает состояния загрузки компонентов</small>
                            <br />
                            <small>
                                • <code>fallback</code> показывает индикатор загрузки
                            </small>
                            <br />
                            <small>• Обязателен при использовании use с промисами</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Как работает use с промисами:</h5>
                <div className='process-container'>
                    <h6 className='process-title'>🔄 Процесс выполнения:</h6>
                    <ol>
                        <li>
                            <strong>Клик по кнопке</strong> → создается новый промис
                        </li>
                        <li>
                            <strong>Промис сохраняется в состояние</strong> → компонент перерисовывается
                        </li>
                        <li>
                            <strong>DataFetcher монтируется</strong> → вызывается use(promise)
                        </li>
                        <li>
                            <strong>Промис еще не выполнен</strong> → React "приостанавливает" компонент
                        </li>
                        <li>
                            <strong>Suspense показывает fallback</strong> → индикатор загрузки
                        </li>
                        <li>
                            <strong>Промис выполнен (1.5 сек)</strong> → React "возобновляет" компонент
                        </li>
                        <li>
                            <strong>DataFetcher рендерит данные</strong> → use возвращает результат промиса
                        </li>
                    </ol>
                </div>

                <h5>Преимущества use перед традиционными подходами:</h5>
                <div className='comparison-container'>
                    <h6 className='comparison-title'>🚀 Сравнение с useEffect:</h6>

                    <p>
                        <strong>Традиционный подход (useEffect):</strong>
                    </p>
                    <pre className='code-traditional'>
                        {`const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    fetchData().then(result => {
        setData(result);
        setLoading(false);
    });
}, []);

return loading ? <Spinner /> : <DataDisplay data={data} />;`}
                    </pre>

                    <p>
                        <strong>Современный подход (use + Suspense):</strong>
                    </p>
                    <pre className='code-modern'>
                        {`const data = use(fetchData());

return <DataDisplay data={data} />;

// Оборачиваем в Suspense выше в иерархии
<Suspense fallback={<Spinner />}>
    <MyComponent />
</Suspense>`}
                    </pre>

                    <p>
                        <strong>Преимущества use:</strong> меньше кода, декларативный подход, лучшая интеграция с
                        Concurrent Features
                    </p>
                </div>

                <h5>Правила использования use с промисами:</h5>
                <ul>
                    <li>
                        <strong>Всегда используйте Suspense</strong> - для обработки состояний загрузки
                    </li>
                    <li>
                        <strong>Стабильные ссылки на промисы</strong> - не создавайте промисы в рендере
                    </li>
                    <li>
                        <strong>Обработка ошибок</strong> - используйте Error Boundaries для перехвата ошибок
                    </li>
                    <li>
                        <strong>Кэширование</strong> - рассмотрите использование библиотек для кэширования промисов
                    </li>
                    <li>
                        <strong>Отмена запросов</strong> - для реальных API используйте AbortController
                    </li>
                </ul>

                <h5>Практические сценарии использования:</h5>
                <ul>
                    <li>
                        <strong>Загрузка данных по требованию</strong> - как в этом примере
                    </li>
                    <li>
                        <strong>Ленивая загрузка компонентов</strong> - с динамическим импортом
                    </li>
                    <li>
                        <strong>Параллельная загрузка</strong> - несколько use в одном компоненте
                    </li>
                    <li>
                        <strong>Условная загрузка</strong> - использование use внутри условий
                    </li>
                </ul>

                <p>
                    <strong>Важно:</strong> Хук use с промисами доступен в React 19+ и представляет собой современный
                    декларативный подход к работе с асинхронными операциями.
                </p>
                <p>
                    <strong>Производительность:</strong> Этот подход интегрируется с Concurrent React и позволяет лучше
                    управлять приоритетами рендеринга.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default PromiseExampleDesc;

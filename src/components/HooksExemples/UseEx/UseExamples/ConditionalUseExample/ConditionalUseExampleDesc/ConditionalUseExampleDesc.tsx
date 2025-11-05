import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ConditionalUseExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, use } from 'react';

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

// Компонент, который демонстрирует условное использование use
const ConditionalUseExample: FC = () => {
    const [showData, setShowData] = useState<boolean>(false);

    // Шаг 2: Создание промиса, который будет передан в use
    const [dataPromise] = useState<Promise<DataItem>>(
        () =>
            new Promise((resolve) =>
                setTimeout(() =>
                    resolve({
                        id: 1,
                        title: 'Данные, загруженные через промис'
                    }),
                    2000
                ),
            ),
    );

    return (
        <>
            <div className='result-block'>
                <h3>Пример 3: Условное использование use</h3>
                <p className='message info'>
                    В отличие от других хуков, use можно использовать внутри условий и циклов
                </p>

                {/* Шаг 3: Условное использование компонента с use */}
                {showData ? (
                    <div>
                        <p>Данные отображаются (используется use):</p>
                        <DataFetcher promise={dataPromise} />
                    </div>
                ) : (
                    <p>Данные скрыты (use не используется)</p>
                )}
            </div>
            <button className='btn btn-secondary' onClick={() => setShowData(!showData)}>
                {showData ? 'Скрыть' : 'Показать'} условный компонент
            </button>
        </>
    );
};

export default ConditionalUseExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 3: Условное использование хука use'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения хука use:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с хуком use:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Создание компонента с use:</strong>
                            <br />
                            <code>const data = use(promise);</code>
                            <br />
                            <small>• Хук use "разворачивает" промис и возвращает его результат</small>
                            <br />
                            <small>• Компонент приостанавливается до разрешения промиса</small>
                            <br />
                            <small>• При ошибке промиса будет выброшено исключение</small>
                        </li>
                        <li className='step-item'>
                            <strong>Подготовка промиса:</strong>
                            <br />
                            <code>
                                const [dataPromise] = useState{`<Promise<DataItem>>`}(() ={'>'} new Promise(...));
                            </code>
                            <br />
                            <small>• Промис создается один раз при инициализации компонента</small>
                            <br />
                            <small>• Используем useState для сохранения ссылки на промис</small>
                            <br />
                            <small>• Промис имитирует загрузку данных с задержкой 2 секунды</small>
                        </li>
                        <li className='step-item'>
                            <strong>Условное использование (главная особенность use):</strong>
                            <br />
                            <code>{`{showData ? <DataFetcher promise={dataPromise} /> : <p>Данные скрыты</p>}`}</code>
                            <br />
                            <small>• use можно вызывать внутри условий, в отличие от других хуков</small>
                            <br />
                            <small>• Хук выполняется только когда условие истинно</small>
                            <br />
                            <small>• Это позволяет лениво загружать данные только когда они нужны</small>
                        </li>
                        <li className='step-item'>
                            <strong>Обработка состояний промиса:</strong>
                            <br />
                            <small>
                                • <strong>Pending:</strong> React приостанавливает компонент до разрешения
                            </small>
                            <br />
                            <small>
                                • <strong>Fulfilled:</strong> возвращает результат промиса
                            </small>
                            <br />
                            <small>
                                • <strong>Rejected:</strong> выбрасывает ошибку (нужно обрабатывать Error Boundary)
                            </small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования хука use:</h5>

                <div className='rules-container'>
                    <h6 className='rules-title-positive'>✅ Когда использовать use:</h6>
                    <ul>
                        <li>
                            <strong>Чтение контекста условно</strong> - use(Context) можно использовать в условиях
                        </li>
                        <li>
                            <strong>Работа с промисами</strong> - "разворачивание" асинхронных операций
                        </li>
                        <li>
                            <strong>Ленивая загрузка ресурсов</strong> - загрузка только когда компонент отображается
                        </li>
                        <li>
                            <strong>Условные подписки</strong> - подписка на данные только при определенных условиях
                        </li>
                        <li>
                            <strong>Циклы и условия</strong> - единственный хук, который можно использовать в циклах
                        </li>
                    </ul>

                    <h6 className='rules-title-negative'>❌ Когда НЕ использовать use:</h6>
                    <ul>
                        <li>
                            <strong>Для обычных состояний</strong> - используйте useState
                        </li>
                        <li>
                            <strong>Для побочных эффектов</strong> - используйте useEffect
                        </li>
                        <li>
                            <strong>Для мемоизации</strong> - используйте useMemo/useCallback
                        </li>
                        <li>
                            <strong>Без Suspense</strong> - use требует Suspense boundary для обработки загрузки
                        </li>
                        <li>
                            <strong>С изменяемыми промисами</strong> - промис должен быть стабильной ссылкой
                        </li>
                    </ul>
                </div>

                <h5>Особенности хука use:</h5>
                <div className='features-container'>
                    <h6 className='features-title'>🎯 Уникальные возможности use:</h6>
                    <ul>
                        <li>
                            <strong>Условное выполнение:</strong>
                            <pre className='code-example'>
                                {`// Это РАБОТАЕТ с use!
if (shouldLoad) {
    const data = use(dataPromise);
}`}
                            </pre>
                        </li>
                        <li>
                            <strong>Использование в циклах:</strong>
                            <pre className='code-example'>
                                {`// Это тоже РАБОТАЕТ!
const items = ids.map(id => {
    const data = use(fetchItem(id));
    return <div key={id}>{data.name}</div>;
});`}
                            </pre>
                        </li>
                        <li>
                            <strong>Чтение контекста условно:</strong>
                            <pre className='code-example'>
                                {`const ConditionalContext = () => {
    if (user.isAdmin) {
        const adminData = use(AdminContext);
        return <AdminPanel data={adminData} />;
    }
    return <UserPanel />;
};`}
                            </pre>
                        </li>
                    </ul>
                </div>

                <h5>Практические примеры использования use:</h5>
                <ul>
                    <li>
                        <strong>Ленивая загрузка данных:</strong> загружать тяжелые данные только когда компонент виден
                    </li>
                    <li>
                        <strong>Условные подписки:</strong> подписываться на WebSocket только для авторизованных
                        пользователей
                    </li>
                    <li>
                        <strong>Динамические импорты:</strong> загружать компоненты только когда они нужны
                    </li>
                    <li>
                        <strong>Feature flags:</strong> загружать функциональность только если флаг включен
                    </li>
                </ul>

                <p>
                    <strong>Важно:</strong> Хук use требует React 19+ и должен использоваться внутри Suspense boundary
                    для обработки состояний загрузки и ошибок.
                </p>
                <p>
                    <strong>Производительность:</strong> use позволяет значительно улучшить производительность за счет
                    ленивой загрузки ресурсов только когда они действительно нужны.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ConditionalUseExampleDesc;

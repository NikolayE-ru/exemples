import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UserExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useContext, createContext } from 'react';
import { UserType } from './UserExampleType';

// Шаг 1: Создание контекста с возможностью null значения
const UserContext = createContext<UserType | null>(null);

// Шаг 2: Компонент-потребитель с проверкой на null
const UserProfile: FC = () => {
    const user = useContext(UserContext);

    // Проверяем, что данные пользователя загружены
    if (!user) {
        return <p className='message warning'>Данные пользователя не загружены</p>;
    }

    return (
        <div className='result-block'>
            <p>
                Имя: <span className='highlight'>{user.name}</span>
            </p>
            <p>
                Возраст: <span className='highlight'>{user.age}</span>
            </p>
        </div>
    );
};

const UserExample: FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [showUser, setShowUser] = useState<boolean>(false);

    const loadUser = () => {
        // Имитация загрузки данных пользователя
        setTimeout(() => {
            setUser({ name: 'Анна', age: 28 });
            setShowUser(true);
        }, 500);
    };

    const clearUser = () => {
        setUser(null);
        setShowUser(false);
    };

    return (
        <div className='result-block'>
            <h3>Пример 2: Данные пользователя</h3>
            {!showUser ? (
                <button className='btn' onClick={loadUser}>
                    Загрузить пользователя
                </button>
            ) : (
                <>
                    <button className='btn btn-secondary' onClick={clearUser}>
                        Очистить данные
                    </button>
                    {/* Шаг 3: Условное предоставление контекста */}
                    <UserContext.Provider value={user}>
                        <UserProfile />
                    </UserContext.Provider>
                </>
            )}
        </div>
    );
};

export default UserExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Данные пользователя с useContext'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура подключения useContext с условным рендерингом:</h4>

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
                    <h5>Шаги работы с useContext для данных пользователя:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Создание контекста с nullable типом:</strong>
                            <br />
                            <code>const UserContext = createContext{`<UserType | null>`}(null);</code>
                            <br />
                            <small>
                                • Тип <code>UserType | null</code> позволяет хранить null
                            </small>
                            <br />
                            <small>• Начальное значение - null (данные не загружены)</small>
                            <br />
                            <small>• Отражает реальный сценарий - данные могут отсутствовать</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Обработка nullable значений в потребителе:</strong>
                            <br />
                            <code>const user = useContext(UserContext);</code>
                            <br />
                            <code>if (!user) {'{ return <p>Данные не загружены</p>; }'}</code>
                            <br />
                            <small>• Всегда проверяем, что данные существуют</small>
                            <br />
                            <small>• Показываем fallback UI при отсутствии данных</small>
                            <br />
                            <small>• Защита от ошибок при обращении к свойствам</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Условное предоставление контекста:</strong>
                            <br />
                            <code>{`{showUser && (<UserContext.Provider value={user}>...</UserContext.Provider>)}`}</code>
                            <br />
                            <small>• Provider оборачивает компоненты только когда данные есть</small>
                            <br />
                            <small>• Предотвращает лишние перерисовки</small>
                            <br />
                            <small>• Более чистая архитектура приложения</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Динамическое обновление контекста:</strong>
                            <br />
                            <code>setUser({`{ name: 'Анна', age: 28 }`}); // Загрузка данных</code>
                            <br />
                            <code>setUser(null); // Очистка данных</code>
                            <br />
                            <small>• Контекст автоматически обновляет всех потребителей</small>
                            <br />
                            <small>• При setUser(null) потребители показывают fallback</small>
                            <br />
                            <small>• Полный цикл: загрузка → отображение → очистка</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Особенности этого подхода:</h5>
                <ul>
                    <li>
                        <strong>Null-safe дизайн</strong> - типовая система TypeScript помогает избежать ошибок
                    </li>
                    <li>
                        <strong>Условный рендеринг Provider</strong> - контекст предоставляется только когда нужен
                    </li>
                    <li>
                        <strong>Автоматическая синхронизация</strong> - все потребители получают обновления
                    </li>
                    <li>
                        <strong>Четкие состояния</strong> - данные либо загружены, либо нет, нет промежуточных состояний
                    </li>
                </ul>

                <h5>Паттерны для работы с nullable контекстом:</h5>
                <div style={{ background: '#f3e5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#7b1fa2' }}>✅ Рекомендуемые подходы:</h6>
                    <ul>
                        <li>
                            <strong>Ранний возврат</strong> - проверка в начале компонента, как в примере
                        </li>
                        <li>
                            <strong>Кастомный хук</strong> - создание хука с встроенной проверкой:
                        </li>
                        <pre style={{ background: '#e1bee7', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                            {`const useUser = () => {
    const user = useContext(UserContext);
    if (!user) throw new Error('useUser must be used within UserProvider');
    return user;
};`}
                        </pre>
                        <li>
                            <strong>Default значения</strong> - использование значений по умолчанию вместо null
                        </li>
                        <li>
                            <strong>Состояние загрузки</strong> - отдельный контекст для статуса загрузки
                        </li>
                    </ul>
                </div>

                <p>
                    <strong>Идеально для:</strong> данных пользователя, авторизации, профилей, любых данных, которые
                    могут загружаться асинхронно или отсутствовать.
                </p>
                <p>
                    <strong>Ключевое преимущество:</strong> централизованное управление состоянием пользователя с
                    автоматической синхронизацией всех компонентов, которые используют эти данные.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default UserExampleDesc;

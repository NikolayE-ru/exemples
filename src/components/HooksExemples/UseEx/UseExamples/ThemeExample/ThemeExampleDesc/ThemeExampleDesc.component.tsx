import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ThemeExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, createContext, use } from 'react';

// Шаг 1: Создание контекста с типизированным значением по умолчанию
const ThemeContext = createContext<'light' | 'dark'>('light');

// Компонент, который использует хук use для чтения контекста
const ThemeDisplay: FC = () => {
    // Шаг 2: Использование use для чтения контекста вместо useContext
    const theme = use(ThemeContext);

    return (
        <div className={\`theme-\${theme} result-block\`}>
            <p>
                Текущая тема (с использованием use): <span className='highlight'>{theme}</span>
            </p>
            <div className={theme === 'dark' ? 'dark-theme-preview' : 'light-theme-preview'}>
                {theme === 'dark' ? '🌙 Темная тема' : '☀️ Светлая тема'}
            </div>
        </div>
    );
};

const ThemeExample: FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className='result-block'>
            <h3>Пример 1: Чтение контекста с помощью use</h3>
            <button className='btn' onClick={toggleTheme}>
                Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
            </button>

            {/* Шаг 3: Оборачивание в Provider для передачи текущего значения */}
            <ThemeContext.Provider value={theme}>
                <ThemeDisplay />
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Чтение контекста через use'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения use для чтения контекста:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с use для контекста:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Создание типизированного контекста:</strong>
                            <br />
                            <code>const ThemeContext = createContext{`<'light' | 'dark'>`}('light');</code>
                            <br />
                            <small>• TypeScript тип ограничивает значения 'light' или 'dark'</small>
                            <br />
                            <small>• Значение по умолчанию - 'light'</small>
                            <br />
                            <small>• Контекст создается так же, как и для useContext</small>
                        </li>
                        <li className='step-item'>
                            <strong>Чтение контекста через use:</strong>
                            <br />
                            <code>const theme = use(ThemeContext);</code>
                            <br />
                            <small>
                                • Заменяет традиционный <code>useContext(ThemeContext)</code>
                            </small>
                            <br />
                            <small>• Возвращает текущее значение контекста</small>
                            <br />
                            <small>• Автоматически подписывается на изменения контекста</small>
                        </li>
                        <li className='step-item'>
                            <strong>Предоставление контекста через Provider:</strong>
                            <br />
                            <code>{`<ThemeContext.Provider value={theme}>`}</code>
                            <br />
                            <small>• Оборачиваем компоненты, которым нужен доступ к контексту</small>
                            <br />
                            <small>
                                • Передаем текущее значение темы через пропс <code>value</code>
                            </small>
                            <br />
                            <small>• Все потребители автоматически получают обновления</small>
                        </li>
                        <li className='step-item'>
                            <strong>Использование значения в компоненте:</strong>
                            <br />
                            <code>{`<div className={\`theme-\${theme}\`}>`}</code>
                            <br />
                            <small>• Динамически применяем CSS классы на основе темы</small>
                            <br />
                            <small>• Отображаем соответствующую иконку и текст</small>
                            <br />
                            <small>• Компонент перерисовывается при изменении темы</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Сравнение use и useContext:</h5>
                <div className='comparison-table-container'>
                    <h6 className='comparison-title'>🔄 use vs useContext:</h6>

                    <table className='comparison-table'>
                        <thead>
                            <tr className='table-header'>
                                <th>Аспект</th>
                                <th>useContext</th>
                                <th>use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Синтаксис</strong>
                                </td>
                                <td>
                                    <code>useContext(Context)</code>
                                </td>
                                <td>
                                    <code>use(Context)</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Условное использование</strong>
                                </td>
                                <td>❌ Нельзя в условиях</td>
                                <td>✅ Можно в условиях</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Циклы</strong>
                                </td>
                                <td>❌ Нельзя в циклах</td>
                                <td>✅ Можно в циклах</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>React версия</strong>
                                </td>
                                <td>✅ 16.8+</td>
                                <td>✅ 19+</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Функциональность</strong>
                                </td>
                                <td>Только контекст</td>
                                <td>Контекст + промисы</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Преимущества use для контекста:</h5>
                <div className='advantages-container'>
                    <h6 className='advantages-title'>🎯 Ключевые преимущества:</h6>

                    <p>
                        <strong>1. Условное чтение контекста:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const ConditionalComponent = () => {
    if (user.isAdmin) {
        const adminSettings = use(AdminContext);
        return <AdminPanel settings={adminSettings} />;
    }
    // use не вызывается для обычных пользователей
    return <UserPanel />;
};`}
                    </pre>

                    <p>
                        <strong>2. Использование в циклах:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const UserList = ({ userIds }) => {
    return userIds.map(id => {
        const user = use(UserContext); // Можно в цикле!
        return <UserCard key={id} user={user} />;
    });
};`}
                    </pre>

                    <p>
                        <strong>3. Единый API для разных ресурсов:</strong>
                    </p>
                    <pre className='code-example'>
                        {`// Один хук для разных целей
const MyComponent = () => {
    const theme = use(ThemeContext);     // Контекст
    const user = use(userPromise);       // Промис
    const data = use(dataResource);      // Ресурс
    // ...
};`}
                    </pre>
                </div>

                <h5>Миграция с useContext на use:</h5>
                <ul>
                    <li>
                        <strong>Прямая замена:</strong> <code>useContext(Context)</code> → <code>use(Context)</code>
                    </li>
                    <li>
                        <strong>Обратная совместимость:</strong> useContext продолжает работать
                    </li>
                    <li>
                        <strong>Постепенное внедрение:</strong> можно использовать оба подхода в одном проекте
                    </li>
                    <li>
                        <strong>TypeScript:</strong> типы работают одинаково хорошо с обоими хуками
                    </li>
                </ul>

                <p>
                    <strong>Рекомендация:</strong> Для новых проектов на React 19+ используйте <code>use</code>
                    вместо <code>useContext</code>, так как он предоставляет больше гибкости и является частью
                    современной экосистемы React.
                </p>
                <p>
                    <strong>Производительность:</strong> Оба подхода имеют одинаковую производительность, но use
                    открывает возможности для более продвинутых паттернов с условным рендерингом.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ThemeExampleDesc;

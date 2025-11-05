import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ThemeExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useContext, createContext } from 'react';
import { ThemeType } from './ThemeExampleType';

// Шаг 1: Создание контекста с начальным значением
const ThemeContext = createContext<ThemeType>('light');

// Шаг 2: Компонент-потребитель, использующий useContext
const ThemeDisplay: FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={\`theme-\${theme} result-block\`}>
            <p>
                Текущая тема: <span className='highlight'>{theme}</span>
            </p>
            <div className={theme === 'dark' ? 'dark-theme-preview' : 'light-theme-preview'}>
                {theme === 'dark' ? '🌙 Темная тема' : '☀️ Светлая тема'}
            </div>
        </div>
    );
};

// Шаг 3: Другой компонент, использующий тот же контекст
const CombinedContextComponent: FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={\`result-block theme-\${theme}\`}>
            <h3>Компонент с контекстом темы</h3>
            <p>
                Текущая тема: <span className='highlight'>{theme}</span>
            </p>
        </div>
    );
};

// Шаг 4: Провайдер контекста
const ThemeExample: FC = () => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        // Оборачиваем в Provider и передаем текущее значение
        <ThemeContext.Provider value={theme}>
            <div className='result-block'>
                <h3>Пример 1: Переключатель темы</h3>
                <button className='btn' onClick={toggleTheme}>
                    Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
                </button>
                <ThemeDisplay />
            </div>

            <div className={\`result-block theme-\${theme}\`}>
                <h3>Вложенные компоненты с контекстом</h3>
                <CombinedContextComponent />
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Работа с useContext'>
            <div className="description-container">
                <h4>Пошаговая процедура подключения useContext:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className="code-highlighter"
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className="steps-container">
                    <h5>Шаги работы с useContext:</h5>
                    <ol>
                        <li className="step-item">
                            <strong>Создание контекста:</strong>
                            <br />
                            <code>const ThemeContext = createContext{`<ThemeType>`}('light');</code>
                            <br />
                            <small>• Создаем контекст с типом TypeScript</small>
                            <br />
                            <small>• Указываем значение по умолчанию ('light')</small>
                            <br />
                            <small>• Экспортируем для использования в других компонентах</small>
                        </li>
                        <li className="step-item">
                            <strong>Оборачивание в Provider:</strong>
                            <br />
                            <code>{`<ThemeContext.Provider value={theme}>`}</code>
                            <br />
                            <small>• Оборачиваем компоненты, которым нужен доступ к контексту</small>
                            <br />
                            <small>• Передаем текущее значение через пропс value</small>
                            <br />
                            <small>• Все дочерние компоненты получат обновления</small>
                        </li>
                        <li className="step-item">
                            <strong>Использование useContext в компонентах:</strong>
                            <br />
                            <code>const theme = useContext(ThemeContext);</code>
                            <br />
                            <small>• В любом дочернем компоненте получаем значение</small>
                            <br />
                            <small>• Автоматическая подписка на изменения</small>
                            <br />
                            <small>• Перерисовка при изменении значения в Provider</small>
                        </li>
                        <li className="step-item">
                            <strong>Обновление контекста:</strong>
                            <br />
                            <code>setTheme(prev ={'>'} prev === 'light' ? 'dark' : 'light');</code>
                            <br />
                            <small>• Изменяем состояние в компоненте-провайдере</small>
                            <br />
                            <small>• Все потребители автоматически получают новое значение</small>
                            <br />
                            <small>• Не нужно передавать пропсы через множество компонентов</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования useContext:</h5>

                <div className="rules-container">
                    <h6 className="rules-title positive">✅ Когда использовать useContext:</h6>
                    <ul>
                        <li>
                            <strong>"Пропс-дриллинг"</strong> - когда нужно передавать данные через много уровней
                            компонентов
                        </li>
                        <li>
                            <strong>Глобальные состояния</strong> - тема, язык, пользователь, настройки
                        </li>
                        <li>
                            <strong>Часто используемые данные</strong> - которые нужны многим компонентам
                        </li>
                        <li>
                            <strong>Комплексные состояния</strong> - когда несколько компонентов работают с одними
                            данными
                        </li>
                    </ul>

                    <h6 className="rules-title negative">❌ Когда НЕ использовать useContext:</h6>
                    <ul>
                        <li>
                            <strong>Локальные состояния</strong> - используйте useState
                        </li>
                        <li>
                            <strong>Редко меняющиеся данные</strong> - которые используются 1-2 компонентами
                        </li>
                        <li>
                            <strong>Высокочастотные обновления</strong> - может вызвать лишние перерисовки
                        </li>
                        <li>
                            <strong>Простая передача пропсов</strong> - если компоненты находятся рядом в иерархии
                        </li>
                    </ul>
                </div>

                <h5>Преимущества useContext в этом примере:</h5>
                <ul>
                    <li>
                        <strong>Избегаем пропс-дриллинга</strong> - не передаем theme через каждый компонент
                    </li>
                    <li>
                        <strong>Централизованное управление</strong> - состояние темы в одном месте
                    </li>
                    <li>
                        <strong>Легкость добавления новых потребителей</strong> - просто используем useContext
                    </li>
                    <li>
                        <strong>Автоматические обновления</strong> - все компоненты синхронизированы
                    </li>
                </ul>

                <p>
                    <strong>Структура данных для useContext:</strong> идеально подходит для тем, языков,
                    пользовательских данных, настроек приложения и других глобальных состояний, которые используются во
                    многих компонентах.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ThemeExampleDesc;

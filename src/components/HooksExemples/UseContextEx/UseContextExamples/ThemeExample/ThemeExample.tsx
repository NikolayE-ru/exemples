import { FC, useState, useContext, createContext } from 'react';
import { ThemeType } from './ThemeExampleType';
import ThemeExampleDesc from './ThemeExampleDesc/ThemeExampleDesc';

// Создаем контекст для темы
const ThemeContext = createContext<ThemeType>('light');

// Компонент-потребитель темы
const ThemeDisplay: FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`theme-${theme} result-block`}>
            <p>
                Текущая тема: <span className='highlight'>{theme}</span>
            </p>
            <div className={theme === 'dark' ? 'dark-theme-preview' : 'light-theme-preview'}>
                {theme === 'dark' ? '🌙 Темная тема' : '☀️ Светлая тема'}
            </div>
        </div>
    );
};

// Компонент, который использует оба контекста
const CombinedContextComponent: FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`result-block theme-${theme}`}>
            <h3>Компонент с контекстом темы</h3>
            <p>
                Текущая тема: <span className='highlight'>{theme}</span>
            </p>
        </div>
    );
};

// Компонент для изменения темы
const ThemeExample: FC = () => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <div className='result-block'>
                    <h3>Пример 1: Переключатель темы</h3>
                    <button className='btn' onClick={toggleTheme}>
                        Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
                    </button>
                    <ThemeDisplay />
                </div>

                <div className={`result-block theme-${theme}`}>
                    <h3>Вложенные компоненты с контекстом</h3>
                    <CombinedContextComponent />
                </div>
            </ThemeContext.Provider>
            <ThemeExampleDesc />
        </>
    );
};

export default ThemeExample;

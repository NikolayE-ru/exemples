import { FC, useState, createContext, use } from 'react';
import ThemeExampleDesc from './ThemeExampleDesc/ThemeExampleDesc.component';

// Создаем контекст для примера с use
const ThemeContext = createContext<'light' | 'dark'>('light');

// Компонент, который использует хук use для чтения контекста
const ThemeDisplay: FC = () => {
    // В React 19 можно использовать use вместо useContext
    const theme = use(ThemeContext);

    return (
        <div className={`theme-${theme} result-block`}>
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
        <>
            <div className='result-block'>
                <h3>Пример 1: Чтение контекста с помощью use</h3>
                <button className='btn' onClick={toggleTheme}>
                    Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
                </button>
                <ThemeContext.Provider value={theme}>
                    <ThemeDisplay />
                </ThemeContext.Provider>
            </div>
            <ThemeExampleDesc />
        </>
    );
};

export default ThemeExample;

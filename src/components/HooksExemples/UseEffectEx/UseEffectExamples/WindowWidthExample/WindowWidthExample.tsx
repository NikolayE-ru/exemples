import { FC, useState, useEffect } from 'react';
import WindowWidthExampleDesc from './WindowWidthExampleDesc/WindowWidthExampleDesc';

const WindowWidthExample: FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    // Подписка на события
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Функция очистки
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 2: Отслеживание размера окна</h3>
                <p>
                    Текущая ширина окна: <span className='highlight'>{windowWidth}px</span>
                </p>
                <p className='message info'>Измените размер окна браузера</p>
            </div>
            <WindowWidthExampleDesc />
        </>
    );
};

export default WindowWidthExample;

import { FC, useState, useCallback, memo } from 'react';
import ComparisonExampleDesc from './ComparisonExampleDesc/ComparisonExampleDesc';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

// Компонент кнопки с memo - перерисовывается только если пропсы изменились
const Button = memo(({ onClick, label }: ButtonProps) => {
    const renderTime = new Date().toLocaleTimeString();

    return (
        <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <button className='btn' onClick={onClick}>
                {label}
            </button>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Последняя перерисовка: {renderTime}</div>
        </div>
    );
});

const ComparisonExample: FC = () => {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');

    // Функция без useCallback - создается заново при каждом рендере
    const handleClickWithoutCallback = () => {
        setCount1(count1 + 1);
    };

    // Функция с useCallback - сохраняется между рендерами
    const handleClickWithCallback = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 1: Сравнение с useCallback и без</h3>

                <p>
                    Счетчик 1 (без useCallback): <span className='highlight'>{count1}</span>
                </p>
                <Button onClick={handleClickWithoutCallback} label='Увеличить счетчик 1' />

                <p>
                    Счетчик 2 (с useCallback): <span className='highlight'>{count2}</span>
                </p>
                <Button onClick={handleClickWithCallback} label='Увеличить счетчик 2' />

                <div className='form-group'>
                    <label htmlFor='test-input'>Тестовое поле (влияет на перерисовку):</label>
                    <input
                        id='test-input'
                        type='text'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='Введите текст'
                    />
                </div>

                <p className='message info'>
                    При вводе текста в поле Button 1 будет перерисовываться, а Button 2 - нет
                </p>
            </div>
            <ComparisonExampleDesc />
        </>
    );
};

export default ComparisonExample;

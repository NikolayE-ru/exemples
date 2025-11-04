import { FC, useState } from 'react';
import CounterExampleDesc from './CounterExampleDesc/CounterExampleDesc';

const CounterExample: FC = () => {
    // Простой счетчик
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 1: Счетчик</h3>
                <p>
                    Текущее значение: <span className='highlight'>{count}</span>
                </p>
                <button className='btn' onClick={increment}>
                    +
                </button>
                <button className='btn btn-secondary' onClick={decrement}>
                    -
                </button>
            </div>
            <CounterExampleDesc />
        </>
    );
};

export default CounterExample;

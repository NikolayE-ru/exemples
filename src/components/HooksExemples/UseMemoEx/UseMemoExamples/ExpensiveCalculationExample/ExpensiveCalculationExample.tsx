import { FC, useState, useMemo, useEffect } from 'react';
import '@/components/HooksExemples/UseMemoEx/UseMemoExample.scss';
import ExpensiveCalculationExampleDesc from './ExpensiveCalculationExampleDesc/ExpensiveCalculationExampleDesc';

// Функция для "дорогих" вычислений
const expensiveCalculation = (num: number): number => {
    // Имитация долгих вычислений
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += num;
    }
    return result / 100000000;
};

const ExpensiveCalculationExample: FC = () => {
    const [count, setCount] = useState<number>(1);
    const [renderCount, setRenderCount] = useState<number>(0);
    const [calculationTime, setCalculationTime] = useState<number>(0);

    // Мемоизированный результат "дорогих" вычислений
    const memoizedValue = useMemo(() => {
        const startTime = performance.now();
        const result = expensiveCalculation(count);
        const endTime = performance.now();
        setCalculationTime(endTime - startTime);
        return result;
    }, [count]);

    // Счетчик перерисовок
    useEffect(() => {
        setRenderCount((prev) => prev + 1);
    }, []);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 1: Оптимизация дорогих вычислений с useMemo</h3>

                <div className='expense-calc-container'>
                    <div className='expense-calc-panel'>
                        <h4>Управление</h4>
                        <p>
                            Текущее число: <span className='highlight'>{count}</span>
                        </p>
                        <button className='btn' onClick={() => setCount(count + 1)}>
                            Увеличить число
                        </button>
                    </div>

                    <div className='expense-calc-panel'>
                        <h4>Результаты</h4>
                        <p>
                            Результат вычислений: <span className='highlight'>{memoizedValue.toFixed(4)}</span>
                        </p>
                        <p>
                            Время вычисления: <span className='highlight'>{calculationTime.toFixed(2)} ms</span>
                        </p>
                        <p>
                            Количество перерисовок: <span className='highlight'>{renderCount}</span>
                        </p>
                    </div>
                </div>

                <div className='expense-calc-info'>
                    <h4>🔍 Что происходит:</h4>
                    <ul>
                        <li>
                            <strong>useMemo</strong> кэширует результат вычислений
                        </li>
                        <li>
                            Вычисления выполняются только когда меняется <code>count</code>
                        </li>
                        <li>
                            При повторных рендерах с тем же <code>count</code> - используется кэшированное значение
                        </li>
                        <li>Время вычисления показывает "стоимость" операции</li>
                    </ul>
                </div>

                <p className='message info'>
                    Попробуйте быстро нажимать "Увеличить число" - вычисления выполняются только при изменении числа
                </p>
            </div>
            <ExpensiveCalculationExampleDesc />
        </>
    );
};

export default ExpensiveCalculationExample;

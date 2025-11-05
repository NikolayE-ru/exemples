import { FC } from 'react';
import ExpensiveCalculationExample from './UseMemoExamples/ExpensiveCalculationExample/ExpensiveCalculationExample.component';
import ProductFilterExample from './UseMemoExamples/ProductFilterExample/ProductFilterExample.component';
import './UseMemoExample.style.scss';

const UseMemoExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useMemo - Хук мемоизации</h2>
                <p>Мемоизирует результат вычислений и пересчитывает его только при изменении зависимостей</p>
                <p>
                    Простыми словами: Вы натерли на терке овощи для салата и сложили в миску. Если сами овощи не
                    поменялись, вы не будете тереть их заново каждый раз, когда кто-то заходит на кухню. Вы используете
                    заготовку.
                </p>
                <p>Как работает:</p>
                <p>- Мемоизирует результат вычислений.</p>
                <p>- Пересчитывает значение только тогда, когда одна из зависимостей изменилась.</p>
                <p>- Используется для оптимизации дорогих вычислений.</p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</pre>
                </div>

                <ExpensiveCalculationExample />
                <ProductFilterExample />
            </div>
        </div>
    );
};

export default UseMemoExample;

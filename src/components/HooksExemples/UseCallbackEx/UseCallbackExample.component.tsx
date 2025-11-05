import { FC } from 'react';
import ComparisonExample from './UseCallbackExamples/ComparisonExample/ComparisonExample.component';
import TodoListExample from './UseCallbackExamples/TodoListExample/TodoListExample.component';
import './UseCallbackExample.style.scss';

const UseCallbackExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useCallback - Хук мемоизации функций</h2>
                <p>Возвращает мемоизированную функцию, которая изменяется только при изменении зависимостей</p>
                <p>
                    Простыми словами: У вас есть рецепт блюда. Если ингредиенты не изменились, вы не будете переписывать
                    рецепт на новом листе бумаги для каждого гостя. Вы даете копию одного и того же рецепта.
                </p>
                <p>Как работает:</p>
                <p>- Мемоизирует саму функцию, а не ее результат (в отличие от useMemo).</p>
                <p>- Возвращает одну и ту же функцию, пока зависимости не изменились.</p>
                <p>
                    - Критически важен, когда вы передаете функции в дочерние компоненты, обернутые в React.memo, чтобы
                    избежать их лишних перерисовок.
                </p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);`}</pre>
                </div>

                <ComparisonExample />
                <TodoListExample />
            </div>
        </div>
    );
};

export default UseCallbackExample;

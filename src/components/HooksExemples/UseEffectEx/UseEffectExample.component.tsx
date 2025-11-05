import { FC } from 'react';
import CounterExample from './UseEffectExamples/CounterExample/CounterExample.component';
import WindowWidthExample from './UseEffectExamples/WindowWidthExample/WindowWidthExample.component';
import DataFetchingExample from './UseEffectExamples/DataFetchingExample/DataFetchingExample.component';
import './UseEffectExample.style.scss';

const UseEffectExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useEffect - Хук эффектов</h2>
                <p>Позволяет выполнять побочные эффекты в функциональных компонентах.</p>
                <p>
                    Простыми словами: Это духовка, которая выполняет задачу (например, запекает пирог) после того, как
                    повар закончил раскладывать ингредиенты на столе (после рендера). Может "очищать" за собой, как
                    таймер, который выключает духовку.
                </p>
                <p>Как работает:</p>
                <p>- Принимает функцию (эффект) и массив зависимостей (dependencies).</p>
                <p>- Выполняет функцию после рендера компонента.</p>
                <p>- Если массив зависимостей пустой [ ], эффект запустится только один раз (при монтировании).</p>
                <p>- Если в массиве есть переменные, эффект будет запускаться при их изменении.</p>
                <p>
                    - Может возвращать функцию очистки, которая выполнится при размонтировании компонента или перед
                    следующим запуском эффекта.
                </p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`useEffect(() => {
  // Эффект
  return () => {
    // Очистка
  };
}, [dependencies]);`}</pre>
                </div>

                <CounterExample />
                <WindowWidthExample />
                <DataFetchingExample />
            </div>
        </div>
    );
};

export default UseEffectExample;

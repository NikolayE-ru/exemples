import { FC } from 'react';
import ThemeExample from './UseExamples/ThemeExample/ThemeExample';
import PromiseExample from './UseExamples/PromiseExample/PromiseExample';
import ConditionalUseExample from './UseExamples/ConditionalUseExample/ConditionalUseExample';
import './UseExample.scss';

const UseExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>use - Универсальный хук</h2>
                <p>Новый хук, который может читать контекст и "разворачивать" промисы</p>
                <p>Простыми словами: Это новый, более удобный и мощный инструмент, который может делать многое. Его можно сравнить с универсальным кухонным ножом. Пока что он умеет удобно "разворачивать" Промисы и Контексты.</p>
                <p>Как работает:</p>
                <p>Может использоваться внутри условий и циклов (в отличие от других хуков).</p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`// Для чтения контекста
const value = use(Context);

// Для работы с промисами
const data = use(promise);`}</pre>
                </div>

                <ThemeExample />
                <PromiseExample />
                <ConditionalUseExample />
            </div>
        </div>
    );
};

export default UseExample;

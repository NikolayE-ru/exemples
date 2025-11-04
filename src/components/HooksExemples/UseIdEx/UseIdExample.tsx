import { FC } from 'react';
import IdComparisonExample from './UseIdExamples/IdComparisonExample/IdComparisonExample';
import RegistrationFormExample from './UseIdExamples/RegistrationFormExample/RegistrationFormExample';
import './UseIdExample.scss';

const UseIdExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useId - Хук для генерации уникальных ID</h2>
                <p>Генерирует уникальный ID, который остается стабильным между рендерами</p>
                <p>Простыми словами: Это аппарат, который выдает бумажные номерки в очереди. Каждый номерок уникален. Идеально для связывания label и input в формах.</p>
                <p>Как работает:</p>
                <p>Генерирует уникальный ID, который остается стабильным между рендерами.</p>
                <p>Не используйте для ключей в списках! Для ключей используйте данные из вашего API.</p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const id = useId();`}</pre>
                </div>

                <IdComparisonExample />
                <RegistrationFormExample />
            </div>
        </div>
    );
};

export default UseIdExample;

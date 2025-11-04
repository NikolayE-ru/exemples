import { FC } from 'react';
import CounterExample from './UseStateExamples/CounterExample/CounterExample';
import ObjectExample from './UseStateExamples/ObjectExample/ObjectExample';
import ArrayExample from './UseStateExamples/ArrayExample/ArrayExample';
import BooleanExample from './UseStateExamples/BooleanExample/BooleanExample';
import './UseStateExample.scss';

const UseStateExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useState - Хук состояния</h2>
                <p>Позволяет добавлять состояние в функциональные компоненты</p>
                <p>
                    Простыми словами: Это как кухонные весы, которые показывают текущий вес продукта и дают кнопку,
                    чтобы его изменить.
                </p>
                <p>Как работает:</p>
                <p>- Возвращает два значения: текущее состояние и функцию для его изменения. </p>
                <p>
                    - Когда состояние меняется, компонент "перерисовывается" (переваривается заново) с новыми данными.
                </p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const [state, setState] = useState(initialValue);`}</pre>
                </div>

                <CounterExample />
                <ObjectExample />
                <ArrayExample />
                <BooleanExample />
            </div>
        </div>
    );
};

export default UseStateExample;

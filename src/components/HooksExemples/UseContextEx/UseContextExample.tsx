import { FC } from 'react';
import ThemeExample from './UseContextExamples/ThemeExample/ThemeExample';
import UserExample from './UseContextExamples/UserExample/UserExample';
import './UseContextExample.scss';

const UseContextExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useContext - Хук контекста</h2>
                <p>Позволяет передавать данные через дерево компонентов без пропсов</p>
                <p>
                    Простыми словами: Это общая кладовая на кухне. Вместо того чтобы передавать муку, соль, сахар через
                    десять рук (пропсы), любой компонент может "подойти" к кладовой и взять что нужно.
                </p>
                <p>Как работает:</p>
                <p>- Принимает объект контекста (созданный через React.createContext).</p>
                <p>
                    - Возвращает текущее значение контекста, которое определяется ближайшим
                    <code>{`<MyContext.Provider value={...}/>`}</code> выше по дереву.
                </p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const value = useContext(MyContext);`}</pre>
                </div>

                <ThemeExample />
                <UserExample />
            </div>
        </div>
    );
};

export default UseContextExample;

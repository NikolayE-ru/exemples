import { FC, useState } from 'react';
import UseStateExample from '../components/HooksExemples/UseStateEx/UseStateExample.component';
import UseEffectExample from '../components/HooksExemples/UseEffectEx/UseEffectExample.component';
import UseContextExample from '../components/HooksExemples/UseContextEx/UseContextExample.component';
import UseMemoExample from '../components/HooksExemples/UseMemoEx/UseMemoExample.component';
import UseCallbackExample from '../components/HooksExemples/UseCallbackEx/UseCallbackExample.component';
import UseOptimisticExample from '../components/HooksExemples/UseOptimisticEx/UseOptimisticExample.component';
import UseFormStatusExample from '../components/HooksExemples/UseFormStatusEx/UseFormStatusExample.component';
import UseIdExample from '../components/HooksExemples/UseIdEx/UseIdExample.component';
import UseExample from '../components/HooksExemples/UseEx/UseExample.component';
import './HooksDemo.style.scss';
import { HookExample } from './HooksDemo.type';

export const HooksShowcase: FC = () => {
    const [activeHook, setActiveHook] = useState<HookExample>('useState');

    const renderHookExample = () => {
        switch (activeHook) {
            case 'useState':
                return <UseStateExample />;
            case 'useEffect':
                return <UseEffectExample />;
            case 'useContext':
                return <UseContextExample />;
            case 'useMemo':
                return <UseMemoExample />;
            case 'useCallback':
                return <UseCallbackExample />;
            case 'useOptimistic':
                return <UseOptimisticExample />;
            case 'useFormStatus':
                return <UseFormStatusExample />;
            case 'useId':
                return <UseIdExample />;
            case 'use':
                return <UseExample />;
            default:
                return <UseStateExample />;
        }
    };

    return (
        <div className='hooks-demo'>
            <header className='demo-header'>
                <h1>Демонстрация хуков React</h1>
                <p>Простые примеры работы с хуками React 19</p>
                <p>
                    Представьте, что ваш React-компонент — это кухня. Хуки — это кухонные приборы (миксер, блендер,
                    духовка), которые вы "подключаете" к своей кухне, чтобы легко готовить сложные блюда
                    (функциональность). До хуков были только плиты и кастрюли (классовые компоненты), готовить было
                    сложнее.
                </p>
            </header>

            <nav className='demo-nav'>
                {(
                    [
                        'useState',
                        'useEffect',
                        'useContext',
                        'useMemo',
                        'useCallback',
                        'useOptimistic',
                        'useFormStatus',
                        'useId',
                        'use',
                    ] as HookExample[]
                ).map((hook) => (
                    <button
                        key={hook}
                        className={`nav-button ${activeHook === hook ? 'active' : ''}`}
                        onClick={() => setActiveHook(hook)}
                    >
                        {hook}
                    </button>
                ))}
            </nav>

            <main className='demo-content'>{renderHookExample()}</main>
        </div>
    );
};

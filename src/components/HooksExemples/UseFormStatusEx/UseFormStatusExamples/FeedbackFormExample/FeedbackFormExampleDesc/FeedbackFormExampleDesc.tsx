import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FeedbackFormExampleDesc: FC = () => {
    const codeExample = `import { FC } from 'react';
import { useFormStatus } from 'react-dom';

// Компонент кнопки отправки формы
const SubmitButton: FC = () => {
    // Шаг 1: Использование useFormStatus внутри компонента формы
    const { pending } = useFormStatus();

    return (
        <button type='submit' className='btn' disabled={pending} aria-disabled={pending}>
            {pending ? 'Отправка...' : 'Отправить'}
        </button>
    );
};

// Компонент индикатора прогресса
const ProgressIndicator: FC = () => {
    // Шаг 2: Использование useFormStatus в другом компоненте той же формы
    const { pending } = useFormStatus();

    if (!pending) return null;

    return (
        <div className='progress-bar'>
            <div className='progress-indicator'></div>
        </div>
    );
};

// Форма обратной связи
const FeedbackFormExample: FC = () => {
    // Шаг 3: Создание асинхронной функции-обработчика формы
    async function handleSubmit(formData: FormData) {
        // Имитация отправки формы на сервер
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // В реальном приложении здесь был бы код для отправки данных на сервер
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        alert(\`Данные отправлены:
Имя: \${name}
Email: \${email}
Сообщение: \${message}\`);
    }

    return (
        // Шаг 4: Создание формы с action и обертка компонентов с useFormStatus
        <form action={handleSubmit} className='feedback-form'>
            <h3>Форма обратной связи</h3>

            <div className='form-group'>
                <label htmlFor='name'>Имя:</label>
                <input type='text' id='name' name='name' placeholder='Введите ваше имя' required />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' placeholder='Введите ваш email' required />
            </div>

            <div className='form-group'>
                <label htmlFor='message'>Сообщение:</label>
                <textarea id='message' name='message' rows={4} placeholder='Введите ваше сообщение' required></textarea>
            </div>

            {/* Компоненты с useFormStatus должны быть внутри формы */}
            <ProgressIndicator />

            <div className='form-actions'>
                <SubmitButton />
                <button type='reset' className='btn btn-secondary'>
                    Очистить
                </button>
            </div>
        </form>
    );
};

export default FeedbackFormExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Работа с useFormStatus'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useFormStatus:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useFormStatus:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Импорт хука из react-dom:</strong>
                            <br />
                            <code>import {`useFormStatus `} from 'react-dom';</code>
                            <br />
                            <small>• Хук доступен в пакете react-dom, а не react</small>
                            <br />
                            <small>• Предназначен для работы с Server Actions и формами</small>
                            <br />
                            <small>• Требует React 19+</small>
                        </li>
                        <li className='step-item'>
                            <strong>Использование внутри компонента формы:</strong>
                            <br />
                            <code>const {`pending `} = useFormStatus();</code>
                            <br />
                            <small>
                                • Возвращает объект с свойством <code>pending</code>
                            </small>
                            <br />
                            <small>
                                • <code>pending = true</code> когда форма отправляется
                            </small>
                            <br />
                            <small>
                                • <code>pending = false</code> когда форма неактивна
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Создание формы с action:</strong>
                            <br />
                            <code>{`<form action={handleSubmit}>`}</code>
                            <br />
                            <small>
                                • Форма должна иметь пропс <code>action</code> с функцией
                            </small>
                            <br />
                            <small>• Функция должна быть асинхронной (async)</small>
                            <br />
                            <small>• React автоматически управляет состоянием отправки</small>
                        </li>
                        <li className='step-item'>
                            <strong>Размещение компонентов внутри формы:</strong>
                            <br />
                            <code>{`<form><SubmitButton /></form>`}</code>
                            <br />
                            <small>• Компоненты с useFormStatus должны быть прямыми потомками формы</small>
                            <br />
                            <small>• Не работает если компонент находится вне формы</small>
                            <br />
                            <small>• Можно использовать в нескольких компонентах одной формы</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования useFormStatus:</h5>

                <div className='rules-container'>
                    <h6 className='rules-title-positive'>✅ Когда использовать useFormStatus:</h6>
                    <ul>
                        <li>
                            <strong>Индикаторы загрузки</strong> - показывать прогресс отправки формы
                        </li>
                        <li>
                            <strong>Блокировка кнопок</strong> - предотвращать повторные отправки
                        </li>
                        <li>
                            <strong>Динамический UI</strong> - менять интерфейс во время отправки
                        </li>
                        <li>
                            <strong>Формы с Server Actions</strong> - работа с серверными действиями
                        </li>
                        <li>
                            <strong>Доступность</strong> - улучшение ARIA атрибутов во время загрузки
                        </li>
                    </ul>

                    <h6 className='rules-title-negative'>❌ Когда НЕ использовать useFormStatus:</h6>
                    <ul>
                        <li>
                            <strong>Вне форм</strong> - хук работает только внутри компонентов формы
                        </li>
                        <li>
                            <strong>Для обычных состояний</strong> - используйте useState
                        </li>
                        <li>
                            <strong>Для произвольных загрузок</strong> - используйте useState или useTransition
                        </li>
                        <li>
                            <strong>С формами без action</strong> - требуется пропс action у формы
                        </li>
                        <li>
                            <strong>В классовых компонентах</strong> - работает только в функциональных
                        </li>
                    </ul>
                </div>

                <h5>Свойства, возвращаемые useFormStatus:</h5>
                <div className='status-properties-container'>
                    <h6 className='status-properties-title'>📊 Объект статуса формы:</h6>

                    <table className='status-table'>
                        <thead>
                            <tr>
                                <th>Свойство</th>
                                <th>Тип</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code>pending</code>
                                </td>
                                <td>boolean</td>
                                <td>true когда форма отправляется, false когда нет</td>
                            </tr>
                            <tr>
                                <td>
                                    <code>data</code>
                                </td>
                                <td>FormData</td>
                                <td>данные формы, которые отправляются</td>
                            </tr>
                            <tr>
                                <td>
                                    <code>method</code>
                                </td>
                                <td>string</td>
                                <td>HTTP метод (GET, POST, etc.)</td>
                            </tr>
                            <tr>
                                <td>
                                    <code>action</code>
                                </td>
                                <td>Function</td>
                                <td>функция, переданная в action формы</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Практические примеры использования:</h5>
                <div className='examples-container'>
                    <h6 className='examples-title'>🎯 Распространенные сценарии:</h6>

                    <p>
                        <strong>1. Умная кнопка отправки:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={pending ? 'loading' : ''}
        >
            {pending ? (
                <>
                    <Spinner />
                    Отправка...
                </>
            ) : (
                'Отправить'
            )}
        </button>
    );
};`}
                    </pre>

                    <p>
                        <strong>2. Индикатор прогресса:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const ProgressIndicator = () => {
    const { pending } = useFormStatus();
    return pending ? <div className="progress-bar" /> : null;
};`}
                    </pre>

                    <p>
                        <strong>3. Блокировка полей формы:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const FormFields = () => {
    const { pending } = useFormStatus();
    return (
        <fieldset disabled={pending}>
            <input name="email" />
            <input name="password" />
        </fieldset>
    );
};`}
                    </pre>
                </div>

                <h5>Особенности и ограничения:</h5>
                <ul>
                    <li>
                        <strong>Только для потомков формы:</strong> компонент должен быть прямым потомком формы
                    </li>
                    <li>
                        <strong>Требует Server Actions:</strong> оптимально работает с асинхронными server actions
                    </li>
                    <li>
                        <strong>Автоматическое управление состоянием:</strong> React сам управляет состоянием pending
                    </li>
                    <li>
                        <strong>Улучшенный UX:</strong> упрощает создание интерактивных форм с обратной связью
                    </li>
                </ul>

                <p>
                    <strong>Важно:</strong> useFormStatus является частью React Server Components экосистемы и лучше
                    всего работает в комбинации с Server Actions для полноценного управления состоянием форм.
                </p>
                <p>
                    <strong>Производительность:</strong> Хук оптимизирован для работы с Concurrent React и не вызывает
                    лишних перерисовок компонентов.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default FeedbackFormExampleDesc;

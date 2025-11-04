import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RegistrationFormExampleDesc: FC = () => {
    const codeExample = `import { FC, useId } from 'react';

interface Option {
    value: string;
    label: string;
}

// Компонент поля ввода с автоматически сгенерированным ID
const InputField: FC<{ label: string; type?: string; placeholder?: string }> = ({ 
    label, 
    type = 'text', 
    placeholder 
}) => {
    // Шаг 1: Генерация уникального ID для простого поля ввода
    const id = useId();

    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} placeholder={placeholder} />
        </div>
    );
};

// Компонент для радиокнопок
const RadioGroup: FC<{ options: Option[], name: string, label: string }> = ({
    options,
    name,
    label,
}) => {
    // Шаг 2: Генерация базового ID для группы радиокнопок
    const groupId = useId();

    return (
        <div className='form-group'>
            <fieldset id={groupId}>
                <legend>{label}:</legend>
                {options.map((option, index) => {
                    // Шаг 3: Создание производных ID для каждой опции
                    const optionId = \`\${groupId}-\${option.value}\`;

                    return (
                        <div key={option.value} className='radio-option'>
                            <input
                                type='radio'
                                id={optionId}
                                name={name}
                                value={option.value}
                                defaultChecked={index === 0}
                            />
                            <label htmlFor={optionId}>{option.label}</label>
                        </div>
                    );
                })}
            </fieldset>
        </div>
    );
};

// Компонент для чекбоксов
const CheckboxGroup: FC<{ options: Option[], label: string }> = ({ options, label }) => {
    // Шаг 4: Генерация ID для группы чекбоксов
    const groupId = useId();

    return (
        <div className='form-group'>
            <fieldset id={groupId}>
                <legend>{label}:</legend>
                {options.map((option) => {
                    // Шаг 5: Создание уникальных ID для каждого чекбокса
                    const optionId = \`\${groupId}-\${option.value}\`;

                    return (
                        <div key={option.value} className='checkbox-option'>
                            <input type='checkbox' id={optionId} name={option.value} value={option.value} />
                            <label htmlFor={optionId}>{option.label}</label>
                        </div>
                    );
                })}
            </fieldset>
        </div>
    );
};

// Компонент формы регистрации
const RegistrationFormExample: FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Форма отправлена!');
    };

    return (
        <div className='result-block'>
            <h3>Пример 2. Использование в форме</h3>
            <p className='message info'>
                Все поля формы имеют уникальные ID, сгенерированные с помощью useId
            </p>
            <form onSubmit={handleSubmit} className='registration-form'>
                <h3>Форма регистрации</h3>

                {/* Шаг 6: Использование компонентов с автоматической генерацией ID */}
                <InputField label='Имя' placeholder='Введите ваше имя' />
                <InputField label='Email' type='email' placeholder='Введите ваш email' />
                <InputField label='Пароль' type='password' placeholder='Введите пароль' />

                <RadioGroup
                    options={[
                        { value: 'male', label: 'Мужской' },
                        { value: 'female', label: 'Женский' },
                        { value: 'other', label: 'Другое' },
                    ]}
                    name='gender'
                    label='Пол'
                />

                <CheckboxGroup
                    options={[
                        { value: 'terms', label: 'Я согласен с условиями использования' },
                        { value: 'newsletter', label: 'Хочу получать рассылку' },
                    ]}
                    label='Дополнительно'
                />

                <div className='form-actions'>
                    <button type='submit' className='btn'>
                        Зарегистрироваться
                    </button>
                    <button type='reset' className='btn btn-secondary'>
                        Очистить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationFormExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Использование useId в форме регистрации'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура подключения useId в сложной форме:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    customStyle={{
                        borderRadius: '8px',
                        fontSize: '14px',
                        marginTop: '15px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div style={{ marginTop: '20px' }}>
                    <h5>Шаги работы с useId в компонентах формы:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Простое поле ввода (InputField):</strong>
                            <br />
                            <code>const id = useId();</code>
                            <br />
                            <small>• Каждый InputField получает уникальный ID</small>
                            <br />
                            <small>
                                • Связывает <code>label</code> и <code>input</code> через <code>htmlFor</code> и{' '}
                                <code>id</code>
                            </small>
                            <br />
                            <small>• Гарантирует доступность и правильную работу с screen readers</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Группа радиокнопок (RadioGroup):</strong>
                            <br />
                            <code>const groupId = useId();</code>
                            <br />
                            <code>{`const optionId = \${groupId}-\${option.value}`}</code>
                            <br />
                            <small>• Базовый ID для всей группы радиокнопок</small>
                            <br />
                            <small>• Производные ID для каждой отдельной кнопки</small>
                            <br />
                            <small>• Сохраняет семантическую связь между элементами группы</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Группа чекбоксов (CheckboxGroup):</strong>
                            <br />
                            <code>const groupId = useId();</code>
                            <br />
                            <code>{`const optionId = \${groupId}-\${option.value}`}</code>
                            <br />
                            <small>• Аналогичный подход для группы чекбоксов</small>
                            <br />
                            <small>• Каждый чекбокс получает уникальный ID</small>
                            <br />
                            <small>• Позволяет независимое управление каждым чекбоксом</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Композиция формы:</strong>
                            <br />
                            <code>{`<InputField label='Имя' />`}</code>
                            <br />
                            <code>{`<RadioGroup options={[...]} />`}</code>
                            <br />
                            <small>• Каждый компонент независимо генерирует свои ID</small>
                            <br />
                            <small>• Нет конфликтов между разными типами полей</small>
                            <br />
                            <small>• Форма остается семантически корректной</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Преимущества использования useId в переиспользуемых компонентах:</h5>
                <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#1565c0' }}>🚀 Ключевые преимущества:</h6>

                    <ul>
                        <li>
                            <strong>Автоматическая уникальность:</strong> каждый экземпляр компонента получает
                            уникальные ID, даже если используется многократно
                        </li>
                        <li>
                            <strong>SSR совместимость:</strong> ID одинаковы на сервере и клиенте, что предотвращает
                            hydration mismatches
                        </li>
                        <li>
                            <strong>Упрощение разработки:</strong> не нужно передавать ID через пропсы или управлять ими
                            вручную
                        </li>
                        <li>
                            <strong>Безопасность композиции:</strong> компоненты можно свободно комбинировать без риска
                            конфликтов ID
                        </li>
                        <li>
                            <strong>Улучшенная доступность:</strong> правильная связь между label и input улучшает опыт
                            для пользователей скринридеров
                        </li>
                    </ul>
                </div>

                <h5>Паттерны генерации ID для разных сценариев:</h5>
                <div style={{ background: '#e8f5e8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#2e7d32' }}>🎯 Различные подходы к использованию useId:</h6>

                    <p>
                        <strong>1. Простые поля (один useId на компонент):</strong>
                    </p>
                    <pre style={{ background: '#c8e6c9', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const TextInput = ({ label }) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
        </div>
    );
};`}
                    </pre>

                    <p>
                        <strong>2. Группы элементов (useId + суффиксы):</strong>
                    </p>
                    <pre style={{ background: '#c8e6c9', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const RadioGroup = ({ options }) => {
    const baseId = useId();
    return options.map((option, index) => (
        <div key={option.value}>
            <input 
                id={\`\${baseId}-\${index}\`} 
                type="radio" 
            />
            <label htmlFor={\`\${baseId}-\${index}\`}>
                {option.label}
            </label>
        </div>
    ));
};`}
                    </pre>

                    <p>
                        <strong>3. Сложные компоненты (несколько useId):</strong>
                    </p>
                    <pre style={{ background: '#c8e6c9', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const ComplexField = ({ label, description }) => {
    const inputId = useId();
    const descriptionId = useId();
    return (
        <div>
            <label htmlFor={inputId}>{label}</label>
            <input 
                id={inputId} 
                aria-describedby={descriptionId}
            />
            <span id={descriptionId}>{description}</span>
        </div>
    );
};`}
                    </pre>
                </div>

                <h5>Структура генерируемых ID и их семантика:</h5>
                <ul>
                    <li>
                        <strong>Формат ID:</strong> <code>:r1:</code>, <code>:r2:</code>, <code>:r3:</code> и т.д.
                    </li>
                    <li>
                        <strong>Уникальность:</strong> каждый вызов useId() гарантированно возвращает уникальный
                        идентификатор
                    </li>
                    <li>
                        <strong>Стабильность:</strong> ID остаются одинаковыми между рендерами для одного компонента
                    </li>
                    <li>
                        <strong>Совместимость:</strong> работают с HTML5 валидацией, CSS, JavaScript и инструментами
                        тестирования
                    </li>
                </ul>

                <h5>Лучшие практики для форм с useId:</h5>
                <ul>
                    <li>
                        <strong>Используйте для связки label-input:</strong> это основное предназначение useId
                    </li>
                    <li>
                        <strong>Создавайте производные ID для групп:</strong> как показано в RadioGroup и CheckboxGroup
                    </li>
                    <li>
                        <strong>Не используйте для ключей списков:</strong> для ключей используйте данные из вашего API
                    </li>
                    <li>
                        <strong>Тестируйте доступность:</strong> убедитесь, что связь между элементами работает
                        правильно
                    </li>
                    <li>
                        <strong>Документируйте компоненты:</strong> указывайте, что компонент использует автоматическую
                        генерацию ID
                    </li>
                </ul>

                <p>
                    <strong>Производительность:</strong> useId работает на этапе рендеринга и не вызывает дополнительных
                    ре-рендеров, что делает его идеальным решением для форм любой сложности.
                </p>
                <p>
                    <strong>Масштабируемость:</strong> этот подход отлично масштабируется для больших приложений с
                    множеством форм и переиспользуемых компонентов.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default RegistrationFormExampleDesc;

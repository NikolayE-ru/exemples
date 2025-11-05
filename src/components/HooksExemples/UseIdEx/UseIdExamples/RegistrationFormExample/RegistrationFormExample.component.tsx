import { FC, useId } from 'react';
import RegistrationFormExampleDesc from './RegistrationFormExampleDesc/RegistrationFormExampleDesc.component';

interface Option {
    value: string;
    label: string;
}

// Компонент поля ввода с автоматически сгенерированным ID
const InputField: FC<{ label: string; type?: string; placeholder?: string }> = ({
    label,
    type = 'text',
    placeholder,
}) => {
    // Генерируем уникальный ID для поля ввода
    const id = useId();

    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} placeholder={placeholder} />
        </div>
    );
};

// Компонент для радиокнопок
const RadioGroup: FC<{ options: Option[]; name: string; label: string }> = ({ options, name, label }) => {
    const groupId = useId();

    return (
        <div className='form-group'>
            <fieldset id={groupId}>
                <legend>{label}:</legend>
                {options.map((option, index) => {
                    // Генерируем уникальный ID для каждой радиокнопки
                    const optionId = `${groupId}-${option.value}`;

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
const CheckboxGroup: FC<{ options: Option[]; label: string }> = ({ options, label }) => {
    const groupId = useId();

    return (
        <div className='form-group'>
            <fieldset id={groupId}>
                <legend>{label}:</legend>
                {options.map((option) => {
                    // Генерируем уникальный ID для каждого чекбокса
                    const optionId = `${groupId}-${option.value}`;

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
        <>
            <div className='result-block'>
                <h3>Пример 2. Использование в форме</h3>
                <p className='message info'>Все поля формы имеют уникальные ID, сгенерированные с помощью useId</p>
                <form onSubmit={handleSubmit} className='registration-form'>
                    <h3>Форма регистрации</h3>

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
            <RegistrationFormExampleDesc />
        </>
    );
};

export default RegistrationFormExample;

import { FC } from 'react';
import { useFormStatus } from 'react-dom';
import FeedbackFormExampleDesc from './FeedbackFormExampleDesc/FeedbackFormExampleDesc';

// Компонент кнопки отправки формы
const SubmitButton: FC = () => {
    // Хук useFormStatus должен использоваться внутри компонента, который находится ВНУТРИ <form>
    const { pending } = useFormStatus();

    return (
        <button type='submit' className='btn' disabled={pending} aria-disabled={pending}>
            {pending ? 'Отправка...' : 'Отправить'}
        </button>
    );
};

// Компонент индикатора прогресса
const ProgressIndicator: FC = () => {
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
    async function handleSubmit(formData: FormData) {
        // Имитация отправки формы на сервер
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // В реальном приложении здесь был бы код для отправки данных на сервер
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        alert(`Данные отправлены:
Имя: ${name}
Email: ${email}
Сообщение: ${message}`);
    }

    return (
        <>
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
                    <textarea
                        id='message'
                        name='message'
                        rows={4}
                        placeholder='Введите ваше сообщение'
                        required
                    ></textarea>
                </div>

                <ProgressIndicator />

                <div className='form-actions'>
                    <SubmitButton />
                    <button type='reset' className='btn btn-secondary'>
                        Очистить
                    </button>
                </div>
            </form>
            <FeedbackFormExampleDesc />
        </>
    );
};

export default FeedbackFormExample;

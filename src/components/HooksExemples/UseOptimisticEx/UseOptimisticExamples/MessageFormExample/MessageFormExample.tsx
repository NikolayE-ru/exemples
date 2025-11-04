import { FC, useState, useOptimistic, useTransition } from 'react';
import MessageFormExampleDesc from './MessageFormExampleDesc/MessageFormExampleDesc';

// Тип для сообщения
interface Message {
    id: number;
    text: string;
    sending?: boolean;
    error?: boolean;
    failed?: boolean;
}

// Компонент для отправки сообщений
const MessageFormExample: FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Привет! Как дела?' },
        { id: 2, text: 'Отлично! Работаю над проектом.' },
    ]);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    // Используем настоящий хук useOptimistic из React 19
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (currentState, { text, shouldFail }: { text: string; shouldFail?: boolean }) => [
            ...currentState,
            {
                id: Date.now(),
                text: text,
                sending: true, // Добавляем флаг "отправляется"
                failed: shouldFail, // Добавляем флаг неудачной отправки
            },
        ],
    );

    // Функция для отправки формы
    async function sendMessage(formData: FormData) {
        const newMessage = formData.get('message') as string;
        setError(null); // Сбрасываем ошибку

        // Добавляем сообщение в оптимистичное состояние
        addOptimisticMessage({ text: newMessage });

        // Имитируем отправку на сервер
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Обновляем реальное состояние
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                text: newMessage,
            },
        ]);
    }

    // Функция для отправки сообщения с ошибкой
    async function sendMessageWithError(formData: FormData) {
        const newMessage = formData.get('message') as string;
        setError(null); // Сбрасываем ошибку

        // Добавляем сообщение в оптимистичное состояние (сначала как обычное)
        addOptimisticMessage({ text: newMessage, shouldFail: true });

        // Используем startTransition для обновления состояния после ответа сервера
        startTransition(async () => {
            // Имитируем отправку на сервер с ошибкой
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Устанавливаем ошибку ()
            setError(`Ошибка: Не удалось отправить сообщение "${newMessage}"`);

            // Не обновляем реальное состояние, так как отправка не удалась
            // Оптимистичное сообщение останется в списке до следующего обновления
        });
    }

    return (
        <>
            <div className='result-block'>
                <h3>Пример 1: Чат с оптимистичными обновлениями</h3>

                <div className='messages-container'>
                    {optimisticMessages.map((message) => {
                        // Определяем, находится ли это сообщение в состоянии ожидания ошибки
                        const isWaitingForError = message.sending && message.failed && !error;
                        const hasError = message.sending && message.failed && error;

                        return (
                            <div
                                key={message.id}
                                className={`message-item ${message.sending ? 'sending' : ''} ${hasError ? 'error' : ''}`}
                            >
                                <p>{message.text}</p>
                                {message.sending && !message.failed && (
                                    <span className='sending-indicator'>Отправляется...</span>
                                )}
                                {isWaitingForError && <span className='sending-indicator'>Отправляется...</span>}
                                {hasError && <span className='error-indicator'>Не доставлено</span>}
                            </div>
                        );
                    })}
                    {error && <div className='error-message'>{error}</div>}
                </div>

                <form action={sendMessage} className='message-form'>
                    <div className='form-group'>
                        <input type='text' name='message' placeholder='Введите сообщение...' required />
                    </div>
                    <div className='button-group'>
                        <button type='submit' className='btn' disabled={isPending}>
                            {isPending ? 'Отправка...' : 'Отправить'}
                        </button>
                        <button
                            type='button'
                            className='btn btn-error'
                            disabled={isPending}
                            onClick={(e) => {
                                e.preventDefault();
                                const form = e.currentTarget.closest('form');
                                if (form) {
                                    const formData = new FormData(form);
                                    sendMessageWithError(formData);
                                }
                            }}
                        >
                            {isPending ? 'Отправка...' : 'Отправить с ошибкой'}
                        </button>
                    </div>
                </form>
            </div>
            <MessageFormExampleDesc />
        </>
    );
};

export default MessageFormExample;

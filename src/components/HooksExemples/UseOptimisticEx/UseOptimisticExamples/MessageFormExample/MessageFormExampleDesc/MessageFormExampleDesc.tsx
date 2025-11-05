import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MessageFormExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useOptimistic, useTransition } from 'react';

// Тип для сообщения
interface Message {
    id: number;
    text: string;
    sending?: boolean;
    error?: boolean;
    failed?: boolean;
}

const MessageFormExample: FC = () => {
    // Шаг 1: Инициализация основного состояния
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Привет! Как дела?' },
        { id: 2, text: 'Отлично! Работаю над проектом.' },
    ]);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    // Шаг 2: Создание оптимистичного состояния для сообщений
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages, // Базовое состояние
        (currentState, newMessage: { text: string; shouldFail?: boolean }) => [
            ...currentState,
            {
                id: Date.now(),
                text: newMessage.text,
                sending: true, // Флаг отправки
                failed: newMessage.shouldFail, // Флаг возможной ошибки
            },
        ]
    );

    // Шаг 3: Функция успешной отправки
    async function sendMessage(formData: FormData) {
        const newMessage = formData.get('message') as string;
        setError(null);

        // Сразу добавляем в оптимистичное состояние
        addOptimisticMessage({ text: newMessage });

        // Имитируем запрос к серверу
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

    // Шаг 4: Функция отправки с ошибкой (с useTransition)
    async function sendMessageWithError(formData: FormData) {
        const newMessage = formData.get('message') as string;
        setError(null);

        // Добавляем в оптимистичное состояние с флагом ошибки
        addOptimisticMessage({ text: newMessage, shouldFail: true });

        // Используем useTransition для неблокирующих обновлений
        startTransition(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Устанавливаем ошибку (не обновляем реальные сообщения)
            setError(\`Ошибка: Не удалось отправить сообщение "\${newMessage}"\`);
        });
    }

    // Шаг 5: Отображение оптимистичного состояния
    return (
        <div className='result-block'>
            <h3>Пример 1: Чат с оптимистичными обновлениями</h3>

            <div className='messages-container'>
                {optimisticMessages.map((message) => {
                    const isWaitingForError = message.sending && message.failed && !error;
                    const hasError = message.sending && message.failed && error;

                    return (
                        <div
                            key={message.id}
                            className={\`message-item \${message.sending ? 'sending' : ''} \${hasError ? 'error' : ''}\`}
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
    );
};

export default MessageFormExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Чат с оптимистичными обновлениями'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useOptimistic с useTransition:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useOptimistic и useTransition:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Инициализация состояний:</strong>
                            <br />
                            <code>const [messages, setMessages] = useState{`<Message[]>`}([...]);</code>
                            <br />
                            <code>const [isPending, startTransition] = useTransition();</code>
                            <br />
                            <small>• Основное состояние для сообщений</small>
                            <br />
                            <small>
                                • <code>useTransition</code> для неблокирующих обновлений
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Настройка useOptimistic:</strong>
                            <br />
                            <code>
                                const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, updateFn);
                            </code>
                            <br />
                            <small>
                                • <code>optimisticMessages</code> - отображаемое состояние
                            </small>
                            <br />
                            <small>• Функция обновления добавляет сообщение с флагами статуса</small>
                            <br />
                            <small>
                                • <code>sending: true</code> - сообщение отправляется
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Успешная отправка:</strong>
                            <br />
                            <code>addOptimisticMessage({'{ text: newMessage }'}); // Сразу показываем</code>
                            <br />
                            <small>• Сообщение мгновенно появляется в чате</small>
                            <br />
                            <small>• После успешного ответа обновляем реальное состояние</small>
                        </li>
                        <li className='step-item'>
                            <strong>Обработка ошибок с useTransition:</strong>
                            <br />
                            <code>
                                startTransition(async () ={'>'} {'{ ... }'});
                            </code>
                            <br />
                            <small>• Неблокирующее обновление интерфейса</small>
                            <br />
                            <small>• При ошибке показываем статус "Не доставлено"</small>
                            <br />
                            <small>• Реальное состояние не обновляется</small>
                        </li>
                        <li className='step-item'>
                            <strong>Визуальная обратная связь:</strong>
                            <br />
                            <code>{`className={\`message-item \${message.sending ? 'sending' : ''}\`}`}</code>
                            <br />
                            <small>• Показываем статус отправки</small>
                            <br />
                            <small>• Выделяем сообщения с ошибками</small>
                            <br />
                            <small>
                                • Используем <code>isPending</code> для блокировки кнопок
                            </small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует использование <code>useOptimistic</code> в сочетании с{' '}
                    <code>useTransition</code>.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        <strong>Мгновенная обратная связь</strong> - сообщения появляются сразу при отправке
                    </li>
                    <li>
                        <strong>Обработка ошибок</strong> - при сбое показываем статус, а не удаляем сообщение
                    </li>
                    <li>
                        <strong>Неблокирующий UI</strong> - <code>useTransition</code> предотвращает блокировку
                        интерфейса
                    </li>
                    <li>
                        <strong>Визуализация состояний</strong> - отправляется, доставлено, ошибка
                    </li>
                    <li>
                        <strong>Автоматический откат</strong> - React сам управляет синхронизацией состояний
                    </li>
                </ul>
                <p>
                    <strong>Идеально для:</strong> чатов, комментариев, форм отправки - где важна мгновенная реакция
                    интерфейса.
                </p>
                <p>
                    <strong>Особенность:</strong> сочетание useOptimistic и useTransition создает максимально отзывчивый
                    UX для асинхронных операций.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default MessageFormExampleDesc;

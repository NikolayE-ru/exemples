import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FileUploadFormExampleDesc: FC = () => {
    const codeExample = `import { FC, useState } from 'react';
import { useFormStatus } from 'react-dom';

// Компонент кнопки отправки формы
const SubmitButton: FC = () => {
    // Шаг 1: Использование useFormStatus для отслеживания состояния отправки
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className='btn'
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? 'Загрузка...' : 'Загрузить'}
        </button>
    );
};

// Компонент индикатора прогресса
const ProgressIndicator: FC = () => {
    // Шаг 2: Использование useFormStatus в дополнительном компоненте формы
    const { pending } = useFormStatus();

    if (!pending) return null;

    return (
        <div className='progress-bar'>
            <div className='progress-indicator'></div>
        </div>
    );
};

// Форма загрузки файла
const FileUploadFormExample: FC = () => {
    const [fileName, setFileName] = useState<string>('');

    // Шаг 3: Создание асинхронной функции-обработчика для загрузки файла
    async function handleSubmit(formData: FormData) {
        // Имитация загрузки файла (3 секунды)
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const file = formData.get('file') as File;
        alert(\`Файл "\${file.name}" успешно загружен!\`);
        setFileName('');
    }

    // Обработчик изменения файла для отображения имени
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        // Шаг 4: Создание формы с action и обертка компонентов с useFormStatus
        <form action={handleSubmit} className='upload-form'>
            <h3>Загрузка файла</h3>

            <div className='form-group'>
                <label htmlFor='file'>Выберите файл:</label>
                <input
                    type='file'
                    id='file'
                    name='file'
                    onChange={handleFileChange}
                    required
                />
                {fileName && <p className='file-name'>Выбран файл: {fileName}</p>}
            </div>

            {/* Компоненты с useFormStatus должны быть внутри тега form */}
            <ProgressIndicator />

            <div className='form-actions'>
                <SubmitButton />
            </div>
        </form>
    );
};

export default FileUploadFormExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Загрузка файлов с useFormStatus'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useFormStatus для загрузки файлов:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useFormStatus для загрузки файлов:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Создание кнопки отправки с useFormStatus:</strong>
                            <br />
                            <code>const {` pending `} = useFormStatus();</code>
                            <br />
                            <small>• Хук отслеживает состояние отправки родительской формы</small>
                            <br />
                            <small>
                                • <code>pending = true</code> во время загрузки файла
                            </small>
                            <br />
                            <small>• Блокирует кнопку и меняет текст во время загрузки</small>
                        </li>
                        <li className='step-item'>
                            <strong>Индикатор прогресса загрузки:</strong>
                            <br />
                            <code>if (!pending) return null;</code>
                            <br />
                            <small>• Компонент показывает индикатор только во время загрузки</small>
                            <br />
                            <small>• Автоматически скрывается после завершения отправки</small>
                            <br />
                            <small>• Можно использовать в нескольких местах формы</small>
                        </li>
                        <li className='step-item'>
                            <strong>Обработчик загрузки файла:</strong>
                            <br />
                            <code>async function handleSubmit(formData: FormData) {'{ ... }'}</code>
                            <br />
                            <small>• Функция получает FormData с файлом</small>
                            <br />
                            <small>• Имитирует долгую загрузку (3 секунды)</small>
                            <br />
                            <small>• Очищает состояние после успешной загрузки</small>
                        </li>
                        <li className='step-item'>
                            <strong>Управление состоянием файла:</strong>
                            <br />
                            <code>const [fileName, setFileName] = useState{`<string>`}('');</code>
                            <br />
                            <small>• Отслеживает выбранный файл для отображения имени</small>
                            <br />
                            <small>• Сбрасывается после успешной загрузки</small>
                            <br />
                            <small>• Дает пользователю визуальную обратную связь</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Особенности useFormStatus для загрузки файлов:</h5>
                <div className='file-features-container'>
                    <h6 className='file-features-title'>📁 Специфика работы с файлами:</h6>

                    <ul>
                        <li>
                            <strong>FormData автоматически включает файл:</strong> при отправке формы файл автоматически
                            добавляется в FormData
                        </li>
                        <li>
                            <strong>Долгие операции:</strong> загрузка файлов обычно занимает больше времени, поэтому
                            важен индикатор прогресса
                        </li>
                        <li>
                            <strong>Блокировка интерфейса:</strong> предотвращает повторную отправку во время загрузки
                        </li>
                        <li>
                            <strong>Обработка больших файлов:</strong> useFormStatus идеально подходит для отслеживания
                            загрузки больших файлов
                        </li>
                    </ul>
                </div>

                <h5>Поток данных при загрузке файла:</h5>
                <div className='data-flow-container'>
                    <h6 className='data-flow-title'>🔄 Последовательность событий:</h6>

                    <ol>
                        <li>
                            <strong>Пользователь выбирает файл</strong> → <code>handleFileChange</code> обновляет{' '}
                            <code>fileName</code>
                        </li>
                        <li>
                            <strong>Нажатие "Загрузить"</strong> → форма начинает отправку
                        </li>
                        <li>
                            <strong>useFormStatus.pending = true</strong> → кнопка блокируется, показывается индикатор
                        </li>
                        <li>
                            <strong>Выполняется handleSubmit</strong> → имитация загрузки 3 секунды
                        </li>
                        <li>
                            <strong>Загрузка завершена</strong> → <code>pending = false</code>, показывается alert
                        </li>
                        <li>
                            <strong>Сброс состояния</strong> → <code>fileName</code> очищается
                        </li>
                    </ol>
                </div>

                <h5>Дополнительные возможности для улучшения UX:</h5>
                <div className='ux-improvements-container'>
                    <h6 className='ux-improvements-title'>🎨 Улучшения пользовательского опыта:</h6>

                    <p>
                        <strong>1. Отображение размера файла:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const fileSize = (file.size / (1024 * 1024)).toFixed(2); // MB
        setFileName(\`\${file.name} (\${fileSize} MB)\`);
    }
};`}
                    </pre>

                    <p>
                        <strong>2. Валидация типа файла:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            setError('Недопустимый тип файла');
            return;
        }
        setFileName(file.name);
    }
};`}
                    </pre>

                    <p>
                        <strong>3. Прогресс загрузки в реальном времени:</strong>
                    </p>
                    <pre className='code-example'>
                        {`// В реальном приложении с XMLHttpRequest или fetch
const handleSubmit = async (formData: FormData) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            setUploadProgress(percent);
        }
    };

    // ... остальной код загрузки
};`}
                    </pre>
                </div>

                <h5>Преимущества useFormStatus для загрузки файлов:</h5>
                <ul>
                    <li>
                        <strong>Автоматическое управление состоянием:</strong> не нужно вручную управлять состоянием
                        загрузки
                    </li>
                    <li>
                        <strong>Согласованный UI:</strong> все компоненты формы получают одинаковое состояние pending
                    </li>
                    <li>
                        <strong>Улучшенная доступность:</strong> автоматическое управление ARIA-атрибутами
                    </li>
                    <li>
                        <strong>Простота реализации:</strong> значительно меньше кода по сравнению с ручным управлением
                        состоянием
                    </li>
                    <li>
                        <strong>Интеграция с Server Actions:</strong> идеально работает с React Server Components и
                        Server Actions
                    </li>
                </ul>

                <h5>Ограничения и рекомендации:</h5>
                <ul>
                    <li>
                        <strong>Только для форм:</strong> useFormStatus работает только внутри компонентов, которые
                        являются потомками <code>{`<form>`}</code>
                    </li>
                    <li>
                        <strong>Требует асинхронный action:</strong> форма должна иметь пропс
                        <code>action</code> с асинхронной функцией
                    </li>
                    <li>
                        <strong>Для реальных загрузок:</strong> в продакшене используйте proper file upload endpoints с
                        прогрессом
                    </li>
                    <li>
                        <strong>Обработка ошибок:</strong> добавьте обработку ошибок для реальных сценариев загрузки
                    </li>
                </ul>

                <p>
                    <strong>Производительность:</strong> useFormStatus оптимизирован для работы с Concurrent React и
                    обеспечивает плавный пользовательский опыт даже при загрузке больших файлов.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default FileUploadFormExampleDesc;

import { FC, useState } from 'react';
import { useFormStatus } from 'react-dom';
import FileUploadFormExampleDesc from './FileUploadFormExampleDesc/FileUploadFormExampleDesc';

// Компонент кнопки отправки формы
const SubmitButton: FC = () => {
    // Хук useFormStatus должен использоваться внутри компонента, который находится ВНУТРИ <form>
    const { pending } = useFormStatus();

    return (
        <button type='submit' className='btn' disabled={pending} aria-disabled={pending}>
            {pending ? 'Загрузка...' : 'Загрузить'}
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

// Форма загрузки файла
const FileUploadFormExample: FC = () => {
    const [fileName, setFileName] = useState<string>('');

    async function handleSubmit(formData: FormData) {
        // Имитация загрузки файла
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const file = formData.get('file') as File;
        alert(`Файл "${file.name}" успешно загружен!`);
        setFileName('');
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <>
            <form action={handleSubmit} className='upload-form'>
                <h3>Загрузка файла</h3>

                <div className='form-group'>
                    <label htmlFor='file'>Выберите файл:</label>
                    <input type='file' id='file' name='file' onChange={handleFileChange} required />
                    {fileName && <p className='file-name'>Выбран файл: {fileName}</p>}
                </div>

                <ProgressIndicator />

                <div className='form-actions'>
                    <SubmitButton />
                </div>
            </form>
            <FileUploadFormExampleDesc />
        </>
    );
};

export default FileUploadFormExample;

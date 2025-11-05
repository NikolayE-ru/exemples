import { FC } from 'react';
import FeedbackFormExample from './UseFormStatusExamples/FeedbackFormExample/FeedbackFormExample.component';
import FileUploadFormExample from './UseFormStatusExamples/FileUploadFormExample/FileUploadFormExample.component';
import './UseFormStatusExample.style.scss';

const UseFormStatusExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useFormStatus - Хук статуса формы</h2>
                <p>Позволяет дочерним компонентам узнать, находится ли родительская форма в процессе отправки</p>
                <p>
                    Простыми словами: Этот хук, как датчик внутри чайника, который сообщает, что вода кипит. Он
                    позволяет дочерним компонентам узнать, находится ли родительская <code>{`<form>`}</code> в процессе
                    отправки.
                </p>
                <p>
                    Важно: Он должен использоваться внутри компонента, который находится ВНУТРИ тега{' '}
                    <code>{`<form>`}</code>.
                </p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`const { pending } = useFormStatus();`}</pre>
                </div>

                <div className='result-block'>
                    <h3>Пример 1: Форма обратной связи</h3>
                    <p className='message info'>При отправке формы кнопка изменит свое состояние и станет неактивной</p>
                    <FeedbackFormExample />
                </div>

                <div className='result-block'>
                    <h3>Пример 2: Загрузка файла</h3>
                    <p className='message info'>Во время загрузки файла будет отображаться индикатор прогресса</p>
                    <FileUploadFormExample />
                </div>
            </div>
        </div>
    );
};

export default UseFormStatusExample;

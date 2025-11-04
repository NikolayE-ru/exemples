import { FC, useId } from 'react';
import IdComparisonExampleDesc from './IdComparisonExampleDesc/IdComparisonExampleDesc';

const IdComparisonExample: FC = () => {
    // Генерируем ID вручную (может привести к конфликтам)
    const manualId = 'field-id';

    // Генерируем ID с помощью useId (гарантированно уникальный)
    const autoId = useId();

    return (
        <>
            <div className='result-block'>
                <h3>Пример: Сравнение ручного и автоматического создания ID</h3>

                <div className='id-comparison'>
                    <div className='manual-id'>
                        <h4>Ручное создание ID (может конфликтовать)</h4>
                        <div className='form-group'>
                            <label htmlFor={manualId}>Поле с ручным ID:</label>
                            <input id={manualId} type='text' placeholder='Ручной ID' />
                        </div>
                        {/* Дубликат с тем же ID - БУДЕТ КОНФЛИКТ! */}
                        <div className='form-group'>
                            <label htmlFor={manualId}>Еще поле с тем же ручным ID:</label>
                            <input id={manualId} type='text' placeholder='Дубликат ручного ID' />
                        </div>
                    </div>

                    <div className='auto-id'>
                        <h4>Автоматическое создание ID (уникальный)</h4>
                        <div className='form-group'>
                            <label htmlFor={autoId}>Поле с автоматическим ID:</label>
                            <input id={autoId} type='text' placeholder='Автоматический ID' />
                        </div>
                        {/* Дубликат с уникальным ID - используем useId еще раз */}
                        <div className='form-group'>
                            <label htmlFor={autoId + '-second'}>Еще поле с уникальным ID:</label>
                            <input id={autoId + '-second'} type='text' placeholder='Уникальный ID 2' />
                        </div>
                    </div>
                </div>

                <p className='message info'>
                    Проблема: два поля с одинаковым ID "field-id" конфликтуют. Кликните на лейбл первого поля -
                    выделится второе поле!
                </p>

                <p className='message warning'>
                    Ручной ID: <span className='highlight'>{manualId}</span> (одинаковый для двух полей) |
                    Автоматический ID: <span className='highlight'>{autoId}</span> (уникальный для каждого
                    использования)
                </p>
            </div>
            <IdComparisonExampleDesc />
        </>
    );
};

export default IdComparisonExample;

import { FC, useState, use } from 'react';
import ConditionalUseExampleDesc from './ConditionalUseExampleDesc/ConditionalUseExampleDesc.component';

interface DataItem {
    id: number;
    title: string;
}

// Компонент, который использует use для работы с промисами
const DataFetcher: FC<{ promise: Promise<DataItem> }> = ({ promise }) => {
    // Хук use может "разворачивать" промис
    const data = use(promise);

    return (
        <div className='result-block'>
            <h3>Данные, полученные через use(promise)</h3>
            <p>
                ID: <span className='highlight'>{data.id}</span>
            </p>
            <p>
                Заголовок: <span className='highlight'>{data.title}</span>
            </p>
        </div>
    );
};

// Компонент, который демонстрирует условное использование use
const ConditionalUseExample: FC = () => {
    const [showData, setShowData] = useState<boolean>(false);
    const [dataPromise] = useState<Promise<DataItem>>(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ id: 1, title: 'Данные, загруженные через промис' }), 2000),
            ),
    );

    return (
        <>
            <div className='result-block'>
                <h3>Пример 3: Условное использование use</h3>
                <p className='message info'>
                    В отличие от других хуков, use можно использовать внутри условий и циклов
                </p>

                {showData ? (
                    <div>
                        <p>Данные отображаются (используется use):</p>
                        <DataFetcher promise={dataPromise} />
                    </div>
                ) : (
                    <p>Данные скрыты (use не используется)</p>
                )}
            </div>
            <button className='btn btn-secondary' onClick={() => setShowData(!showData)}>
                {showData ? 'Скрыть' : 'Показать'} условный компонент
            </button>
            <ConditionalUseExampleDesc />
        </>
    );
};

export default ConditionalUseExample;

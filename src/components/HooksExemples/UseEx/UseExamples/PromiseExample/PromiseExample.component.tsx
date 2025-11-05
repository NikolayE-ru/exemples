import { FC, useState, use, Suspense } from 'react';
import PromiseExampleDesc from './PromiseExampleDesc/PromiseExampleDesc.component';

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

const PromiseExample: FC = () => {
    const [dataPromise, setDataPromise] = useState<Promise<DataItem> | null>(null);

    const loadData = () => {
        // Создаем новый промис при каждом клике
        const promise = new Promise<DataItem>((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        id: Date.now(),
                        title: `Данные, загруженные в ${new Date().toLocaleTimeString()}`,
                    }),
                1500,
            ),
        );

        setDataPromise(promise);
    };

    return (
        <>
            <div className='result-block'>
                <h3>Пример 2: Работа с промисами с помощью use</h3>
                <button className='btn' onClick={loadData}>
                    Загрузить данные
                </button>
                {dataPromise && (
                    <Suspense fallback={<div className='message info'>Загрузка данных...</div>}>
                        <DataFetcher promise={dataPromise} />
                    </Suspense>
                )}
            </div>
            <PromiseExampleDesc />
        </>
    );
};

export default PromiseExample;

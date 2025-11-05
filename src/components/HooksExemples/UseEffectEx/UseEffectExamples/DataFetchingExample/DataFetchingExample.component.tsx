import { FC, useState, useEffect } from 'react';
import DataFetchingExampleDesc from './DataFetchingExampleDesc/DataFetchingExampleDesc';

interface DataItem {
    id: number;
    title: string;
}

const DataFetchingExample: FC = () => {
    const [data, setData] = useState<DataItem | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Загрузка данных
    const fetchData = () => {
        setLoading(true);
        setError(null);

        // Имитация запроса к API
        setTimeout(() => {
            try {
                // В реальном приложении здесь был бы fetch/axios запрос
                const mockData: DataItem = { id: Date.now(), title: `Загруженные данные #${Date.now()}` };
                setData(mockData);
                setLoading(false);
            } catch (err) {
                setError('Ошибка загрузки данных');
                setLoading(false);
            }
        }, 1000);
    };

    // Загрузка данных при монтировании
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 3: Загрузка данных</h3>
                {loading && <p className='message info'>Загрузка...</p>}
                {error && <p className='message error'>{error}</p>}
                {data && (
                    <div>
                        <p>
                            ID: <span className='highlight'>{data.id}</span>
                        </p>
                        <p>
                            Заголовок: <span className='highlight'>{data.title}</span>
                        </p>
                    </div>
                )}
                <button className='btn' onClick={fetchData}>
                    Обновить данные
                </button>
            </div>
            <DataFetchingExampleDesc />
        </>
    );
};

export default DataFetchingExample;

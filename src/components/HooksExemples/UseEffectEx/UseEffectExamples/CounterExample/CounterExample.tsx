import { FC, useState, useEffect } from 'react';
import CounterExampleDesc from './CounterExampleDesc/CounterExampleDesc';

const CounterExample: FC = () => {
    const [count, setCount] = useState<number>(0);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    // Пример 1: Эффект после каждого рендера
    useEffect(() => {
        addLog('Компонент отрендерен');
    }, []);

    // Пример 2: Эффект при изменении count
    useEffect(() => {
        addLog(`Счетчик изменился: ${count}`);

        return () => {
            addLog('Очистка после изменения счетчика');
        };
    }, [count]);

    // Пример 3: Эффект при монтировании (пустой массив зависимостей)
    useEffect(() => {
        addLog('Компонент смонтирован');

        return () => {
            addLog('Компонент будет размонтирован');
        };
    }, []);

    const clearLogs = () => {
        setLogs([]);
    };

    return (
        <>
            <div className='result-block'>
                <h3>Пример 1: Демонстрация работы useEffect</h3>
                <p>
                    Текущее значение: <span className='highlight'>{count}</span>
                </p>
                <button className='btn' onClick={() => setCount(count + 1)}>
                    Увеличить
                </button>
                <button className='btn' onClick={clearLogs} style={{ marginLeft: '10px' }}>
                    Очистить логи
                </button>

                <div style={{ marginTop: '20px' }}>
                    <h4>Логи выполнения:</h4>
                    <div
                        style={{
                            height: '200px',
                            overflow: 'auto',
                            border: '1px solid #ccc',
                            padding: '10px',
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        {logs.map((log, index) => (
                            <div key={index} style={{ fontFamily: 'monospace', fontSize: '12px' }}>
                                {log}
                            </div>
                        ))}
                    </div>
                </div>

                <p className='message info'>Нажимайте "Увеличить" чтобы увидеть как работает useEffect</p>
            </div>
            <CounterExampleDesc />
        </>
    );
};

export default CounterExample;

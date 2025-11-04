import { FC, useState } from 'react';
import ArrayExampleDesc from './ArrayExampleDesc/ArrayExampleDesc';

const ArrayExample: FC = () => {
    // Пример с массивом
    const [items, setItems] = useState<string[]>(['Яблоко', 'Банан', 'Апельсин']);

    const addItem = () => {
        const newItem = prompt('Введите название нового фрукта:');
        if (newItem) {
            setItems((prevItems) => [...prevItems, newItem]);
        }
    };

    const removeItem = (index: number) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className='result-block'>
                <h3>Пример 3: Массив</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className='list-item'>
                            {item}
                            <button className='btn btn-danger' onClick={() => removeItem(index)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
                <button className='btn' onClick={addItem}>
                    Добавить элемент
                </button>
            </div>
            <ArrayExampleDesc />
        </>
    );
};

export default ArrayExample;

import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ArrayExampleDesc: FC = () => {
    const codeExample = `import { FC, useState } from 'react';

const ArrayExample: FC = () => {
    // Шаг 1: Инициализация состояния с массивом
    const [items, setItems] = useState<string[]>(['Яблоко', 'Банан', 'Апельсин']);

    // Шаг 2: Функция добавления элемента
    const addItem = () => {
        const newItem = prompt('Введите название нового фрукта:');
        if (newItem) {
            setItems((prevItems) => [...prevItems, newItem]);
        }
    };

    // Шаг 3: Функция удаления элемента
    const removeItem = (index: number) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    // Шаг 4: Отображение массива в интерфейсе
    return (
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
    );
};

export default ArrayExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 3: Работа с массивами'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура работы с массивами в useState:</h4>

                <SyntaxHighlighter
                    language='javascript'
                    style={coy}
                    customStyle={{
                        borderRadius: '8px',
                        fontSize: '14px',
                        marginTop: '15px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div style={{ marginTop: '20px' }}>
                    <h5>Шаги работы с массивами:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Инициализация массива:</strong>{' '}
                            <code>useState{`<string[]>`}(['Яблоко', 'Банан', 'Апельсин'])</code>
                            <br />
                            <small>
                                • Тип <code>string[]</code> указывает, что это массив строк
                            </small>
                            <br />
                            <small>• Начальное значение - массив с тремя фруктами</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Добавление элемента:</strong>{' '}
                            <code>setItems((prevItems) ={'>'} [...prevItems, newItem])</code>
                            <br />
                            <small>
                                • Используем spread оператор <code>...</code> для создания нового массива
                            </small>
                            <br />
                            <small>• Добавляем новый элемент в конец массива</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Удаление элемента:</strong> <code>prevItems.filter((_, i) ={'>'} i !== index)</code>
                            <br />
                            <small>
                                • Используем метод <code>filter()</code> для создания нового массива
                            </small>
                            <br />
                            <small>• Удаляем элемент по индексу</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Отображение массива:</strong> <code>items.map((item, index) ={'>'} (...))</code>
                            <br />
                            <small>
                                • Используем <code>map()</code> для преобразования массива в JSX
                            </small>
                            <br />
                            <small>
                                • Каждому элементу назначаем уникальный <code>key</code>
                            </small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует работу с массивами через хук <code>useState</code>.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        Состояние <code>items</code> хранит массив строк
                    </li>
                    <li>
                        Для добавления элементов используется spread оператор <code>...</code>
                    </li>
                    <li>
                        Для удаления элементов используется метод <code>filter()</code>
                    </li>
                    <li>Все операции создают новый массив (иммутабельный подход)</li>
                    <li>
                        Для отображения используется <code>map()</code> с уникальным ключом <code>key</code>
                    </li>
                </ul>
                <p>Важно всегда создавать новые массивы при обновлении состояния, а не изменять существующие!</p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ArrayExampleDesc;

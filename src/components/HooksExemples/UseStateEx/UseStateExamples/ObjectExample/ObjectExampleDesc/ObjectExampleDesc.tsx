import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ObjectExampleDesc: FC = () => {
    const codeExample = `import { FC, useState } from 'react';

// Тип для объекта пользователя
interface UserProps {
    name: string;
    age: number;
    email: string;
}

const ObjectExample: FC = () => {
    // Шаг 1: Инициализация состояния с объектом
    const [user, setUser] = useState<UserProps>({
        name: 'Иван',
        age: 25,
        email: 'ivan@example.com',
    });

    // Шаг 2: Функция обновления одного свойства
    const updateName = () => {
        const newName = prompt('Введите новое имя:');
        if (newName) {
            setUser((prevUser) => ({
                ...prevUser,  // Копируем все существующие свойства
                name: newName, // Обновляем только нужное свойство
            }));
        }
    };

    // Шаг 3: Функция обновления на основе предыдущего значения
    const incrementAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1, // Используем предыдущее значение
        }));
    };

    // Шаг 4: Отображение свойств объекта
    return (
        <div className='result-block'>
            <h3>Пример 2: Объект</h3>
            <p>
                Имя: <span className='highlight'>{user.name}</span>
            </p>
            <p>
                Возраст: <span className='highlight'>{user.age}</span>
            </p>
            <p>
                Email: <span className='highlight'>{user.email}</span>
            </p>
            <button className='btn' onClick={updateName}>
                Изменить имя
            </button>
            <button className='btn btn-secondary' onClick={incrementAge}>
                Увеличить возраст
            </button>
        </div>
    );
};

export default ObjectExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Работа с объектами'>
            <div className='description-container'>
                <h4>Пошаговая процедура работы с объектами в useState:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с объектами:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Определение типа и инициализация:</strong>
                            <br />
                            <code>interface UserProps {'{ name: string; age: number; email: string; }'}</code>
                            <br />
                            <code>
                                const [user, setUser] = useState{`<UserProps>`}({'{}'});
                            </code>
                            <br />
                            <small>• Создаем интерфейс для типизации объекта</small>
                            <br />
                            <small>
                                • Указываем тип <code>UserProps</code> для строгой типизации
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Обновление объекта (иммутабельный подход):</strong>
                            <br />
                            <code>{`setUser((prevUser) => ({ ...prevUser, name: newName }))`}</code>
                            <br />
                            <small>
                                • Spread оператор <code>...</code> копирует все свойства
                            </small>
                            <br />
                            <small>• Перезаписываем только изменяемые свойства</small>
                            <br />
                            <small>• Создается новый объект, а не изменяется старый</small>
                        </li>
                        <li className='step-item'>
                            <strong>Обновление на основе предыдущего значения:</strong>
                            <br />
                            <code>{`age: prevUser.age + 1`}</code>
                            <br />
                            <small>• Используем функциональную форму для актуального значения</small>
                            <br />
                            <small>• Вычисляем новое значение на основе предыдущего</small>
                        </li>
                        <li className='step-item'>
                            <strong>Доступ к свойствам в JSX:</strong>
                            <br />
                            <code>
                                {`{user.name}`}, {`{user.age}`}, {`{user.email}`}
                            </code>
                            <br />
                            <small>• Обращаемся к свойствам объекта через точку</small>
                            <br />
                            <small>• React автоматически перерисовывает при изменениях</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует работу с объектами через хук <code>useState</code>.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>Для сложных данных используем интерфейсы/типы TypeScript</li>
                    <li>Всегда создаем новый объект при обновлении (иммутабельность)</li>
                    <li>
                        Spread оператор <code>...</code> - основной инструмент для копирования объектов
                    </li>
                    <li>Функциональные обновления гарантируют работу с актуальными данными</li>
                    <li>Можно обновлять как одно свойство, так и несколько одновременно</li>
                </ul>
                <p>
                    Важно: никогда не изменяйте объект напрямую! Всегда создавайте новый объект при обновлении
                    состояния.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ObjectExampleDesc;

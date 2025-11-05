import { FC, useState } from 'react';
import { User } from './ObjectExample.type';
import ObjectExampleDesc from './ObjectExampleDesc/ObjectExampleDesc.component';

const ObjectExample: FC = () => {
    // Пример с объектом
    const [user, setUser] = useState<User>({
        name: 'Иван',
        age: 25,
        email: 'ivan@example.com',
    });

    const updateName = () => {
        const newName = prompt('Введите новое имя:');
        if (newName) {
            setUser((prevUser) => ({
                ...prevUser,
                name: newName,
            }));
        }
    };

    const incrementAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1,
        }));
    };

    return (
        <>
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
            <ObjectExampleDesc />
        </>
    );
};

export default ObjectExample;

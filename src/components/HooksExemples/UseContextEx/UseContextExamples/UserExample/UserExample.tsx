import { FC, useState, useContext, createContext } from 'react';
import { UserType } from './UserExampleType';
import UserExampleDesc from './UserExampleDesc/UserExampleDesc';

// Создаем контекст для пользователя
const UserContext = createContext<UserType | null>(null);

// Компонент-потребитель данных пользователя
const UserProfile: FC = () => {
    const user = useContext(UserContext);

    if (!user) {
        return <p className='message warning'>Данные пользователя не загружены</p>;
    }

    return (
        <div className='result-block'>
            <p>
                Имя: <span className='highlight'>{user.name}</span>
            </p>
            <p>
                Возраст: <span className='highlight'>{user.age}</span>
            </p>
        </div>
    );
};

const UserExample: FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [showUser, setShowUser] = useState<boolean>(false);

    const loadUser = () => {
        // Имитация загрузки данных пользователя
        setTimeout(() => {
            setUser({ name: 'Анна', age: 28 });
            setShowUser(true);
        }, 500);
    };

    const clearUser = () => {
        setUser(null);
        setShowUser(false);
    };

    return (
        <>
            <div className='result-block'>
                <h3>Пример 2: Данные пользователя</h3>
                {!showUser ? (
                    <button className='btn' onClick={loadUser}>
                        Загрузить пользователя
                    </button>
                ) : (
                    <>
                        <button className='btn btn-secondary' onClick={clearUser}>
                            Очистить данные
                        </button>
                        <UserContext.Provider value={user}>
                            <UserProfile />
                        </UserContext.Provider>
                    </>
                )}
            </div>
            <UserExampleDesc />
        </>
    );
};

export default UserExample;

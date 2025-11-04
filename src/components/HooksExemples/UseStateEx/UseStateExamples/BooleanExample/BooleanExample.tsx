import { FC, useState } from 'react';
import BooleanExampleDesc from './BooleanExampleDesc/BooleanExampleDesc';
import './BooleanExample.scss';

const BooleanExample: FC = () => {
    // Пример с булевым значением
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAccepted, setIsAccepted] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    const toggleAcceptance = () => {
        setIsAccepted((prevState) => !prevState);
    };

    return (
        <>
            <div className='result-block'>
                <h3>Пример 4: Булево значение</h3>

                <div className='visibility-toggle'>
                    <button className='btn' onClick={toggleVisibility}>
                        Переключить видимость
                    </button>
                    {isVisible && (
                        <div className='message info message-container'>Этот текст виден, когда isVisible = true</div>
                    )}
                </div>

                <div>
                    <button className='btn' onClick={toggleAcceptance}>
                        {isAccepted ? 'Отменить' : 'Принять'} условия
                    </button>
                    <div className='status-container'>
                        Статус принятия условий:
                        <span className='highlight'>{isAccepted ? ' Принято' : ' Не принято'}</span>
                    </div>
                </div>
            </div>
            <BooleanExampleDesc />
        </>
    );
};

export default BooleanExample;

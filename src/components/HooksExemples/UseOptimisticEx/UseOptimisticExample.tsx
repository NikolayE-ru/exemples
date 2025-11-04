import { FC } from 'react';
import MessageFormExample from './UseOptimisticExamples/MessageFormExample/MessageFormExample';
import LikeButtonExample from './UseOptimisticExamples/LikeButtonExample/LikeButtonExample';
import './UseOptimisticExample.scss';

const UseOptimisticExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>useOptimistic - Хук для оптимистичных обновлений</h2>
                <p>Позволяет показывать мгновенный результат действия пользователя, не дожидаясь ответа от сервера.</p>
                <p>
                    Простыми словами: Когда вы отправляете сообщение в мессенджере, оно сразу появляется в чате
                    (оптимистично), хотя сервер еще его не получил. Если сервер вернет ошибку, сообщение пометится как
                    "не доставлено".
                </p>
                <p>Как работает:</p>
                <p>
                    Позволяет показывать пользователю мгновенный результат его действия, не дожидаясь ответа от сервера.
                </p>
                <p>Если запрос завершится ошибкой, UI автоматически "откатится" к реальному состоянию.</p>
            </div>

            <div className='example-content'>
                <div className='code-block'>
                    <pre>{`// Используем useOptimistic:
const [optimisticState, addOptimistic] = useOptimistic(
  initialState,
  (currentState, newValue) => updateState(currentState, newValue)
);

// При вызове addOptimistic(newValue) состояние сразу обновится
// и автоматически вернется к initialState, когда сервер ответит`}</pre>
                </div>

                <MessageFormExample />
                <LikeButtonExample />
            </div>
        </div>
    );
};

export default UseOptimisticExample;

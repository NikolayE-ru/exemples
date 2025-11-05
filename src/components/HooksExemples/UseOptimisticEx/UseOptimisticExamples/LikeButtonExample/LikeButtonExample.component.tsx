import { FC, useOptimistic, useState, useTransition } from 'react';
import LikeButtonExampleDesc from './LikeButtonExampleDesc/LikeButtonExampleDesc.component';

// Компонент для лайков
const LikeButtonExample: FC = () => {
    const [likes, setLikes] = useState<number>(42);
    const [isPending, startTransition] = useTransition();

    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (_, newLikes: number) => newLikes);

    // Функция для обработки клика
    async function handleLike() {
        const newLikes = likes + 1;

        startTransition(async () => {
            // Устанавливаем оптимистичное значение
            addOptimisticLike(newLikes);

            // Имитируем запрос на сервер
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Обновляем реальное состояние
            setLikes(newLikes);

            // После этого useOptimistic автоматически синхронизирует optimisticLikes с likes
        });
    }

    return (
        <>
            <div className='result-block'>
                <h3>Пример 2: Кнопка лайка с оптимистичным обновлением</h3>

                <div className='like-container'>
                    <button className='btn like-button' onClick={handleLike} disabled={isPending}>
                        ❤️ Нравится
                    </button>
                    <div className='likes-count'>
                        <span className={optimisticLikes !== likes ? 'optimistic-count' : ''}>{optimisticLikes}</span>
                    </div>
                </div>

                <p className='message info'>
                    При клике счетчик сразу увеличивается, а затем синхронизируется с сервером
                </p>
            </div>
            <LikeButtonExampleDesc />
        </>
    );
};

export default LikeButtonExample;

import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LikeButtonExampleDesc: FC = () => {
    const codeExample = `import { FC, useOptimistic, useState, useTransition } from 'react';

const LikeButtonExample: FC = () => {
    // Шаг 1: Инициализация основного состояния и перехода
    const [likes, setLikes] = useState<number>(42);
    const [isPending, startTransition] = useTransition();

    // Шаг 2: Создание оптимистичного состояния
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (_, newLikes: number) => newLikes // Полная замена значения
    );

    // Шаг 3: Асинхронная функция с useTransition
    async function handleLike() {
        const newLikes = likes + 1;

        startTransition(async () => {
            // Сразу применяем оптимистичное обновление
            addOptimisticLike(newLikes);

            // Имитируем запрос на сервер
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Обновляем реальное состояние после ответа сервера
            setLikes(newLikes);

            // useOptimistic автоматически синхронизируется с likes
        });
    }

    // Шаг 4: Использование в интерфейсе с индикацией состояния
    return (
        <div className='result-block'>
            <h3>Пример 2: Кнопка лайка с оптимистичным обновлением</h3>

            <div className='like-container'>
                <button
                    className='btn like-button'
                    onClick={handleLike}
                    disabled={isPending}
                >
                    ❤️ Нравится
                </button>
                <div className='likes-count'>
                    <span className={optimisticLikes !== likes ? 'optimistic-count' : ''}>
                        {optimisticLikes}
                    </span>
                </div>
            </div>

            <p className='message info'>
                При клике счетчик сразу увеличивается, а затем синхронизируется с сервером
            </p>
        </div>
    );
};

export default LikeButtonExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: useOptimistic с useTransition'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useOptimistic с useTransition:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useOptimistic и useTransition:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Инициализация состояний:</strong>
                            <br />
                            <code>const [likes, setLikes] = useState{`<number>`}(42);</code>
                            <br />
                            <code>const [isPending, startTransition] = useTransition();</code>
                            <br />
                            <small>
                                • <code>likes</code> - основное состояние
                            </small>
                            <br />
                            <small>
                                • <code>useTransition</code> для неблокирующих обновлений
                            </small>
                            <br />
                            <small>
                                • <code>isPending</code> показывает состояние перехода
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Настройка useOptimistic:</strong>
                            <br />
                            <code>useOptimistic(likes, (_, newLikes) ={'>'} newLikes)</code>
                            <br />
                            <small>• Полностью заменяем значение вместо инкремента</small>
                            <br />
                            <small>
                                • <code>_</code> - игнорируем текущее состояние
                            </small>
                            <br />
                            <small>
                                • <code>newLikes</code> - новое значение для установки
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Обработчик с useTransition:</strong>
                            <br />
                            <code>
                                startTransition(async () ={'>'} {'{ ... }'})
                            </code>
                            <br />
                            <small>• Обертываем асинхронную логику в переход</small>
                            <br />
                            <small>• Сначала оптимистичное обновление</small>
                            <br />
                            <small>• Затем асинхронная операция</small>
                            <br />
                            <small>• В конце обновление реального состояния</small>
                        </li>
                        <li className='step-item'>
                            <strong>Визуальная обратная связь:</strong>
                            <br />
                            <code>disabled={`{isPending}`}</code> - блокировка кнопки
                            <br />
                            <code>optimisticLikes !== likes</code> - подсветка при расхождении
                            <br />
                            <small>• Показываем, когда состояние синхронизируется</small>
                            <br />
                            <small>• Отключаем кнопку во время выполнения</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <p>
                    Этот пример демонстрирует комбинацию <code>useOptimistic</code> и <code>useTransition</code> для
                    максимально отзывчивого интерфейса, <strong>useTransition</strong> делает обновления неблокирующими,{' '}
                    <strong>useOptimistic</strong> обеспечивает мгновенную обратную связь а <code>isPending</code>{' '}
                    позволяет блокировать взаимодействие во время выполнения.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        <strong>Что это такое?</strong> Вы сразу показываете пользователю результат действия в UI, не
                        дожидаясь ответа от сервера. Это создает ощущение мгновенной скорости.
                    </li>
                    <li>
                        <strong>Проблема, которую он решает: </strong>Без оптимистичного обновления интерфейс "зависает"
                        на время запроса (например, пока отправляется сообщение, лайк или добавляется товар в корзину).
                    </li>
                    <li>
                        Оптимистичное обновление может провалиться (сеть недоступна, сервер вернул ошибку, данные
                        конфликтуют). Поэтому обычно <code>useOptimistic</code> используется вместе с{' '}
                        <code>useTransition</code> (или <code>useActionState</code>). Это дает:
                        <ol>
                            <strong>-</strong> <code>isPending</code>: Флаг, что запрос выполняется. Полезно для
                            блокировки UI (например, кнопки).
                        </ol>
                        <ol>
                            <strong>-</strong> <code>startTransition</code>: Функция для обертки асинхронного действия.
                        </ol>
                        <ol>
                            <strong>-</strong> В <code>useActionState</code> состояние ошибки обрабатывается "из
                            коробки".
                        </ol>
                        <ol>
                            <strong>- </strong>Что делать при ошибке: Когда запрос завершается ошибкой,{' '}
                            <code>useOptimistic</code> автоматически откатит <code>optimisticState</code> к актуальному{' '}
                            <code>state</code>. Ваш UI должен быть готов к этому. Например, если вы показывали временное
                            сообщение в чате, оно исчезнет при ошибке. Убедитесь, что вы уведомляете пользователя об
                            ошибке (например, через тост).
                        </ol>
                        <ol>
                            <strong>-</strong> Оптимистичные обновления — не панацея. Их лучше всего применять для
                            действий, которые с высокой вероятностью завершатся успехом (лайки, отправка сообщений,
                            добавление в корзину). Не используйте для критически важных операций (например, финансовых
                            транзакций), где откат был бы очень болезненным для пользователя!
                        </ol>
                    </li>
                </ul>
                <p>
                    <strong>Идеально для:</strong> форм, лайков, комментариев, где важна и отзывчивость, и
                    предотвращение дублирования действий.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default LikeButtonExampleDesc;

import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComparisonExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useCallback, memo } from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

// Компонент кнопки с memo - перерисовывается только если пропсы изменились
const Button = memo(({ onClick, label }: ButtonProps) => {
    const renderTime = new Date().toLocaleTimeString();

    return (
        <div className="button-wrapper">
            <button className='btn' onClick={onClick}>
                {label}
            </button>
            <div className="render-time">
                Последняя перерисовка: {renderTime}
            </div>
        </div>
    );
});

const ComparisonExample: FC = () => {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');

    // Шаг 1: Функция без useCallback - создается заново при каждом рендере
    const handleClickWithoutCallback = () => {
        setCount1(count1 + 1);
    };

    // Шаг 2: Функция с useCallback - сохраняется между рендерами
    const handleClickWithCallback = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]); // Зависимость - count2

    return (
        <div className='result-block'>
            <h3>Пример: Сравнение с useCallback и без</h3>

            <p>
                Счетчик 1 (без useCallback): <span className='highlight'>{count1}</span>
            </p>
            <Button onClick={handleClickWithoutCallback} label='Увеличить счетчик 1' />

            <p>
                Счетчик 2 (с useCallback): <span className='highlight'>{count2}</span>
            </p>
            <Button onClick={handleClickWithCallback} label='Увеличить счетчик 2' />

            <div className='form-group'>
                <label htmlFor='test-input'>Тестовое поле (влияет на перерисовку):</label>
                <input
                    id='test-input'
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Введите текст'
                />
            </div>

            <p className='message info'>
                При вводе текста в поле Button 1 будет перерисовываться, а Button 2 - нет
            </p>
        </div>
    );
};

export default ComparisonExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Оптимизация с useCallback и memo'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useCallback:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useCallback и memo:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Создание мемоизированного компонента:</strong>
                            <br />
                            <code>
                                const Button = memo(({'{ onClick, label }'}: ButtonProps) ={'>'} {'{ ... }'});
                            </code>
                            <br />
                            <small>
                                • <code>memo</code> предотвращает лишние перерисовки
                            </small>
                            <br />
                            <small>• Компонент перерисовывается только при изменении пропсов</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функция БЕЗ useCallback (проблема):</strong>
                            <br />
                            <code>
                                const handleClickWithoutCallback = () ={'>'} {'{ setCount1(count1 + 1) }'};
                            </code>
                            <br />
                            <small>• Создается заново при каждом рендере компонента</small>
                            <br />
                            <small>
                                • <code>memo</code> считает, что пропс изменился
                            </small>
                            <br />
                            <small>• Лишние перерисовки дочернего компонента</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функция С useCallback (решение):</strong>
                            <br />
                            <code>
                                const handleClickWithCallback = useCallback(() ={'>'} {'{ ... }'}, [count2]);
                            </code>
                            <br />
                            <small>• Сохраняется между рендерами</small>
                            <br />
                            <small>• Новая функция создается только при изменении зависимостей</small>
                            <br />
                            <small>
                                • <code>memo</code> видит, что пропс не изменился
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Массив зависимостей:</strong>
                            <br />
                            <code>[count2] // Функция обновится только при изменении count2</code>
                            <br />
                            <small>• Указываем переменные, от которых зависит функция</small>
                            <br />
                            <small>• При изменении inputValue функция НЕ пересоздается</small>
                            <br />
                            <small>• Button 2 не перерисовывается при вводе текста</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div className='key-points'>
                <p>
                    Этот пример демонстрирует оптимизацию производительности с помощью <code>useCallback</code> и{' '}
                    <code>memo</code>.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        <strong>memo</strong> предотвращает перерисовку компонента при неизменных пропсах
                    </li>
                    <li>
                        <strong>useCallback</strong> сохраняет ссылку на функцию между рендерами
                    </li>
                    <li>Без useCallback функция создается заново при каждом рендере</li>
                    <li>С useCallback функция пересоздается только при изменении зависимостей</li>
                    <li>Визуальный индикатор времени показывает, когда происходит перерисовка</li>
                </ul>
                <p>
                    <strong>Когда использовать useCallback:</strong>
                </p>
                <ul>
                    <li>Функции передаются в memo-компоненты</li>
                    <li>Функции используются в зависимостях других хуков (useEffect, useMemo)</li>
                    <li>Функции передаются в контекст провайдеры</li>
                </ul>
                <p>
                    <strong>Важно:</strong> не используйте useCallback везде - только там, где это действительно нужно
                    для оптимизации! useCallback создан для:
                    <li>Функций используемых в других хуках (useMemo, custom hooks)</li>
                    <li>Функция - зависимость useEffect - чтобы не вызывать эффект лишний раз</li>
                    <li>Передаете функцию в memo-компонент - чтобы избежать лишних перерисовок</li>
                    <li>
                        Нет нужды использовать useCallback - обычные обработчики кликов/событий в том же компоненте,
                        функции без зависимостей (можно использовать, но не обязательно), простые функции, создание
                        которых дешево. К тому же компоненты могут перерисовываются по другим причинам.
                    </li>
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ComparisonExampleDesc;

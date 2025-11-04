import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IdComparisonExampleDesc: FC = () => {
    const codeExample = `import { FC, useId } from 'react';

const IdComparisonExample: FC = () => {
    // Шаг 1: Ручное создание ID (потенциальная проблема)
    const manualId = 'field-id';

    // Шаг 2: Автоматическое создание уникального ID с помощью useId
    const autoId = useId();

    return (
        <div className='result-block'>
            <h3>Пример: Сравнение ручного и автоматического создания ID</h3>

            <div className='id-comparison'>
                <div className='manual-id'>
                    <h4>Ручное создание ID (может конфликтовать)</h4>
                    <div className='form-group'>
                        <label htmlFor={manualId}>Поле с ручным ID:</label>
                        <input id={manualId} type='text' placeholder='Ручной ID' />
                    </div>
                    {/* Шаг 3: Демонстрация конфликта ID - дубликат с тем же ID */}
                    <div className='form-group'>
                        <label htmlFor={manualId}>Еще поле с тем же ручным ID:</label>
                        <input id={manualId} type='text' placeholder='Дубликат ручного ID' />
                    </div>
                </div>

                <div className='auto-id'>
                    <h4>Автоматическое создание ID (уникальный)</h4>
                    <div className='form-group'>
                        <label htmlFor={autoId}>Поле с автоматическим ID:</label>
                        <input id={autoId} type='text' placeholder='Автоматический ID' />
                    </div>
                    {/* Шаг 4: Создание уникального производного ID */}
                    <div className='form-group'>
                        <label htmlFor={autoId + '-second'}>Еще поле с уникальным ID:</label>
                        <input id={autoId + '-second'} type='text' placeholder='Уникальный ID 2' />
                    </div>
                </div>
            </div>

            <p className='message info'>
                Проблема: два поля с одинаковым ID "field-id" конфликтуют. 
                Кликните на лейбл первого поля - выделится второе поле!
            </p>
            
            <p className='message warning'>
                Ручной ID: <span className='highlight'>{manualId}</span> 
                (одинаковый для двух полей) | 
                Автоматический ID: <span className='highlight'>{autoId}</span> 
                (уникальный для каждого использования)
            </p>
        </div>
    );
};

export default IdComparisonExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 1: Сравнение useId и ручного создания ID'>
            <div style={{ marginBottom: '25px' }}>
                <h4>Пошаговая процедура подключения useId:</h4>

                <SyntaxHighlighter
                    language='typescript'
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
                    <h5>Шаги работы с useId:</h5>
                    <ol>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Ручное создание ID (антипаттерн):</strong>
                            <br />
                            <code>const manualId = 'field-id';</code>
                            <br />
                            <small>• Жестко закодированное значение</small>
                            <br />
                            <small>• Может привести к конфликтам в больших приложениях</small>
                            <br />
                            <small>• Проблемы при повторном использовании компонентов</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Автоматическое создание с useId:</strong>
                            <br />
                            <code>const autoId = useId();</code>
                            <br />
                            <small>• Генерирует уникальный ID для каждого вызова</small>
                            <br />
                            <small>• Гарантирует отсутствие конфликтов</small>
                            <br />
                            <small>• Работает на сервере и клиенте (SSR compatible)</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Демонстрация конфликта ID:</strong>
                            <br />
                            <code>{`<input id={manualId} />`} (дважды)</code>
                            <br />
                            <small>• Два элемента с одинаковым ID нарушают стандарты HTML</small>
                            <br />
                            <small>• Клик по label первого поля фокусирует второе поле</small>
                            <br />
                            <small>• Нарушает accessibility и семантику</small>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Создание производных ID:</strong>
                            <br />
                            <code>{`htmlFor={autoId + '-second'}`}</code>
                            <br />
                            <small>• Можно создавать несколько уникальных ID на основе одного useId</small>
                            <br />
                            <small>• Полезно для связанных элементов формы</small>
                            <br />
                            <small>• Сохраняет уникальность даже в больших приложениях</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования useId:</h5>

                <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#1565c0' }}>✅ Когда использовать useId:</h6>
                    <ul>
                        <li>
                            <strong>Связка label и input</strong> - для атрибутов <code>htmlFor</code> и <code>id</code>
                        </li>
                        <li>
                            <strong>ARIA атрибуты</strong> - <code>aria-labelledby</code>, <code>aria-describedby</code>
                        </li>
                        <li>
                            <strong>Компоненты библиотек</strong> - переиспользуемые компоненты, которые нуждаются в
                            уникальных ID
                        </li>
                        <li>
                            <strong>SSR приложения</strong> - гарантирует одинаковые ID на сервере и клиенте
                        </li>
                        <li>
                            <strong>Микрофронтенды</strong> - предотвращает конфликты между разными частями приложения
                        </li>
                    </ul>

                    <h6 style={{ color: '#c62828' }}>❌ Когда НЕ использовать useId:</h6>
                    <ul>
                        <li>
                            <strong>Для ключей в списках</strong> - используйте уникальные данные из ваших данных
                        </li>
                        <li>
                            <strong>Как часть URL</strong> - не предназначен для генерации человеко-читаемых
                            идентификаторов
                        </li>
                        <li>
                            <strong>Для идентификации сущностей</strong> - используйте UUID или другие системы генерации
                            ID
                        </li>
                        <li>
                            <strong>Когда ID известен заранее</strong> - если у вас есть стабильный уникальный
                            идентификатор
                        </li>
                    </ul>
                </div>

                <h5>Сравнение подходов к генерации ID:</h5>
                <div style={{ background: '#e8f5e8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#2e7d32' }}>📊 Сравнительная таблица:</h6>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#c8e6c9' }}>
                                <th style={{ padding: '8px', border: '1px solid #a5d6a7', textAlign: 'left' }}>
                                    Метод
                                </th>
                                <th style={{ padding: '8px', border: '1px solid #a5d6a7', textAlign: 'left' }}>
                                    Уникальность
                                </th>
                                <th style={{ padding: '8px', border: '1px solid #a5d6a7', textAlign: 'left' }}>SSR</th>
                                <th style={{ padding: '8px', border: '1px solid #a5d6a7', textAlign: 'left' }}>
                                    Использование
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>
                                    <code>useId()</code>
                                </td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>✅ Гарантирована</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>✅ Работает</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>React компоненты</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>Ручной ID</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>❌ Может конфликтовать</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>✅ Работает</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>Статические элементы</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>
                                    <code>Math.random()</code>
                                </td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>⚠️ Вероятностная</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>❌ Не работает</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>Не рекомендуется</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>
                                    <code>crypto.randomUUID()</code>
                                </td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>✅ Гарантирована</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>⚠️ Зависит от среды</td>
                                <td style={{ padding: '8px', border: '1px solid #e8f5e8' }}>Универсальные ID</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Практические примеры использования useId:</h5>
                <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: 0, color: '#ef6c00' }}>🎯 Реальные сценарии применения:</h6>

                    <p>
                        <strong>1. Формы с label и input:</strong>
                    </p>
                    <pre style={{ background: '#ffe0b2', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const FormField = ({ label }) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
        </div>
    );
};`}
                    </pre>

                    <p>
                        <strong>2. Группа связанных элементов:</strong>
                    </p>
                    <pre style={{ background: '#ffe0b2', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const RadioGroup = () => {
    const groupId = useId();
    return (
        <div role="radiogroup" aria-labelledby={groupId}>
            <span id={groupId}>Выберите опцию:</span>
            <input type="radio" id={\`\${groupId}-1\`} name="option" />
            <label htmlFor={\`\${groupId}-1\`}>Опция 1</label>
            <input type="radio" id={\`\${groupId}-2\`} name="option" />
            <label htmlFor={\`\${groupId}-2\`}>Опция 2</label>
        </div>
    );
};`}
                    </pre>

                    <p>
                        <strong>3. ARIA описания:</strong>
                    </p>
                    <pre style={{ background: '#ffe0b2', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
                        {`const AccessibleInput = () => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Пароль:</label>
            <input 
                id={id} 
                type="password" 
                aria-describedby={\`\${id}-hint\`}
            />
            <span id={\`\${id}-hint\`}>
                Пароль должен содержать не менее 8 символов
            </span>
        </div>
    );
};`}
                    </pre>
                </div>

                <h5>Проблемы, которые решает useId:</h5>
                <ul>
                    <li>
                        <strong>Гидрэйт мискматч в SSR:</strong> предотвращает различия между серверным и клиентским
                        рендерингом
                    </li>
                    <li>
                        <strong>Конфликты в микрофронтендах:</strong> разные части приложения не конфликтуют между собой
                    </li>
                    <li>
                        <strong>Повторное использование компонентов:</strong> каждый экземпляр компонента получает
                        уникальный ID
                    </li>
                    <li>
                        <strong>Доступность:</strong> правильная связь между label и input улучшает UX для пользователей
                        скринридеров
                    </li>
                </ul>

                <p>
                    <strong>Важно:</strong> useId генерирует ID вида <code>:r1:</code>, <code>:r2:</code> и т.д.,
                    которые гарантированно уникальны в пределах React приложения и совместимы с SSR.
                </p>
                <p>
                    <strong>Производительность:</strong> useId работает на этапе рендеринга и не вызывает дополнительных
                    ре-рендеров, что делает его очень эффективным для использования.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default IdComparisonExampleDesc;

import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TodoListExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useCallback, memo } from 'react';
import { TodoItem, ListItemProps } from './TodoListExampleType';

// Компонент списка элементов с memo
const ListItem = memo(({ item, onRemove, onToggle }: ListItemProps) => {
    return (
        <div className={\`list-item \${item.completed ? 'completed' : ''}\`}>
            <input type='checkbox' checked={item.completed} onChange={() => onToggle(item.id)} />
            <span className={item.completed ? 'completed-text' : ''}>{item.text}</span>
            <button className='btn btn-danger' onClick={() => onRemove(item.id)}>
                Удалить
            </button>
        </div>
    );
});

const TodoListExample: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todos, setTodos] = useState<TodoItem[]>([
        { id: 1, text: 'Изучить React', completed: true },
        { id: 2, text: 'Изучить хуки', completed: false },
        { id: 3, text: 'Создать приложение', completed: false },
    ]);

    // Шаг 1: Мемоизированная функция для добавления задачи
    const addTodo = useCallback(() => {
        if (inputValue.trim()) {
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    id: Date.now(),
                    text: inputValue,
                    completed: false,
                },
            ]);
            setInputValue('');
        }
    }, [inputValue]); // Зависимость - inputValue

    // Шаг 2: Мемоизированная функция для удаления задачи
    const removeTodo = useCallback((id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []); // Пустой массив зависимостей - функция никогда не пересоздается

    // Шаг 3: Мемоизированная функция для переключения состояния
    const toggleTodo = useCallback((id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        );
    }, []); // Пустой массив зависимостей

    return (
        <div className='result-block'>
            <h3>Пример 2: Список задач с мемоизированными функциями</h3>
            <div className='form-group'>
                <label htmlFor='new-todo'>Новая задача:</label>
                <input
                    id='new-todo'
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Введите задачу'
                />
            </div>
            <button className='btn' onClick={addTodo}>
                Добавить задачу
            </button>

            <div className='todo-list'>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        item={todo}
                        onRemove={removeTodo}
                        onToggle={toggleTodo}
                    />
                ))}
            </div>

            <p className='message info'>
                Компоненты ListItem не будут перерисовываться без необходимости
            </p>
        </div>
    );
};

export default TodoListExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Список задач с useCallback'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useCallback:</h4>

                <SyntaxHighlighter language='typescript' style={coy} className='code-highlighter'>
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useCallback в списке задач:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Мемоизация компонента ListItem:</strong>
                            <br />
                            <code>
                                const ListItem = memo(({'{ item, onRemove, onToggle }'}) ={'>'} {'{ ... }'});
                            </code>
                            <br />
                            <small>• Компонент перерисовывается только при изменении пропсов</small>
                            <br />
                            <small>• Без useCallback функции создавались бы заново при каждом рендере</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функция addTodo с зависимостью:</strong>
                            <br />
                            <code>
                                const addTodo = useCallback(() ={'>'} {'{ ... }'}, [inputValue]);
                            </code>
                            <br />
                            <small>• Пересоздается при изменении inputValue</small>
                            <br />
                            <small>• Использует текущее значение inputValue внутри функции</small>
                        </li>
                        <li className='step-item'>
                            <strong>Функции removeTodo и toggleTodo без зависимостей:</strong>
                            <br />
                            <code>
                                const removeTodo = useCallback((id) ={'>'} {'{ ... }'}, []);
                            </code>
                            <br />
                            <small>• Пустой массив зависимостей - функция создается один раз</small>
                            <br />
                            <small>• Используют функциональные обновления setTodos</small>
                            <br />
                            <small>• Не зависят от внешних переменных</small>
                        </li>
                        <li className='step-item'>
                            <strong>Передача мемоизированных функций в ListItem:</strong>
                            <br />
                            <code>{`<ListItem onRemove={removeTodo} onToggle={toggleTodo} />`}</code>
                            <br />
                            <small>• Ссылки на функции остаются постоянными</small>
                            <br />
                            <small>• ListItem не перерисовывается при изменении inputValue</small>
                            <br />
                            <small>• Перерисовывается только изменяемый элемент</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Правила использования useCallback:</h5>

                <div className='rules-container'>
                    <h6 className='rules-title positive'>✅ Когда использовать useCallback:</h6>
                    <ul>
                        <li>
                            <strong>Функции передаются в memo-компоненты</strong> - как в этом примере
                        </li>
                        <li>
                            <strong>Функции используются в зависимостях useEffect</strong> - чтобы избежать бесконечных
                            циклов
                        </li>
                        <li>
                            <strong>Функции передаются в контекст</strong> - чтобы предотвратить лишние перерисовки
                            потребителей
                        </li>
                        <li>
                            <strong>Кастомные хуки</strong> - возвращаемые функции часто мемоизируют
                        </li>
                    </ul>

                    <h6 className='rules-title negative'>❌ Когда НЕ использовать useCallback:</h6>
                    <ul>
                        <li>
                            <strong>Локальные функции</strong> - не передаются в дочерние компоненты
                        </li>
                        <li>
                            <strong>Простые компоненты</strong> - без проблем с производительностью
                        </li>
                        <li>
                            <strong>Функции с часто меняющимися зависимостями</strong> - useCallback бесполезен
                        </li>
                        <li>
                            <strong>По умолчанию</strong> - используйте только при доказанных проблемах с
                            производительностью
                        </li>
                    </ul>
                </div>

                <p>
                    Этот пример демонстрирует правильное использование <code>useCallback</code> для оптимизации списка
                    задач.
                </p>
                <p>Ключевые моменты:</p>
                <ul>
                    <li>
                        <strong>removeTodo и toggleTodo</strong> с пустыми зависимостями - создаются один раз
                    </li>
                    <li>
                        <strong>addTodo</strong> с зависимостью [inputValue] - пересоздается при изменении input
                    </li>
                    <li>
                        <strong>ListItem</strong> перерисовывается только при изменении его конкретного item
                    </li>
                    <li>При вводе текста перерисовывается только поле ввода, а не весь список</li>
                </ul>
                <p>
                    <strong>Результат:</strong> значительное улучшение производительности при работе с большими
                    списками!
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default TodoListExampleDesc;

import { FC, useState, useCallback, memo } from 'react';
import { TodoItem, ListItemProps } from './TodoListExample.type';
import TodoListExampleDesc from './TodoListExampleDesc/TodoListExampleDesc.component';

// Компонент списка элементов
const ListItem = memo(({ item, onRemove, onToggle }: ListItemProps) => {
    return (
        <div className={`list-item ${item.completed ? 'completed' : ''}`}>
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

    // Мемоизированная функция для добавления задачи
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
    }, [inputValue]);

    // Мемоизированная функция для удаления задачи
    const removeTodo = useCallback((id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []);

    // Мемоизированная функция для переключения состояния задачи
    const toggleTodo = useCallback((id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    }, []);

    return (
        <>
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
                        <ListItem key={todo.id} item={todo} onRemove={removeTodo} onToggle={toggleTodo} />
                    ))}
                </div>

                <p className='message info'>Компоненты ListItem не будут перерисовываться без необходимости</p>
            </div>
            <TodoListExampleDesc />
        </>
    );
};

export default TodoListExample;

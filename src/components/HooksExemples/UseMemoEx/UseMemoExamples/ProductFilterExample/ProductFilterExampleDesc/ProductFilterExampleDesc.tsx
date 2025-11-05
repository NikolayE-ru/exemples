import { FC } from 'react';
import AccordionExempleDesc from '@/components/AccordionExempleDesc/AccordionExempleDesc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProductFilterExampleDesc: FC = () => {
    const codeExample = `import { FC, useState, useMemo } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

// Компонент для отображения списка товаров
const ProductList: FC<{ products: Product[]; filter: string }> = ({ products, filter }) => {
    // Шаг 1: Мемоизация отфильтрованного списка товаров
    const filteredProducts = useMemo(() => {
        console.log('Фильтрация товаров...');
        return products.filter((product) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [products, filter]); // Зависимости: products и filter

    // Шаг 2: Мемоизация вычисления общей стоимости
    const totalPrice = useMemo(() => {
        console.log('Расчет общей стоимости...');
        return filteredProducts.reduce((sum, product) => sum + product.price, 0);
    }, [filteredProducts]); // Зависимость: filteredProducts

    return (
        <div className='result-block'>
            <h3>Список товаров</h3>
            <p>
                Общая стоимость: <span className='highlight'>{totalPrice.toFixed(2)} ₽</span>
            </p>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id} className='list-item'>
                        {product.name} - {product.price.toFixed(2)} ₽
                    </li>
                ))}
            </ul>
            {filteredProducts.length === 0 && <p className='message warning'>Товары не найдены</p>}
        </div>
    );
};

const ProductFilterExample: FC = () => {
    const [filter, setFilter] = useState<string>('');

    // Мемоизированный список товаров (статический)
    const [products] = useState<Product[]>([
        { id: 1, name: 'Яблоки', price: 120.5 },
        { id: 2, name: 'Бананы', price: 85.0 },
        { id: 3, name: 'Апельсины', price: 150.75 },
        { id: 4, name: 'Киви', price: 200.0 },
        { id: 5, name: 'Манго', price: 350.5 },
        { id: 6, name: 'Ананас', price: 280.0 },
    ]);

    return (
        <>
            <div className='result-block'>
                <h3>Пример 2: Фильтрация списка товаров</h3>
                <div className='form-group'>
                    <label htmlFor='product-filter'>Поиск по названию:</label>
                    <input
                        id='product-filter'
                        type='text'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder='Введите название товара'
                    />
                </div>
                {/* Шаг 3: Передача пропсов в дочерний компонент */}
                <ProductList products={products} filter={filter} />
            </div>
        </>
    );
};

export default ProductFilterExample;`;

    return (
        <AccordionExempleDesc title='Описание примера 2: Фильтрация списка с useMemo'>
            <div className='description-container'>
                <h4>Пошаговая процедура подключения useMemo для фильтрации данных:</h4>

                <SyntaxHighlighter
                    language='typescript'
                    style={coy}
                    className='code-highlighter'
                >
                    {codeExample}
                </SyntaxHighlighter>

                <div className='steps-container'>
                    <h5>Шаги работы с useMemo для фильтрации и вычислений:</h5>
                    <ol>
                        <li className='step-item'>
                            <strong>Мемоизация фильтрации товаров:</strong>
                            <br />
                            <code>
                                const filteredProducts = useMemo(() ={'>'} {'{ ... }'}, [products, filter]);
                            </code>
                            <br />
                            <small>
                                • Фильтрация выполняется только при изменении <code>products</code> или{' '}
                                <code>filter</code>
                            </small>
                            <br />
                            <small>
                                • <code>console.log</code> показывает, когда происходит пересчет
                            </small>
                            <br />
                            <small>• Предотвращает повторную фильтрацию при каждом рендере</small>
                        </li>
                        <li className='step-item'>
                            <strong>Цепочка мемоизированных вычислений:</strong>
                            <br />
                            <code>
                                const totalPrice = useMemo(() ={'>'} {'{ ... }'}, [filteredProducts]);
                            </code>
                            <br />
                            <small>
                                • Использует результат предыдущего useMemo (<code>filteredProducts</code>)
                            </small>
                            <br />
                            <small>• Вычисление общей стоимости зависит от отфильтрованного списка</small>
                            <br />
                            <small>
                                • Выполняется только при изменении <code>filteredProducts</code>
                            </small>
                        </li>
                        <li className='step-item'>
                            <strong>Оптимизация рендеринга списка:</strong>
                            <br />
                            <code>{`{filteredProducts.map((product) => (...))}`}</code>
                            <br />
                            <small>
                                • Стабильная ссылка на <code>filteredProducts</code> предотвращает лишние рендеры
                            </small>
                            <br />
                            <small>• React не перерисовывает элементы списка без необходимости</small>
                            <br />
                            <small>• Улучшает производительность при больших списках</small>
                        </li>
                        <li className='step-item'>
                            <strong>Управление состоянием фильтра:</strong>
                            <br />
                            <code>const [filter, setFilter] = useState{`<string>`}('');</code>
                            <br />
                            <small>• Изменение фильтра вызывает пересчет в useMemo</small>
                            <br />
                            <small>• Быстрый ввод не вызывает проблем с производительностью</small>
                            <br />
                            <small>• Пользователь получает мгновенную обратную связь</small>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h5>Архитектура цепочки вычислений с useMemo:</h5>
                <div className='flow-diagram-container'>
                    <h6 className='flow-diagram-title'>🔄 Поток данных и вычислений:</h6>

                    <div className='flow-diagram'>
                        <div className='flow-box'>
                            <strong>products + filter</strong>
                        </div>
                        <div className='flow-arrow'>→</div>
                        <div className='flow-box'>
                            <strong>useMemo #1</strong>
                            <br />
                            <small>filteredProducts</small>
                        </div>
                        <div className='flow-arrow'>→</div>
                        <div className='flow-box'>
                            <strong>useMemo #2</strong>
                            <br />
                            <small>totalPrice</small>
                        </div>
                        <div className='flow-arrow'>→</div>
                        <div className='flow-box'>
                            <strong>UI</strong>
                        </div>
                    </div>

                    <p>
                        <strong>Ключевые преимущества:</strong>
                    </p>
                    <ul>
                        <li>Каждое вычисление выполняется только когда действительно нужно</li>
                        <li>Изменения в одном useMemo автоматически обновляют зависимые useMemo</li>
                        <li>Минимальное количество пересчетов при быстром вводе</li>
                        <li>Предсказуемое поведение и легкая отладка</li>
                    </ul>
                </div>

                <h5>Паттерны использования useMemo для работы с данными:</h5>
                <div className='patterns-container'>
                    <h6 className='patterns-title'>🎯 Распространенные сценарии:</h6>

                    <p>
                        <strong>1. Фильтрация с несколькими критериями:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const filteredData = useMemo(() => {
    return data.filter(item =>
        item.name.includes(nameFilter) &&
        item.category === categoryFilter &&
        item.price >= minPrice &&
        item.price <= maxPrice
    );
}, [data, nameFilter, categoryFilter, minPrice, maxPrice]);`}
                    </pre>

                    <p>
                        <strong>2. Сортировка с пользовательскими правилами:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        return 0;
    });
}, [products, sortBy]);`}
                    </pre>

                    <p>
                        <strong>3. Агрегация и статистика:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const statistics = useMemo(() => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const average = total / data.length;
    const max = Math.max(...data.map(item => item.value));
    return { total, average, max };
}, [data]);`}
                    </pre>
                </div>

                <h5>Производительность и отладка:</h5>
                <div className='debug-container'>
                    <h6 className='debug-title'>🔧 Инструменты для отладки useMemo:</h6>

                    <p>
                        <strong>1. Использование console.log для отслеживания вычислений:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const result = useMemo(() => {
    console.log('Выполняется вычисление...');
    // сложная логика
    return computedValue;
}, [dependencies]);`}
                    </pre>

                    <p>
                        <strong>2. React DevTools Profiler:</strong>
                    </p>
                    <ul>
                        <li>Записывайте производительность при вводе в поле фильтра</li>
                        <li>Сравнивайте время рендеринга с useMemo и без</li>
                        <li>Идентифицируйте ненужные ре-рендеры</li>
                    </ul>

                    <p>
                        <strong>3. Измерение времени выполнения:</strong>
                    </p>
                    <pre className='code-example'>
                        {`const result = useMemo(() => {
    const start = performance.now();
    // вычисления
    const end = performance.now();
    console.log(\`Время выполнения: \${end - start}ms\`);
    return computedValue;
}, [dependencies]);`}
                    </pre>
                </div>

                <h5>Лучшие практики для цепочек вычислений:</h5>
                <ul>
                    <li>
                        <strong>Разделяйте вычисления:</strong> разбивайте сложные операции на отдельные useMemo
                    </li>
                    <li>
                        <strong>Правильные зависимости:</strong> указывайте минимально необходимые зависимости
                    </li>
                    <li>
                        <strong>Избегайте циклических зависимостей:</strong> не создавайте цепочки, где A зависит от B,
                        а B от A
                    </li>
                    <li>
                        <strong>Тестируйте с реальными данными:</strong> убедитесь, что оптимизация работает с
                        ожидаемыми объемами данных
                    </li>
                    <li>
                        <strong>Документируйте сложные вычисления:</strong> добавляйте комментарии для объяснения
                        бизнес-логики
                    </li>
                </ul>

                <p>
                    <strong>Производительность:</strong> В этом примере useMemo предотвращает повторные вычисления
                    фильтрации и суммы при каждом нажатии клавиши, что особенно важно при работе с большими наборами
                    данных.
                </p>
                <p>
                    <strong>Масштабируемость:</strong> Паттерн цепочки useMemo хорошо масштабируется для сложных
                    приложений с множеством зависимых вычислений.
                </p>
            </div>
        </AccordionExempleDesc>
    );
};

export default ProductFilterExampleDesc;

import { FC, useState, useMemo } from 'react';
import ProductFilterExampleDesc from './ProductFilterExampleDesc/ProductFilterExampleDesc.component';

interface Product {
    id: number;
    name: string;
    price: number;
}

// Компонент для отображения списка товаров
const ProductList: FC<{ products: Product[]; filter: string }> = ({ products, filter }) => {
    // Отфильтрованные товары (мемоизированы)
    const filteredProducts = useMemo(() => {
        console.log('Фильтрация товаров...');
        return products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
    }, [products, filter]);

    // Общая стоимость (мемоизирована)
    const totalPrice = useMemo(() => {
        console.log('Расчет общей стоимости...');
        return filteredProducts.reduce((sum, product) => sum + product.price, 0);
    }, [filteredProducts]);

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

    // Мемоизированный список товаров
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
                <ProductList products={products} filter={filter} />
            </div>
            <ProductFilterExampleDesc />
        </>
    );
};

export default ProductFilterExample;

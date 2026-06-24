const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для парсингу JSON
app.use(express.json());

// Статичні файли (фронтенд)
app.use(express.static('public'));

// Імітація бази даних
let products = [
    { id: 1, name: 'iPhone 9', category: 'smartphones', price: 549 },
    { id: 2, name: 'MacBook Pro', category: 'laptops', price: 1999 }
];
let nextId = 3;

// ===== Маршрути =====

// GET /product/list – отримати всі продукти
app.get('/product/list', (req, res) => {
    res.json(products);
});

// POST /product/create – створити новий продукт
app.post('/product/create', (req, res) => {
    const { name, category, price } = req.body;
    if (!name || !category || price === undefined) {
        return res.status(400).json({ error: 'Всі поля обов\'язкові' });
    }
    const newProduct = { id: nextId++, name, category, price: Number(price) };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT /product/:id – оновити ціну продукту
app.put('/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const { price } = req.body;
    if (price === undefined) {
        return res.status(400).json({ error: 'Вкажіть нову ціну' });
    }
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Продукт не знайдено' });
    }
    product.price = Number(price);
    res.json(product);
});

// DELETE /product/:id – видалити продукт
app.delete('/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Продукт не знайдено' });
    }
    const deleted = products.splice(index, 1);
    res.json({ message: 'Продукт видалено', product: deleted[0] });
});

// Кореневий маршрут (для завдання 1) – відповідає "Hello, Express!"
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
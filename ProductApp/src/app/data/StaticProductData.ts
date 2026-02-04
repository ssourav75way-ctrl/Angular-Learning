import { Product } from '../models/ProductModel';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    description: '14-inch developer laptop',
    price: 75000,
    category: 'Electronics',
    inStock: true,
    quantity: 5,
    isNew: true,
  },
  {
    id: 2,
    name: 'Headphones',
    description: 'Noise cancelling headphones',
    price: 12000,
    category: 'Electronics',
    inStock: true,
    quantity: 5,
    isNew: false,
  },
  {
    id: 3,
    name: 'Book',
    description: 'Clean Code by Robert C. Martin',
    price: 499,
    category: 'Books',
    inStock: false,
    quantity: 5,
    isNew: false,
  },
];

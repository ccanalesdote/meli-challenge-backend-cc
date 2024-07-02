import { Request, Response } from 'express';
import { Category } from '../models/category';
import { findCategoryPath } from '../utils/searchUtils';

import categories from '../data/categories.json';
import products from '../data/products.json';

export const searchProducts = (req: Request, res: Response) => {

  const query: string = (req.query.q)?.toString() || '';

  if (!query) {
    return res.status(400).json({ message: 'Parámetro de búsqueda requerido' });
  }

  const filteredProducts = products
    .filter((product: { title: string; }) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    .map(product => ({
      ...product,
      categories: findCategoryPath(product.category_id, categories as Category[])
    }));

  res.json({
    author: { name: "Nombre del autor", lastname: "Apellido del autor" },
    items: filteredProducts
  });
};
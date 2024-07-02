import { Request, Response } from 'express';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { findCategoryPath } from '../utils/searchUtils';

import categories from '../data/categories.json';
import products from '../data/products.json';

export const searchProducts = (req: Request, res: Response) => {

  // Obtener el parámetro de búsqueda
  const query: string = (req.query.q)?.toString() || '';

  if (!query) {
    return res.status(400).json({ message: 'Parámetro de búsqueda requerido' });
  }

  // Filtrar productos por título
  const filteredProducts = products
    .filter((product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    .map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      picture: product.picture,
      condition: product.condition,
      free_shipping: product.free_shipping,
      categories: findCategoryPath(product.category_id, categories as Category[])
    }));

  // Encontrar las categorías más repetidas
  const categoryCounts: { [key: string]: number } = {};
  filteredProducts.forEach(product => {
    const categoryString = product.categories?.join(',');
    if (categoryString) {
      categoryCounts[categoryString] = (categoryCounts[categoryString] || 0) + 1;
    }
  });

  // Ordenar las categorías por número de repeticiones y tomar la más repetida
  const mostRepeatedCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)
    .map(([categoryString]) => categoryString.split(','));

  res.json({
    author: { name: "Nombre del autor", lastname: "Apellido del autor" },
    categories: mostRepeatedCategories[0] || filteredProducts[0]?.categories || [],
    items: filteredProducts
  });
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Id de producto requerido' });
  }

  // Buscar el producto por id
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  // Encontrar las categorías del producto
  const productWithCategories = {
    ...product,
    categories: findCategoryPath(product.category_id, categories as Category[])
  };

  res.json({
    author: { name: "Nombre del autor", lastname: "Apellido del autor" },
    item: productWithCategories
  });
};
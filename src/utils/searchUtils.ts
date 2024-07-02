import { Category } from "../models/category";

export function findCategoryPath(categoryId: string, categories: Category[]): string[] {
  for (const category of categories) {
    if (category.id === categoryId) {
      return [category.name];
    }
    if (category.subcategories) {
      const path = findCategoryPath(categoryId, category.subcategories);
      if (path.length > 0) {
        return [category.name, ...path];
      }
    }
  }
  return [];
}
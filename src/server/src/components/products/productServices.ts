import { validateProduct } from './productValidations';
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from './productDAL';
import type { Product } from './productInterface';

export async function createNewProduct(input: unknown): Promise<Product> {
  const validatedData = validateProduct(input); // Valida los datos con Zod
  return await createProduct(validatedData);
}

export async function fetchProductById(id: string): Promise<Product | null> {
  return await getProductById(id);
}

export async function fetchAllProducts(): Promise<Product[]> {
  return await getAllProducts();
}

export async function modifyProduct(id: string, updates: Partial<Omit<Product, 'id'>>): Promise<boolean> {
  return await updateProduct(id, updates);
}

export async function removeProduct(id: string): Promise<boolean> {
  return await deleteProduct(id);
}
import { client } from '../../../database/client.js';
import type { Product } from './productInterface.ts';



export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const result = await client.execute(
    'INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)',
    [product.name, product.price, product.description, product.stock]
  );
  return { id: result.insertId.toString(), ...product };
}

export async function getProductById(id: string): Promise<Product | null> {
  const result = await client.execute('SELECT * FROM products WHERE id = ?', [id]);
  return result.rows.length > 0 ? result.rows[0] : null;
}

export async function getAllProducts(): Promise<Product[]> {
  const result = await client.execute('SELECT * FROM products');
  return result.rows;
}

export async function updateProduct(id: string, updates: Partial<Omit<Product, 'id'>>): Promise<boolean> {
  const keys = Object.keys(updates);
  const values = Object.values(updates);
  const setClause = keys.map((key, i) => `${key} = ?`).join(', ');

  const result = await client.execute(
    `UPDATE products SET ${setClause} WHERE id = ?`,
    [...values, id]
  );
  return result.rowsAffected > 0;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const result = await client.execute('DELETE FROM products WHERE id = ?', [id]);
  return result.rowsAffected > 0;
}

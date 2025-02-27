import crypto from 'crypto';
import bcrypt from 'bcrypt';
import type { Product } from './productInterface';
import { validateProduct } from './productValidations';

export class ProductModel implements Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: boolean;

  private constructor(data: Omit<Product, 'id'>) {
    this.id = crypto.randomUUID(); // Genera un ID único
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.stock = data.stock; // La contraseña se guarda sin hash inicialmente
  }

  // Método estático factory para crear un producto
  static async create(data: Omit<Product, 'id'>): Promise<Product> {
    const validatedData = validateProduct(data); // Valida los datos de entrada

     const product = new ProductModel(validatedData);
    return product;
  }
}
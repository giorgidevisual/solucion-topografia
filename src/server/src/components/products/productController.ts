// src/server/products/productController.ts
import type{ Request, Response, } from 'express';
import {
  createNewProduct,
  fetchProductById,
  fetchAllProducts,
  modifyProduct,
  removeProduct,
} from './productServices';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createNewProduct(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await fetchProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
};

export const getAllProductsController = async (_req: Request, res: Response) => {
  const products = await fetchAllProducts();
  res.json(products);
};

export const updateProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await modifyProduct(id, req.body);
  if (success) {
    res.json({ message: 'Producto actualizado correctamente' });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await removeProduct(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
};
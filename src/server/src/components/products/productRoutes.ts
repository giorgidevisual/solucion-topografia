import { Router } from 'express';
import {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductController,
  deleteProductController,
} from './productController';

const router = Router();

router.post('/', createProductController); // Crear producto
router.get('/:id', getProductByIdController); // Obtener producto por ID
router.get('/', getAllProductsController); // Obtener todos los productos
router.put('/:id', updateProductController); // Actualizar producto
router.delete('/:id', deleteProductController); // Eliminar producto

export default router;
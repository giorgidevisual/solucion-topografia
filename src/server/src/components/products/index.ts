// src/server/products/index.ts
export * from './productInterface'; // Exporta la interfaz `Product`
export * from './productModel'; // Exporta la clase `ProductModel`
export * from './productDAL'; // Exporta las funciones DAL (createProduct, getProductById, etc.)
export * from './productServices'; // Exporta las funciones de servicios (createNewProduct, fetchProductById, etc.)
export * from './productController'; // Exporta los controladores HTTP
export * from './productRoutes'; // Exporta las rutas `/api/products`
export * from './productValidations'; // Exporta las validaciones Zod
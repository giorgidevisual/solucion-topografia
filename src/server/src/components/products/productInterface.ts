
export interface Product {
  id: string; // ID único generado con Crypto
  name: string;
  price: number;
  description: string;
  stock: boolean; // Campo opcional para contraseñas (por ejemplo, para administradores)
}
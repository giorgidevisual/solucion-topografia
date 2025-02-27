import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  price: z.number().positive('El precio debe ser positivo'),
  description: z.string().min(1, 'La descripción es requerida'),
  stock: z.boolean()
});

export function validateProduct(input: unknown): z.infer<typeof productSchema> {
  return productSchema.parse(input);
}



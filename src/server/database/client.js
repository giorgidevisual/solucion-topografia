import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.TURSO_DB_URL;
const authToken = process.env.TURSO_DB_TOKEN;

if (!dbUrl || !authToken) {
  throw new Error("Las variables de entorno TURSO_DB_URL y TURSO_DB_TOKEN deben estar definidas");
}

const client = createClient({
  url: dbUrl,
  authToken: authToken
});

client.execute = async function (query, params = []) {
  // Implementación de la función execute
  return await client.query(query, params);
};

export { client };
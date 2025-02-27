import express from 'express';
import { handler as ssrHandler } from '../../../dist/server/entry.mjs';
import dotenv from 'dotenv';    
dotenv.config();


const app = express();
app.disable('x-powered-by');
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

app.use(express.json());


app.use((req, res, next) => {
    const locals = {
      title: 'Nuevo título',
    };
  
    ssrHandler(req, res, next, locals);
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});



import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();
const port = 3000;

app.use(cors()); 

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { clientesRouter } from './routes/clienteRouter';
import { errorHandler } from './middlewares/erroHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/clientes', clientesRouter);

// Rota de teste
app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

// Middleware para rotas não encontradas (404)
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware de erro (precisa estar por último)
app.use(errorHandler);

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});

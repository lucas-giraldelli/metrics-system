import { Router } from 'express';
import loggingRouter from './logging.routes';

const routes = Router();

routes.use('/metrics', loggingRouter);

export default routes;

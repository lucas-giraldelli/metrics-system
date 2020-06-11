import { Router } from 'express';
import loggingRouter from './logging.routes';

const routes = Router();

routes.use('/metric', loggingRouter);

export default routes;

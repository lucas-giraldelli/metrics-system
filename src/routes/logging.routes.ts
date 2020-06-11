import { Router } from 'express';

import LoggingRepository from '../repositories/LoggingRepository';

const loggingRouter = Router();
const loggingRepository = new LoggingRepository();

loggingRouter.get('/all', async (request, response) => {
  const metricSum = await loggingRepository.listAll();
  return response.json(metricSum);
});

loggingRouter.post('/:metric', async (request, response) => {
  const { value } = request.body;
  const { metric } = request.params;

  const roundedValue = Math.round(value);

  const logging =  await loggingRepository.create(metric, roundedValue);

  return response.json(logging);
});

export default loggingRouter;

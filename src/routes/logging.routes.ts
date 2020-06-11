import { Router } from 'express';

import LoggingRepository from '../repositories/LoggingRepository';

const loggingRouter = Router();
const loggingRepository = new LoggingRepository();

loggingRouter.get('/all', async (request, response) => {
  const allMetrics = await loggingRepository.listAll();

  return response.json(allMetrics);
});

loggingRouter.get('/:metric/sum', async (request, response) => {
  try {
    const { metric } = request.params;
    const metricSum = await loggingRepository.listMetricByLastHourAndSum(
      metric,
    );

    return response.json({ value: metricSum });
  } catch {
    return response.json({ message: 'This metric has no log' });
  }
});

loggingRouter.post('/:metric', async (request, response) => {
  const { value } = request.body;
  const { metric } = request.params;

  if (!metric) {
    return response.json({ message: 'Please insert a non empty metric' });
  }

  const roundedValue = Math.round(value);

  const logging = await loggingRepository.create(metric, roundedValue);

  return response.json(logging);
});

export default loggingRouter;

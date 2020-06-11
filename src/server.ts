import express, { json } from 'express';
import routes from './routes';

const app = express();

app.use(json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({ metric: 'Running!' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started!');
});

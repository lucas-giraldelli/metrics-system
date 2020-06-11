import { uuid } from 'uuidv4';

class Logging {
  id: string;

  metric: string;

  value: number;

  created_at: string;

  constructor(metric: string, value: number) {
    this.id = uuid();
    this.metric = metric;
    this.value = value;
    const created_at = new Date().toISOString();
    this.created_at = created_at;
  }
}

export default Logging;

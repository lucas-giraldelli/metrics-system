import Logging from '../models/Logging';
import connection from '../database/connection';

class LoggingRepositories {
  public async listByMetricAndSum(): Promise<Logging[] | undefined> {
    // const logByMetric = this.loggings.filter(log => log.metric === metric);

    const logs: Logging[] = await connection('loggings').select('*');

    return logs || undefined;
  }

  public async listAll(): Promise<Logging[] | undefined> {
    const logs: Logging[] = await connection('loggings').select('*');

    return logs || undefined;
  }

  // public findByDateAndHour() {}

  public async create(metric: string, value: number): Promise<Logging> {
    const logging = new Logging(metric, value);

    await connection('loggings').insert(logging);

    return logging;
  }
}

export default LoggingRepositories;

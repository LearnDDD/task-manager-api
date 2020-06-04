import { Config } from '@/interfaces/config';
import * as mysql from 'mysql';


export class MySQLConnectionFactory {
  private readonly config: Config;

  public constructor(config: Config) {
    this.config = config;
  }

  public create(): mysql.Connection {
    // return mysql.createPool({
    //   connectionLimit: 5,
    //   host: this.config.hostname,
    //   user: this.config.user,
    //   password: this.config.password,
    //   database: this.config.database,
    //   port: this.config.port,
    //   insecureAuth: false
    // })
    return mysql.createConnection({
      host: this.config.hostname,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database,
    });
  }
}

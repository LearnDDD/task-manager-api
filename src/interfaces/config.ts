export class Config {
  public hostname: string;
  public port: number;
  public user: string;
  public password: string;
  public database: string;

  public constructor(hostname: string, port: number, user: string, password: string, database: string) {
    this.hostname = hostname;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
  }

  public static load(): Config {
    // if (process.env.hostname == null || process.env.hostname != undefined) {
    //   throw new
    // }
    return new Config("localhost", 3306, "root", "root", "task_manager");
  }
}

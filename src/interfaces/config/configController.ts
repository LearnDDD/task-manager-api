import * as Express from "express";
import { inject, injectable } from 'inversify';
import TYPES from '../types';
import { Config } from '../config';

@injectable()
export class ConfigController {
  @inject(TYPES.Config)
  private readonly config!: Config;

  public async execute(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    res.statusCode = 200;
    res.contentType('application/json');
    return res.send({
      'hostname': this.config.hostname,
      'port': this.config.port,
    });
  }
}

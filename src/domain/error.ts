import { map } from './utils';

export class ApplicationError extends Error {
  readonly datas?: object;

  constructor(e?: string, datas?: object) {
    super(e);
    this.datas = datas;
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

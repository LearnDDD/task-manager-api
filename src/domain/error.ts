import { map } from './utils';

export class ApplicationError extends Error {
  readonly datas?: {};

  constructor(e?: string, datas?: {}) {
    super(e);
    this.datas = datas;
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toString() {
    if (this.datas === null || this.datas === undefined) {
      return `${this.name}: ${this.message}`;
    }
    return `${this.name} ${this.message}¥n` + JSON.stringify(this.datas);
  }
}

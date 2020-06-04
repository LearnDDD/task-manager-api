import { TaskRepository, LogLevel } from '@/application';
import { injectable, inject } from 'inversify';
import TYPES from './types';
import * as mysql from 'promise-mysql';
import { TaskID, Task } from '@/domain';
import { logger } from '..';
import { Query } from 'mysql';
import Bluebird from 'bluebird';

@injectable()
export class MySQLTaskRepository implements TaskRepository {
  @inject(TYPES.Connection)
  private readonly connection!: mysql.Connection;

  async generateID(): Promise<TaskID> {
    // logger.log(LogLevel.debug, "start", undefined, undefined);
    // try {
    //   const result: Promise<any> = this.connection.query('INSERT INTO task(title, details, taskTypeID, parentTaskID) VALUES("", null, null, null);');
    //   // result.then ((value) => {
    //   //   logger.log(LogLevel.debug, "sample", undefined, {"value": value});
    //   // });
    //   const sample:object = await result;
    //   logger.log(LogLevel.debug, 'end', undefined, undefined);
    //   throw TypeError("sample");
    //   return result;
    // } catch(e) {
    //   logger.log(LogLevel.debug, 'catch', e, undefined);
    //   throw e;
    // }
    return Promise.resolve(new TaskID('0'));
  }

  async store(task: Task): Promise<Task> {
    // const result:Query = await this.connection.query('INSERT INTO task(title, details, taskTypeID, parentTaskID) VALUES("", null, null, null);');
    // return result.then((value) => {
    //   return task;
    // });
    const result = this.connection.query('select * from task');
    let test: Bluebird<any>
    console.log(result.toString());
    console.log(result);
    // result.then((value) => console.log('then'))
    // .catch((e) => console.log(e))
    // .finally(() => console.log('finally'));
    // console.log(result);
    // logger.log(LogLevel.debug, 'RowDataPacket', undefined, result);
    // for(var record of result) {
    //   const typename = record.toString();
    //   if (typename == "RowDataPacket") {
    //   } else {
    //     logger.log(LogLevel.debug, typename, undefined, undefined);
    //   }
    // }

    return new Promise(function (resolve) {
      return null;
    });
  }
}

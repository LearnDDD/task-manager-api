import express from 'express';
import "reflect-metadata";
import * as Controllers from './controllers';
import { validator } from './task/createTaskController';

let router = express.Router();

router.post('/task/create', validator, (req: express.Request, res: express.Response, next: express.NextFunction) =>
  Controllers.createTaskController.execute(req, res, next)
);
router.get('/config', (req: express.Request, res: express.Response, next: express.NextFunction) =>
  Controllers.configController.execute(req, res, next)
);

export default router;

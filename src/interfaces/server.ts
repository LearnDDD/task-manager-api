import express from 'express'
import router from './router'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import { logger } from '@/infrastructure';
import { LogLevel } from '@/application';

const app = express();

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  logger.log(LogLevel.info, 'Request received.', undefined, {
    'Headers': req.headers,
    'Cookies': req.cookies,
    'Method': req.method,
    'Protocol': req.protocol + req.httpVersion,
    'HostName': req.hostname,
    'Path': req.path,
    'Query': req.query,
    'Body': req.body,
  })
  next();
});
app.use('/', router);

app.listen(3000, () => logger.log(LogLevel.info, 'listening on port 3000. http://localhost:3000'));

export default app;

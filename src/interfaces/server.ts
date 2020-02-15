import express from 'express'
import router from './router'
import bodyParser from 'body-parser'

const app = express();

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => console.log('listening on port 3000'));

export default app;

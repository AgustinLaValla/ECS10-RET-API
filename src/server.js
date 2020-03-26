import express from 'express';
import { json } from 'express';
import IndexRoutes from '../routes/index.routes';
import TaskRoutes from '../routes/task.routes' ;

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(json()); //Allow to retrieve json data
app.use((req, res, next) => {   //CORS:
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use(IndexRoutes);
app.use('/task', TaskRoutes);

export default app;
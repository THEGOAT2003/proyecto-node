require('dotenv').config();



const express = require('express');

const connectMongo = require('./utils/db');
connectMongo();

const cors = require("cors");
const logger = require("morgan")

const HTTPSTATUSCODE = require('./utils/httpStatusCode');

const app = express();
app.use(express.json());

const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");
 
/* ROUTES */

const movieRouter = require('./src/routes/movie.routes');
app.use('/api/movies', movieRouter);

app.get('/', (request, response) => {
	response.status(200).json({
    	message: 'Welcome to server',
    	app: 'My App'
	});
});
 
app.use((request, response, next) => {
    let error = new Error();
    error.status = 404;
    error.message = HTTPSTATUSCODE[404];
    next(error);
  });
 
app.use((error, request, response, next) => {
    return response.status(error.status || 500).json(error.message || 'Unexpected error');
})
 
app.disable('x-powered-by');
/* DEFINIR EL PUERTO E INICIAR LA ESCUCHA */

app.listen(process.env.PORT, () => {
	console.log(`app running in port ${process.env.PORT}`)
});

//Native module
import http from 'http';
import { join } from 'path';
//External module
import express from "express";
import colors from "colors";
import bodyParser from 'body-parser';

const PORT = 3000;

colors.enable();
const app = express();
const server = http.createServer(app);

/**
 * Imports routes 
 */
import admin from './routes/admin';
import notFound from './routes/notFound';
/**
 * Use middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(join(require.main.path, 'public')));
app.use(express.json());
//Routes
app.use('/admin', admin);
app.use(notFound);  //Page not found */


server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`.cyan.bold);
});

import express from 'express';
import { engine } from 'express-handlebars';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

// express
const app = express();
const port = 3000;

// __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));

// routes
app.use('/', router);

// server
app.listen(port, () => {
    console.log(`Listening at PORT: ${port}`)
});


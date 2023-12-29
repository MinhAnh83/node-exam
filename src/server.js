const express = require('express');
const path = require('path');
const route = require('../src/routes/index');




const morgan = require('morgan');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;


//static file hinh
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname,'resources/views');

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));


// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname,'resources/views'));
// console.log('path',path.join(__dirname,'resources/views'))
//path.join(__dirname).mean /exam1/src vi tri cu server.js

app.use(morgan('combined'))

route(app);

app.listen(port,()=>console.log(`Listen port=${port}`))
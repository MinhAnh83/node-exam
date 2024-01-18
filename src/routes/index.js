const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
function route(app) {
  app.use('/news', newRouter);
  app.use('/course', courseRouter);
  app.use('/', siteRouter);

  // app.get('/news',(req,res)=>
  //  res.render('news'))
}
module.exports = route;

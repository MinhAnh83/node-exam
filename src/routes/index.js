const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newRouter);
  app.get('/', siteRouter);

  // app.get('/news',(req,res)=>
  //  res.render('news'))
}
module.exports = route;

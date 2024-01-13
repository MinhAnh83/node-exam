class NewsController {
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('detail');
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new NewsController();

const Course = require('../models/Course');

class SiteController {
  //[GET]
  async index(req, res) {
    const instance = await Course.find({});
    if (instance) {
      await res.json(instance);
    }
    else{
      res.status(400).json({error:'message error'})
    }
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports=new SiteController();
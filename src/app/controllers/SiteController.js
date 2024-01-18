const Course = require('../models/Course');
const {mutipleMongosetoObject} =require('../../util/mongoose'); //chuyển thành object thông thường
class SiteController {
  //[GET]
  async index(req, res) {
    let courses =  await Course.find({}); 
     (courses) ? res.render('home', { title: 'HOME PAGE', courses: mutipleMongosetoObject(courses) }) :  res.status(400).json({ error: 'No courses found' });
  
  
     
  
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports=new SiteController();
const Course = require('../models/Course');
const {mutipleMongosetoObject, MongoosetoObject} =require('../../util/mongoose'); //chuyển thành object thông thường
class CourseController {
  //[GET] /course/:slug
  async show(req, res) {
   const course= await Course.findOne({slug: req.params.slug}); //slug dau a  key tren model
  (course) ? res.render('course/show',{course : MongoosetoObject(course) }) : res.json(null);
  
     
  
  }

 
}

module.exports=new CourseController();
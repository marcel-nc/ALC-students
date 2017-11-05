const express = require('express');
const router = express.Router()

var db = require('diskdb');
db.connect(__dirname, ['students']);

router.post('/student', function (req, res, next){
    var student = req.body;
    if(!student.name || !(student.matric_number) || !(student.department) || !(student.faculty) || !(student.level) ){
        res.status(400);
        res.json({
            error: 'error'
        });

    }else{
        db.students.save(student);
        res.json(student);
    }
})

router.get('/students', function(req, res, next) {
    var foundStudent = db.students.find();
    console.log(foundStudent);
    res.json(foundStudent);
    foundStudents = db.students.find();
    console.log(foundStudent);
  });

  router.put('/student/:id', function(req, res, next) {
      var updateStudent = req.body;
      db.students.update({
          _id:req.params.id
      }, updateStudent);
      res.json({msg:req.params.id + 'updated'})
  })

  router.delete('/student/:id', function(req, res, next) {
    console.log(req.params);
    db.students.remove({
      _id: req.params.id
    });
    res.json({ msg: req.params.id + ' deleted' });
  });
  module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../db/models/user')
const Campus = require('../db/models/campus')

//get routes
router.get('api/campuses/:campusId', function(req,res,next){
	let id = req.params.campusId
	Campus.findById(id)
	.then(function(campus){
		if(!campus){
			res.sendStatus(404);
		}
		res.json(campus);
	})
	.catch(next);
})
router.get('api/campuses', function(req,res,next){
	Campus.findAll({})
	.then(function(campuses){
		res.json(campuses)
	})
	.catch(next);
})
router.get('api/students/:studentId', function(req,res,next){
	let id = req.params.studentId
	User.findById(id)
	.then(function(student){
		if(!student){
			res.sendStatus(404);
		}
		res.json(student);
	})
	.catch(next);

})
router.get('api/students', function(req, res, next){
	User.findAll({})
	.then(function(students){
		res.json(students);
	})
	.catch(next);
})

router.get('/', function(req,res,next){
	res.send('hi');
})


//post routes 

router.post('api/campuses', function(req,res,next){
	var name = req.body.name;
	var image; //WHAT DO I DO WITH THE IMAGE 

	Campus.create({
		name: name, 
		//image:image ???
	}).then(function(campus){
		res.json(campus);
	})
	.catch(next);
})

router.post('api/students', function(req,res,next){
	var name = req.body.name;
	var email = req.body.email; 
	//don't forget to set campus! 
	User.create({
		name: name, 
		email: email
		//CAMPUS????
	}).then(function(student){
		res.json(student);
	})
	.catch(next);
})

//put routes 

router.put('api/students/:studentId', function(req,res,next){
	let id = req.params.studentId

	User.findById(id)
	.then(function(student){
		return student.update(req.body)
	}).then(function(student){
		res.json(student);
	})
	.catch(next);
})

router.put('api/campuses/:campusId', function(req,res,next){
	let id = req.params.campusId

	Campus.findById(id)
	.then(function(campus){
		return campus.update(req.body)
	}).then(function(campus){
		res.json(campus);
	})
	.catch(next);
})

//delete routes

router.delete('api/campuses/:campusId', function(req,res,next){
	let id = req.params.campusId; 
	Campus.destroy({
		where:{
			id: id
		}
	})
	.catch(next);

})

router.delete('api/students/:studentId', function(req,res,next){
	let id = req.params.studentId;
	User.destroy({
		where:{
			id: id
		}
	})
	.catch(next);
})





// REMEMBER ERROR HANDLING.catch(err)
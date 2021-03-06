'use strict'
const api = require('express').Router()
const db = require('../db')
const User = require('../db/models/user')
const Campus = require('../db/models/campus')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.get('/hello', (req, res,next) => res.send({hello: 'world'}))
//get routes
api.get('/campuses/:campusId', function(req,res,next){
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
api.get('/campuses', function(req,res,next){
	Campus.findAll({})
	.then(function(campuses){
		res.json(campuses)
	})
	.catch(next);
})
api.get('/students/:studentId', function(req,res,next){
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
api.get('/students', function(req, res, next){
	User.findAll({})
	.then(function(students){
		res.json(students);
	})
	.catch(next);
})




//post routes 

api.post('/campuses', function(req,res,next){
	var name = req.body.name;
	var motto = req.body.motto;

	Campus.create({
		name: name, 
		motto: motto
	}).then(function(campus){
		res.json(campus);
	})
	.catch(next);
})

api.post('/students', function(req,res,next){
	var name = req.body.name;
	var email = req.body.email; 
	
	User.create({
		name: name, 
		email: email
		
	}).then(function(student){
		res.json(student);
	})
	.catch(next);
})

//put routes 

api.put('/students/:studentId', function(req,res,next){
	let id = req.params.studentId

	User.findById(id)
	.then(function(student){
		return student.update(req.body)
	}).then(function(student){
		res.json(student);
	})
	.catch(next);
})

api.put('/campuses/:campusId', function(req,res,next){
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

api.delete('/campuses/:campusId', function(req,res,next){
	let id = req.params.campusId; 
	Campus.destroy({
		where:{
			id: id
		}
	})
	.catch(next);

})

api.delete('/students/:studentId', function(req,res,next){
	let id = req.params.studentId;
	User.destroy({
		where:{
			id: id
		}
	})
	.catch(next);
})



module.exports = api


'use strict';
const Sequelize = require('sequelize')
const db = require('../index.js')


module.exports = db.define('user', {
 name:{
 	type: Sequelize.STRING,
 	allowNull: false
 }, 
 email:{
 	type: Sequelize.STRING, 
 	allowNull: false,
 	validate:{
 		isEmail: true
 	}
 }, 
 campusId:{
 	type: Sequelize.INTEGER
 }
})






// do i need a type enum student/teacher? 
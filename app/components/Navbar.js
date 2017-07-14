import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

	render (){
		return (
			<nav>
				<Link to="/api/campuses">All Campuses</Link>
				<Link to="/api/students">All Students</Link>
				<Link to="/api/students/addStudent">Add a Student</Link>
				<Link to="/api/campuses/addCampus">Add a Campus</Link>
			</nav>
			)
	}
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class StudentList extends Component {
	constructor (){
		super();
		this.state = {
			students: []
		}
	}

	componentDidMount(){
		axios.get('/students')
		.then(res => res.data)
		.then(students => {
			this.setState({ students })
		})
	}
	render(){
		return(
			<div>
			<h3>Students</h3>
			<ul>
			{
				this.state.students.map(student => {
					return (

					<li><Link to="{`/students/${student.id}`}">{student.name}, {student.email}</Link></li>
					)
				})
			}
			</ul>
			</div>

			)
	}
}
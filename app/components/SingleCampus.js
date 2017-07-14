import React, { Component } from 'react';
import axios from 'axios'


export default class SingleCampus extends Component {
	constructor(){
		super();
		this.state ={
			campus : {},
			students: []
		};
	}
	componentDidMount(){
	const campusId = this.props.match.params.campusId;
		axios.get(`/campuses/${campusId}`)
		.then(res => res.data)
		.then( campus => this.setState({ campus }))

		axios.get(`/students`, {
			params: {
				campusId: campusId
			}
		})
		.then(res => res.data)
		.then( students => this.setState({ students }))
	}

	render(){
		return(
		<div>
		<h3>{this.state.campus.name}</h3>
		<h4>{this.state.campus.motto}</h4>
		<ul>
		{
			this.state.students.map(student => {
				return (
					<li>{student.name}, {student.email}</li>
					)
			})
		}
		</ul>
		</div>
		)
	}

}
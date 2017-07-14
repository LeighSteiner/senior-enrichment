import React, { Component } from 'react';
import axios from 'axios'

export default class SingleStudent extends Component {
	constructor(){
		super();
		this.state = {
			student: {}
		}
	}

	componentDidMount(){
		const studentId = this.props.match.params.studentId;
		axios.get(`/students/${studentId}`)
		.then(res => res.data)
		.then(student => this.setState({ student }))
	}

	render(){
		return(
			<div>
			<h3>{this.state.student.name}</h3>
			<h4>Contact me at: {this.state.student.email}</h4>
			</div>
			)
	}
}
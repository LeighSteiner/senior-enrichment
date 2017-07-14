import React, { Component } from 'react';
import axios from 'axios'

export default class AddUser extends Component {

	constructor(){
		super();
		this.state={
			name:"", 
			email:""
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChangeName(e){
		this.setState({name:e.target.value});
	}
	handleChangeEmail(e){
		this.setState({motto: e.target.value})
	}
	handleSubmit(e){
		e.preventDefault();
		axios.post('/api/students', {name: this.state.name, email: this.state.email})
		.then(res => res.data)
		.then( result => {
			console.log('student added', result)
		})
	}
	render(){
		return(
			<div>
			<form className="form-horizontal">
			<label>Student Name:</label>
			<input onChange={this.handleChangeName} placeholder="Enter Student Name"/>
			<label>StudentEmail: </label> 
			<input onChange={this.handleChangeEmail} placeholder="Enter Student Email"/>
			<button onClick={this.handleSubmit}>Submit Campus</button>
			</form>
			</div>
			)
	}
}
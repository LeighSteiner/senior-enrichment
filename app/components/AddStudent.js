import React, { Component } from 'react';
import axios from 'axios'

export default class AddStudent extends Component {

	constructor(){
		super();
		this.state={
			name:"",
			email:""
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
	}

	handleChangeName(e){
		this.setState({name:e.target.value});
	}
	handleChangeEmail(e){
		this.setState({email: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		axios.post('/api/students', {name: this.state.name, email: this.state.email})
		.then(res => res.data)
		.then( result => {
			console.log('student added' , result);
		})
	}
	render(){
		return(
			<div>
			<form className="form-horizontal">
			<label>Student Name:</label>
			<input onChange={this.handleChangeName} placeholder="Enter Student Name"/>
			<label>Student E-mail: </label> 
			<input onChange={this.handleChangeEmail} placeholder="Enter Email"/>
			<button onClick={this.handleSubmit}>Submit Student</button>
			</form>
			</div>
			)
	}
}
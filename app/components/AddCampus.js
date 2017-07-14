import React, { Component } from 'react';
import axios from 'axios'

export default class AddCampus extends Component {

	constructor(){
		super();
		this.state={
			name:"",
			motto:""
		}
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeMotto = this.handleChangeMotto.bind(this);
	}

	handleChangeName(e){
		this.setState({name:e.target.value});
	}
	handleChangeMotto(e){
		this.setState({motto: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		axios.post('/api/campuses', {name: this.state.name, motto: this.state.motto})
		.then(res => res.data)
		.then( result => {
			console.log('campus added' , result);
		})
	}
	render(){
		return(
			<div>
			<form className="form-horizontal">
			<label>Campus Name:</label>
			<input onChange={this.handleChangeName} placeholder="Enter Campus Name"/>
			<label>Campus Motto: </label> 
			<input onChange={this.handleChangeMotto} placeholder="Enter Campus Motto"/>
			<button onClick={this.handleSubmit}>Submit Campus</button>
			</form>
			</div>
			)
	}
}
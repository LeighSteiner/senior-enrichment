import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CampusList extends Component {
	constructor () {
    	super();
    	this.state = {
      		campuses: []
    	};
  }
 componentDidMount () {
    axios.get('/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }
	render(){
		return ( 
		<div>
			<h3> Campuses </h3>
			<div className = "row">
			{
				this.state.campuses.map(campus =>
				{
					return (
					<div style={campus.image}>
					<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
					<h5>{campus.motto}</h5>
					</div>
					)
				}
				)
			}
			</div>
		</div>
		)
	}
}
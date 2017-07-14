import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './Navbar';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
import LostInSpace from './LostInSpace';


export default class Main extends Component {

	render(){
		return(
			<div>
			<Navbar />
			<div className="col-xs-10">
				<Switch>
					<Route path exact="/api/students/addStudent" component={AddStudent} />
					<Route path exact="/api/students/AddCampus" component={AddCampus}/>
					<Route exact path="/api/campuses" component={CampusList} />
					<Route path="/api/campuses/:campusId" component={SingleCampus} />
					<Route exact path="/api/students" component={StudentList} />
					<Route path ="/api/students/:studentId" component={SingleStudent} />
					<Route component={LostInSpace} />
				</Switch>
			</div>
			</div>
		)
	}
}


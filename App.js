import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';

/**
 * Top Level Component
 * @author Jack Vial
 */
class App extends React.Component {
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={SurveyList}></Route>
				<Route path="/surveyDetail/(:id)" component={SurveyDetail}></Route>
			</Router>
		);
	}
}
export default App;
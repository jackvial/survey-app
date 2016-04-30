import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';

const Container = (props) =>
    <div>{props.navBar}{props.body}</div>

const NavBar = () => 
    <div className="bar-header">
        <div className="title">Topcoder Survey</div>
    </div>

const NavBarDetail = () => 
    <div className="bar-header">
        <div className="nav-back-btn">
            <Link to="/"> &lt; back</Link>
        </div>
        <div className="title">Topcoder Survey</div>
    </div>
/**
 * Top Level Component
 * @author Jack Vial
 */
class App extends React.Component {
	render(){
		return (
			<Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute components={{navBar: NavBar, body: SurveyList}}>
                    </IndexRoute>
                    <Route path="/surveyDetail/(:id)" components={{navBar: NavBarDetail, body: SurveyDetail}}></Route>
                </Route>
			</Router>
		);
	}
}
export default App;
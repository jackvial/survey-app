import React from 'react';
class SurveyDetail extends React.Component {
	constructor(props) {
        super(props);
        let id = parseInt(props.params.id, 10);
        let surveys =  JSON.parse(localStorage.getItem('surveys'));

        // Find the survey
        let survey = surveys.find(i => i.id === id);
        this.state = {
            survey: survey
        };
    }
    render() {
        return (
        	<div>
        		Survey Detail {this.props.params.id}
        		<p>{this.state.survey.description}</p>
        	</div>
        );
    }
}
export default SurveyDetail;
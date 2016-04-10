import React from 'react';
class SurveyDetail extends React.Component {
	constructor(props) {
        super(props);

        let surveys =  JSON.parse(localStorage.getItem('surveys'));
        let survey = {};
        for(var i = 0; i < surveys.length; i++){
        	if(surveys[i].id == props.params.id){
        		survey = surveys[i];
        	}
        }
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
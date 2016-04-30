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
            <div className="item survey-detail ">
                <h2>{this.state.survey.title}</h2>
                <p>{this.state.survey.description}</p>
                <div><b>Date Created: </b>{this.state.survey.creation_date}</div>
            </div>
        );
    }
}
export default SurveyDetail;
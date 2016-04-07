import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import Survey from './Survey';
class SurveyList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [{ 
                  creation_date: "3/16/2016",
                  description: "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
                  id:1,
                  'short_ description':"cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
                  title: "leo maecenas pulvinar lobortis"
                }],
            };
        }
        componentDidMount() {
            let _this = this;
            fetchJsonp(this.props.url).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log('parsed data', data);
                _this.setState({
                  data: data
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
        }
        render() {
            let surveyNodes = this.state.data.map(function(survey) {
                return (<Survey description={survey.description}></Survey>);
            });
            return (<div>{surveyNodes }</div>);
        }
}

export default SurveyList;
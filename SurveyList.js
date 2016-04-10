import React from 'react';
import {Link, hashHistory} from 'react-router';
import fetchJsonp from 'fetch-jsonp';
import Survey from './Survey';
class SurveyList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                url: "http://www.mocky.io/v2/56fcf6871000000e13aed252",
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
            fetchJsonp(this.state.url).then(response => {
                return response.json();
            }).then(data => {
                console.log('parsed data', data);
                localStorage.setItem('surveys', JSON.stringify(data));

                // Arrow functions do not have their own 'this' so no need to
                // do _this = this or bind(this) etc... 
                this.setState({
                  data: data
                });
            }).catch(ex => {
                console.log('parsing failed', ex);
            });
        }
        render() {
            let surveyNodes = this.state.data.map((survey, i) => {

                // There is a space character in the short_ description key so had to use square bracket notation
                return (
                        <Link key={i} to={`/surveyDetail/${i}`}>
                            <Survey title={survey.title} shortDescription={survey['short_ description']} dateCreated={survey.creation_date}></Survey>
                        </Link>
                    );
            });
            return (<div>{surveyNodes}</div>);
        }
}

export default SurveyList;
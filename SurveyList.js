// var Survey = React.createClass({
//     render: function() {
//         return (<div>Description: {this.props.description}</div>);
//     }
// });

import React from 'react';
import Survey from './Survey';
class SurveyList extends React.component {
  getInitialState() {
      return {
          data:[]
        };
  }
  componentDidMount() {
      // this.serverRequest = $.ajax({
      //   url: this.props.url, 
      //   dataType: 'jsonp',
      //   success: function(result) {
      //     console.log(result)
          this.setState({
            data: [{description: "test test test test"}]
          });
        //}.bind(this)
      //});
  }
  render() {
    let surveyNodes = this.state.data.map(function(survey){
      return <Survey description={survey.description}></Survey>;
    });
    return (
        <div>{surveyNodes}</div>
    );
  }
}

export default SurveyList
import React from 'react';
class Survey extends React.Component {
    render() {
        return (<div className="item">
        			<h3>{this.props.title}</h3>
        			<div>{ this.props.shortDescription }</div>
        			<div><b>Date Created: </b>{this.props.dateCreated}</div>
        		</div>);
    }
}
export default Survey;
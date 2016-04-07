import React from 'react';
class Survey extends React.Component {
    render() {
        return (<div> Description: { this.props.description } </div>);
    }
}
export default Survey;
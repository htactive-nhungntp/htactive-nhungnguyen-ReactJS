import React, { Component } from 'react';


class DemoProps extends Component{
    constructor(props){
    super(props)
    }
    render() {
        return (
            <p >Your name is: {this.props.student.name}</p>
        );
    }

}

export default DemoProps;
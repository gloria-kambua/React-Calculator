import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
          <div id='display-container'>
            <div id='displayFormula'>{this.props.displayFormula}</div>
            <div id='display'>{this.props.displayInput}</div>
          </div>
        );
      }
}

export default Display
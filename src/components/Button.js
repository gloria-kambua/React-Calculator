import React, { Component } from 'react'

class Button extends Component {
  render() {
    console.log('calling button component')
    return (
        <div id={this.props.buttonId}
            className='button'
            onClick={this.props.handleClick} >
            {this.props.buttonValue}
        </div>
    )
  }
}
// ReactDOM.render(<Calculator />, document.getElementById('root'));
export default Button
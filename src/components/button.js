
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      background: this.props.background,
      color: this.props.color
    };
  }
  render() {
    return (
      <button 
      id={'button' + this.props.value} 
      style={{backgroundColor: this.state.background, color: this.state.color}} onClick={this.props.click}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
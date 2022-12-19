
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      background: this.props.background,
      color: this.props.color,
      isActive: this.props.isActive,
    };
  }
  render() {
    return (
      <button 
      id={'button' + this.props.value}
      className={this.state.isActive ? 'active' : ''}
      style={{backgroundColor: this.state.background, color: this.state.color}} onClick={this.props.click}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;

import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      color: this.props.color,
      activeButton: this.props.activeButton,
    };
  }
  render() {
    let background = this.props.value === this.props.activeButton ? this.props.activeBackground : this.props.background;
    return (
      <button 
      id={'button' + this.props.value}
      className={this.props.value === this.props.activeButton ? "active" : ""}
      style={{backgroundColor: background, color: this.state.color}} onClick={this.props.click}>
        {this.state.value}
      </button>
    );
  }
}

export default Button;
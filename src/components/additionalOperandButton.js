import React from 'react';

class AdditionalOperandButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      icons: ["\u02C2", "\u02C3"],
    };
  }

  render() {
    let currentIcon = this.props.active ? 1 : 0;
    return (
      <button className={"additionalOperandButton"} onClick={this.props.click}>
        {this.state.icons[currentIcon]}
      </button>
    );
  }
}

export default AdditionalOperandButton; 
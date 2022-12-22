import React from "react";

class FunctionalButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.class} onClick={this.props.click}>
        <span class="material-symbols-outlined">{this.props.icon}</span>
      </button>
    );
  }
}

export default FunctionalButton;
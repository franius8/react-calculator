import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.display
    };
  }
  render() {
    return (
      <div className="display-container">
        <div className="display">{this.props.display}</div>
      </div>
    );
  }
}

export default Display;
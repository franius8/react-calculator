import React from "react";

class HistoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      icons: ["\u02C3", "\u02C2"],
    };
  }

  render() {
    let currentIcon = this.props.active ? 1 : 0;
    return (
      <button className={"historyButton"} onClick={this.props.click}>
        {this.state.icons[currentIcon]}
        {this.props.history}
      </button>
    );
  }
}

export default HistoryButton;
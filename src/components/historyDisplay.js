import React from "react";

class HistoryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history,
      visible: this.props.visible,
    };
  }

  render() {
    let visible = this.props.visible ? "block" : "none";
    return (
      <div className="historyDisplay" style={{display: visible}}>
        <ol style={{padding: "1rem", margin: 0}}>
          {this.props.history.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default HistoryDisplay;
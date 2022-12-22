import React from "react";
import FunctionalButton from "./functionalButton";

class HistoryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history,
      visible: this.props.visible,
    };
  }

  render() {
    let visible = this.props.visible ? "flex" : "none";
    if (this.props.history.length === 0) {
      return (
        <div className="historyDisplay" style={{display: visible}}>
          <div style={{textAlign: "center", fontWeight: "bold", marginBottom: "1rem"}}>History</div>
          <div style={{textAlign: "center"}}>No History</div>
        </div>
      );
    }
    return (
      <div className="historyDisplay" style={{display: visible}}>
        <div style={{textAlign: "center", fontWeight: "bold"}}>History</div>
        <ol style={{padding: "1rem", margin: 0}}>
          {this.props.history.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
        <FunctionalButton class="clearHistory" click={this.props.clearHistory} icon="delete" />
      </div>
    );
  }
}

export default HistoryDisplay;
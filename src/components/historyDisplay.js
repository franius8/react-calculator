import React from "react";
import FunctionalButton from "./functionalButton";

function HistoryDisplay(props) {

    let visible = props.visible ? "flex" : "none";
    if (props.history.length === 0) {
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
          {props.history.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
        <FunctionalButton class="clearHistory" click={props.clearHistory} icon="delete" />
      </div>
    );
}

export default HistoryDisplay;
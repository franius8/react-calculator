import React from "react";

function HistoryButton(props) {

  const icons = ["\u02C3", "\u02C2"]
  let currentIcon = props.active ? 1 : 0;
  return (
      <button className={"historyButton"} onClick={props.click}>
        {icons[currentIcon]}
      </button>
    );
}

export default HistoryButton;
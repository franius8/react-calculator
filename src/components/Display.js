import React from "react";

function Display(props) {

    return (
      <div className="display-container">
        <div className="display" style={{fontFamily: 'Anonymous Pro'}}>{props.display}</div>
      </div>
    );
}

export default Display;
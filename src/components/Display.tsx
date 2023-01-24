import React from "react";

function Display(props: { display: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    return (
      <div className="display-container">
        <div className="display" style={{fontFamily: 'Anonymous Pro'}}>{props.display}</div>
      </div>
    );
}

export default Display;
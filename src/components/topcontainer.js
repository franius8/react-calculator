import React from "react";
import Button from "./button";

function TopContainer(props) {

    const background = 'orange'
    const color = 'white'

    return (
      <div className="top-container">
        {props.operators.map((operator) => {
          return <Button
          click={props.click}
          value={operator} 
          background={background}
          color={color}
          key={operator} />
        })
        }
      </div>
    );
}

export default TopContainer;
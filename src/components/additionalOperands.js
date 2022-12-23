import React from "react";
import Button from "./button";

function AdditionalOperands(props) {
 
    const background = 'orange';
    const activeBackground = 'darkorange';
    const color = 'white';
    const operators = ["\u221a", "log", "^", "x!", 'sin', 'cos'];

    return (
      <div className="additionalOperands" style={{ display: props.visible ? "grid" : "none" }}>
        {operators.map((operator) => {
          return <Button
          click={props.click}
          value={operator}
          activeButton={props.activeButton}
          background={background}
          activeBackground={activeBackground}
          color={color}
          key={operator} />
        })}
      </div>
    );
}

export default AdditionalOperands;
import React from "react";
import Button from "./button";

function OperandContainer(props) {

    const operators = ["+", "-", "\u00d7", "\u00f7", '='];
    const background = 'orange';
    const activeBackground = 'darkorange'
    const color = 'white';

    return (
      <div className="operand-container">
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

export default OperandContainer;
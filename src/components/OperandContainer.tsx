import React from "react";
import Button from "./button.js";

function OperandContainer(props: { click: React.MouseEventHandler<HTMLButtonElement>; activeButton: any; }) {

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
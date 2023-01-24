import React from "react";
import Button from "./button.js";

function TopContainer(props: { operators: any[]; click: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {

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
              key={operator} activeButton={undefined} activeBackground={undefined} />
        })
        }
      </div>
    );
}

export default TopContainer;
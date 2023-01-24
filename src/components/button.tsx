import React from 'react';

function Button(props: { value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; activeButton: any; activeBackground: any; background: any; color: any; click: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {

    let background = props.value === props.activeButton ? props.activeBackground : props.background;
    return (
      <button 
      id={'button' + props.value}
      className={props.value === props.activeButton ? "active" : ""}
      style={{backgroundColor: background, color: props.color}} onClick={props.click}>
        {props.value}
      </button>
    );
}

export default Button;
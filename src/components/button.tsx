import React from 'react';

function Button(props: { value: string | number ; activeButton: string; activeBackground: string; background: string; color: string; click: React.MouseEventHandler<HTMLButtonElement>; }) {

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
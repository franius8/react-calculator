import React from 'react';

function Button(props) {

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
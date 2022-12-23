import React from 'react';

function AdditionalOperandButton(props) {
    const icons = ["\u02C2", "\u02C3"]
    let currentIcon = props.active ? 1 : 0;

    return (
      <button className={"additionalOperandButton"} onClick={props.click}>
        {icons[currentIcon]}
      </button>
    );
}

export default AdditionalOperandButton; 
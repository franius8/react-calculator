import React from "react";

function FunctionalButton(props: { class: string; click: React.MouseEventHandler<HTMLButtonElement>; icon: string; }) {
    return (
      <button className={props.class} onClick={props.click}>
        <span className="material-symbols-outlined">{props.icon}</span>
      </button>
    );
}

export default FunctionalButton;
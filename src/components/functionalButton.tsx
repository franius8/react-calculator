import React from "react";

function FunctionalButton(props: { class: string | undefined; click: React.MouseEventHandler<HTMLButtonElement> | undefined; icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
      <button className={props.class} onClick={props.click}>
        <span className="material-symbols-outlined">{props.icon}</span>
      </button>
    );
}

export default FunctionalButton;
import React from "react";
import Button from "./button";

class AdditionalOperands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      icons: ["\u02C2", "\u02C3"],
    };
    this.background = 'orange';
    this.activeBackground = 'darkorange';
    this.color = 'white';

    this.operators = ["\u221a", "log", "^", "x!", 'sin', 'cos'];
  }

  render() {
    return (
      <div className="additionalOperands" style={{ display: this.props.visible ? "grid" : "none" }}>
        {this.operators.map((operator) => {
          return <Button
          click={this.props.click}
          value={operator}
          activeButton={this.props.activeButton}
          background={this.background}
          activeBackground={this.activeBackground}
          color={this.color} 
          key={operator} />
        })}
      </div>
    );
  }
}

export default AdditionalOperands;
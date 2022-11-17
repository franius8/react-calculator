import React from "react";
import Button from "./button";

class OperandContainer extends React.Component {
  constructor(props) {
    super(props);
    this.operators = ["+", "-", "\u00d7", "\u00f7"];
    this.background = 'orange'
    this.color = 'white'
  }
  render() {
    return (
      <div className="operand-container">
        {this.operators.map((operator) => {
          return <Button
          click={this.props.click}
          value={operator} 
          background={this.background} 
          color={this.color} key={operator} />
        })
        }
      </div>
    );
  }
}

export default OperandContainer;
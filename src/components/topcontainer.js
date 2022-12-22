import React from "react";
import Button from "./button";

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.operators = this.props.operators;
    this.background = 'orange'
    this.color = 'white'
  }
  render() {
    return (
      <div className="top-container">
        {this.props.operators.map((operator) => {
          return <Button
          click={this.props.click}
          value={operator} 
          background={this.background} 
          color={this.color} 
          key={operator} />
        })
        }
      </div>
    );
  }
}

export default TopContainer;
import React from 'react';
import MainContainer from './components/MainContainer';
import OperandContainer from './components/OperandContainer';
import Display from './components/Display';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      operator: "",
      firstNumber: 0,
      secondNumber: 0,
      result: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let value = e.target.innerHTML;
    if (value === "C") {
      this.setState({
        display: 0,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
        result: 0
      });
    } else if (value === "=") {
      this.setState({
        display: this.state.result,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
        result: 0
      });
    } else if (value === "+" || value === "-" || value === "\u00d7" || value === "\u00f7") {
      this.setState({
        operator: value,
        firstNumber: this.state.display,
        display: 0
      });
    } else if (this.state.operator === "") {
      if (String(this.state.display).length < 9) {
        this.setState({
          display: this.state.display === 0 ? value : this.state.display + value
        });
      } else {
        alert("You can only enter up to 9 digits");
      }
    } else {
      this.setState({
        display: this.state.display === 0 ? value : this.state.display + value,
        secondNumber: this.state.display === 0 ? value : this.state.display + value
      });
    }
  }
  render() {
    return (
    <div className="App">
      <Display display={this.state.display}/>
      <MainContainer click={this.handleClick}/>
      <OperandContainer click={this.handleClick}/>
    </div>
    )
  };
}

export default App;

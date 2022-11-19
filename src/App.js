import React from 'react';
import MainContainer from './components/MainContainer';
import OperandContainer from './components/OperandContainer';
import Display from './components/Display';
import TopContainer from './components/topcontainer';
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
      const numericFirstnumber = parseFloat(this.state.firstNumber);
      const numericSecondnumber = parseFloat(this.state.secondNumber);
      const currentResult = this.performCalculation(numericFirstnumber, numericSecondnumber, this.state.operator)
      this.setState({
        display: currentResult,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
        result: currentResult
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

  performCalculation(firstNumber, secondNumber, operator) {
    let result = 0;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "\u00d7":
        result = firstNumber * secondNumber;
        break;
      case "\u00f7":
        result = firstNumber / secondNumber;
        break;
      default:
        result = 0;
    }
    console.log(result);
    return result;
  }
  
  render() {
    return (
    <div className="App">
      <Display display={this.state.display}/>
      <TopContainer click={this.handleClick}/>
      <MainContainer click={this.handleClick}/>
      <OperandContainer click={this.handleClick}/>
    </div>
    )
  };
}

export default App;

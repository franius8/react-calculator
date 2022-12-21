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
      result: 0,
      activeButton: "",
      newNumberfirstDigit: false,
      operators: ['AC', '%', '+/-'],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlekeydown = this.handlekeydown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handlekeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlekeydown);
  }

  handlekeydown(e) {
    const value = e.key;
    if (value.match(/[0-9+c.,=-]/gi)) {
      this.handleChange(value.toUpperCase());
    } else if (value === "*") {
      this.handleChange("\u00d7");
    } else if (value === "/") {
      this.handleChange("\u00f7");
    } else if (value === "Enter") {
      this.handleChange("=");
    }
  }

  handleClick(e) {
    const value = e.target.innerHTML;
    this.handleChange(value);
  }

  handleChange(value) {
    if (value === "AC") {
      this.setState({
        display: 0,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        activeButton: "",
      });
    } else if (value === "C") {
      this.setState({
        display: 0,
      });
      if (this.state.operator !== "") {
        this.setState({
          newNumberfirstDigit: true,
          activeButton: this.state.operator,
        });
      }
    } else if (value === "=") {
      const numericFirstnumber = parseFloat(this.state.firstNumber);
      const numericSecondnumber = parseFloat(this.state.secondNumber);
      const currentResult = this.performCalculation(numericFirstnumber, numericSecondnumber, this.state.operator)
      this.setState({
        display: currentResult,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
        result: currentResult,
        activeButton: "",
      });
    } else if (value === "+" || value === "-" || value === "\u00d7" || value === "\u00f7") {
      this.setState({
        operator: value,
        firstNumber: this.state.display,
        activeButton: value,
        newNumberfirstDigit: true,
      });
      console.log(this.state.activeButton);
    } else if (value === "+/-") {
      this.setState({
        display: this.state.display * -1
      });
    } else if (value === ".") {
      if (!String(this.state.display).includes(".")) {
        this.setState({
          display: this.state.display + value
        });
      }
    } else if (this.state.operator === "") {
      if (String(this.state.display).length < 9) {
        this.setState({
          display: this.state.display === 0 ? value : this.state.display + value
        });
      } else {
        alert("You can only enter up to 9 digits");
      }
    } else {
      if (String(this.state.display).length < 9) {
        this.setState({
          display: this.state.newNumberfirstDigit === true ? value : this.state.display + value,
          secondNumber: this.state.newNumberfirstDigit === true ? value : this.state.display + value,
          newNumberfirstDigit: false,
          activeButton: value,
        });
      } else {
        alert("You can only enter up to 9 digits");
      }
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
        if (secondNumber === 0) {
          result = 'Really?';
        } else {
          result = firstNumber / secondNumber;
        }
        break;
      default:
        result = 0;
    }
    if (result % 1 === 0) {
      return result;
    } else {
      return result.toFixed(2);
    }
  }
  
  render() {
    return (
    <div className="App">
      <Display display={this.state.display}/>
      <TopContainer click={this.handleClick} operators={this.state.display === 0 ? ['AC', '%', '+/-'] : ['C', '%', '+/-']}/>
      <MainContainer click={this.handleClick}/>
      <OperandContainer activeButton={this.state.activeButton} click={this.handleClick}/>
    </div>
    )
  };
}

export default App;

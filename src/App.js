import React from 'react';
import MainContainer from './components/MainContainer';
import OperandContainer from './components/OperandContainer';
import Display from './components/Display';
import TopContainer from './components/topcontainer';
import HistoryButton from './components/historyButton';
import HistoryDisplay from './components/historyDisplay';
import AdditionalOperandButton from './components/additionalOperandButton';
import AdditionalOperands from './components/additionalOperands';
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
      history: [],
      historyVisible: false,
      additionalOperandsVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlekeydown = this.handlekeydown.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.toggleAdditionalOperands = this.toggleAdditionalOperands.bind(this);
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
    } else if (value.match(/h/gi)) {
      this.toggleHistory();
    } else if (value.match(/g/gi)) {
      this.toggleAdditionalOperands();
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
        result: 0,
      });
      this.clearState();
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
        result: currentResult,
      });
      this.clearState();
      this.logResult(numericFirstnumber, numericSecondnumber, this.state.operator, currentResult);
    } else if (value === "\u221a") {
      this.setState({
        display: Math.sqrt(this.state.display),
      });
      this.clearState();
      this.logResult(this.state.display, null, "\u221a", Math.sqrt(this.state.display));
    } else if (value === "log") {
      this.setState({
        display: Math.log10(this.state.display),
      });
      this.clearState();
      this.logResult(this.state.display, null, "log", Math.log10(this.state.display));
    } else if (value === "x!") {
      const factorial = this.shortenNumber(this.factorial(this.state.display));
      this.setState({
        display: factorial,
      });
      this.clearState();
      this.logResult(this.state.display, null, "x!", factorial);
    } else if (value === "sin") {
      const sin = Math.sin(this.state.display).toFixed(5);
      this.setState({
        display: sin,
      });
      this.clearState();
      this.logResult(this.state.display, null, "sin", sin);
    } else if (value === "cos") {
      const cos = Math.cos(this.state.display).toFixed(5);
      this.setState({
        display: cos,
      });
      this.clearState();
      this.logResult(this.state.display, null, "cos", cos);
    } else if (value === "+" || value === "-" || value === "\u00d7" || value === "\u00f7" || value === "^") {
      this.setState({
        operator: value,
        firstNumber: this.state.display,
        activeButton: value,
        newNumberfirstDigit: true,
      });
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
      if (String(this.state.display).length < 9 || this.state.newNumberfirstDigit) {
        this.setState({
          display: this.state.display === 0 || this.state.newNumberfirstDigit ? value : this.state.display + value,
          newNumberfirstDigit: false,
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
      case "^":
        result = firstNumber ** secondNumber;
        console.log(firstNumber + " " + secondNumber + " " + result)
        break;
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
    } else if (result > 999999999) {
      return result.toExponential(2);
    } else {
      return result.toFixed(2);
    }
  }

  shortenNumber(number) {
    if (number > 999999999) {
      return number.toExponential(2);
    } else {
      return number;
    }
  }

  clearState() {
    this.setState({
        activeButton: "",
        newNumberfirstDigit: true,
        operator: "",
        firstNumber: 0,
        secondNumber: 0,
    });
  }

  factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * this.factorial(number - 1);
    }
  }

  logResult(firstNumber, secondNumber = null, operator, result) {
    let operation;
    if (secondNumber === null) {
      if (operator === "x!") {
        operation = (firstNumber + "! = " + result);
      } else {
        operation = (operator + " " + firstNumber + " = " + result);
      }
    } else {
      operation = (firstNumber + " " + operator + " " + secondNumber + " = " + result);   
    }
    const currentHistory = this.state.history;
    currentHistory.push(operation);
    this.setState({
      history: currentHistory
    });
  };

  toggleHistory(e) {
    this.setState({
      historyVisible: !this.state.historyVisible,
    });
  }

  toggleAdditionalOperands(e) {
    this.setState({
      additionalOperandsVisible: !this.state.additionalOperandsVisible,
    });
  }
  
  render() {
    let calculatorClass;

    if (this.state.historyVisible && this.state.additionalOperandsVisible) {
      calculatorClass = "calculatorEverythingVisible";
    } else if (this.state.additionalOperandsVisible) {
      calculatorClass = "calculatorOperandsVisible";
    }else if (this.state.historyVisible) {
      calculatorClass = "calculatorHistoryVisible";
    } else {
      calculatorClass = "calculator";
    }
    return (
    <div className="App">
      <div className='additionalOperandsContainer'>
        <AdditionalOperandButton active={this.state.additionalOperandsVisible} click={this.toggleAdditionalOperands}/>
        <AdditionalOperands visible={this.state.additionalOperandsVisible} click={this.handleClick}/>
      </div>
      <div className={calculatorClass}>
        <Display display={this.state.display}/>
        <TopContainer click={this.handleClick} operators={this.state.display === 0 ? ['AC', '%', '+/-'] : ['C', '%', '+/-']}/>
        <MainContainer click={this.handleClick}/>
        <OperandContainer activeButton={this.state.activeButton} click={this.handleClick}/>
      </div>
      <div className="history">
        <HistoryDisplay history={this.state.history} visible={this.state.historyVisible}/>
        <HistoryButton active={this.state.historyVisible} click={this.toggleHistory}/>
      </div>
    </div>
    )
  };
}

export default App;

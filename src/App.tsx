import React, {MouseEventHandler} from 'react';
import MainContainer from './components/MainContainer';
import OperandContainer from './components/OperandContainer';
import Display from './components/Display';
import TopContainer from './components/topcontainer';
import HistoryButton from './components/historyButton';
import HistoryDisplay from './components/historyDisplay';
import AdditionalOperandButton from './components/additionalOperandButton';
import AdditionalOperands from './components/additionalOperands';
import "./style.css";
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      display: 0,
      operator: "",
      firstNumber: "0",
      secondNumber: "0",
      result: 0,
      activeButton: "",
      newNumberfirstDigit: false,
      operators: ['AC', '%', '\u00B1'],
      history: [],
      historyVisible: false,
      additionalOperandsVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlekeydown = this.handlekeydown.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.toggleAdditionalOperands = this.toggleAdditionalOperands.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handlekeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlekeydown);
  }

  handlekeydown(e: { key: any; }) {
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
    } else if (value.match(/r/gi)) {
      this.handleChange("\u221a");
    }
  }

  handleClick(e: { target: { innerHTML: any; }; }) {
    const value = e.target.innerHTML;
    this.handleChange(value);
  }

  handleChange(value: string | number) {
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
    } else if (value === "%") {
      const numericSecondnumber = parseFloat(this.state.secondNumber);
      const numericFirstnumber = parseFloat(this.state.firstNumber);
      const percentage = numericSecondnumber / 100 * numericFirstnumber;
      console.log(percentage);
      const currentResult = this.performCalculation(numericFirstnumber, percentage, this.state.operator)
      this.setState({
        display: currentResult,
        result: currentResult,
      });
      this.clearState();
      this.logResult(numericFirstnumber, percentage, this.state.operator, currentResult);
    } else if (value === "\u221a") {
      const sqrt = Math.sqrt(this.state.display).toFixed(5);
      this.setState({
        display: sqrt,
      });
      this.clearState();
      this.logResult(this.state.display, null, "\u221a", sqrt);
    } else if (value === "log") {
      let log: string | number = Math.log10(this.state.display)
      if (log % 1 !== 0 && String(log).split(".")[1].length > 5) {
        log = log.toFixed(5);
      }
      this.setState({
        display: log,
      });
      this.clearState();
      this.logResult(this.state.display, null, "log", log);
    } else if (value === "x!") {
      const factorial = this.shortenNumber(this.factorial(this.state.display));
      this.setState({
        display: factorial,
      });
      this.clearState();
      this.logResult(this.state.display, null, "x!", factorial);
    } else if (value === "sin") {
      let sin: string | number = Math.sin(Math.PI / 180 * this.state.display);
      if (sin % 1 !== 0 && String(sin).split(".")[1].length > 5) {
        sin = sin.toFixed(5);
      }
      this.setState({
        display: sin,
      });
      this.clearState();
      this.logResult(this.state.display, null, "sin", sin);
    } else if (value === "cos") {
      let cos: number | string = Math.cos(Math.PI / 180 * this.state.display);
      if (cos % 1 !== 0 && String(cos).split(".")[1].length > 5) {
        cos = cos.toFixed(5);
      }
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
    } else if (value === "\u00B1") {
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
          display: this.state.display === 0 || this.state.newNumberfirstDigit ? value : this.state.display + (value as number),
          newNumberfirstDigit: false,
        });
      } else {
        alert("You can only enter up to 9 digits");
      }
    } else {
      if (String(this.state.display).length < 9) {
        this.setState({
          display: this.state.newNumberfirstDigit === true ? value : this.state.display + (value as number),
          secondNumber: this.state.newNumberfirstDigit === true ? value : this.state.display + (value as number),
          newNumberfirstDigit: false,
          activeButton: value,
        });
      } else {
        alert("You can only enter up to 9 digits");
      }
    }
  }

  performCalculation(firstNumber: number, secondNumber: number, operator: string) {
    let result;
    switch (operator) {
      case "^":
        result= firstNumber ** secondNumber;
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
    if (result > 999999999) {
      return (result as number).toExponential(2);
    } else if (result as number % 1 === 0) {
      return result;
    } else {
      return (result as number).toFixed(2);
    }
  }

  shortenNumber(number: number) {
    if (number > 999999999) {
      return number.toExponential(2);
    } else if (number % 1 === 0) {
      return number;
    } else {
      return number.toFixed(2);
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

  factorial(number: number): number {
    if (number === 0) {
      return 1;
    } else {
      return number * this.factorial(number - 1);
    }
  }

  logResult(firstNumber: string | number, secondNumber: any = null, operator: string, result: string | number) {
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

  clearHistory() {
    this.setState({
      history: [],
    });
  }

  toggleHistory() {
    this.setState({
      historyVisible: !this.state.historyVisible,
    });
  }

  toggleAdditionalOperands() {
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
        <AdditionalOperands visible={this.state.additionalOperandsVisible} click={this.handleClick} activeButton={this.state.activeButton}/>
      </div>
      <div className={calculatorClass}>
        <Display display={this.state.display}/>
        <TopContainer click={this.handleClick} operators={this.state.display === 0 ? ['AC', '%', '\u00B1'] : ['C', '%', '\u00B1']}/>
        <MainContainer click={this.handleClick}/>
        <OperandContainer activeButton={this.state.activeButton} click={this.handleClick}/>
      </div>
      <div className="history">
        <HistoryDisplay history={this.state.history} visible={this.state.historyVisible} clearHistory={this.clearHistory}/>
        <HistoryButton active={this.state.historyVisible} click={this.toggleHistory}/>
      </div>
    </div>
    )
  };
}

export default App;

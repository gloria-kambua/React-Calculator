import React, { Component } from 'react'
import Button from './Button'
import Display from './Display';
import '../assets/css-files/styles.scss'

//number buttons
const numberButtons = [
  {buttonId: 'seven', buttonValue: '7'},
  {buttonId: 'eight', buttonValue: '8'},
  {buttonId: 'nine', buttonValue: '9'},
  {buttonId: 'four', buttonValue: '4'},
  {buttonId: 'five', buttonValue: '5'},
  {buttonId: 'six', buttonValue: '6'},
  {buttonId: 'one', buttonValue: '1'},
  {buttonId: 'two', buttonValue: '2'},
  {buttonId: 'three', buttonValue: '3'},
  {buttonId: 'decimal', buttonValue: '.'},
  {buttonId: 'zero', buttonValue: '0'}
];
const opperators = ['add', 'subtract', 'multiply', 'divide'];
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const initialState = {
  displayInput: '0',
  displayFormula: '',
  lastInput: '',
};
class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      displayInput: '0',
      displayFormula: '',
      lastInput: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.computeFormula = this.computeFormula.bind(this);
  }
  handleClick(e) {
    let input = e.target.id;
    if (input === 'clear') {
      //get the initial state = 0 to clear
      this.setState(initialState);
    } else if (input === 'equals') {
      if (this.state.lastInput !== 'equals') {
        this.computeFormula(this.state.displayFormula,
                           this.state.displayInput);
      }
    } else if (input === 'decimal') {
      if (this.state.displayInput.length < 15) {
        if (this.state.displayInput.indexOf('.') === -1) {
          if (this.state.lastInput !== 'equals') {
            this.setState({
              displayInput: this.state.displayInput.concat('.'),
              lastInput: 'decimal'
            });
          } else {
            this.setState({
              displayFormula: '',
              displayInput: '0'.concat('.'),
              lastInput: 'decimal'
            });
          }
        }
      }
    } else if (input === 'zero') {
      if (this.state.displayInput.length < 15) {
        if (this.state.displayInput !== '0') {
          if (this.state.lastInput !== 'equals') {
            this.setState({
              displayInput: this.state.displayInput.concat('0'),
              lastInput: 'zero'
            });
          } else {
            this.setState({
              displayFormula: '',
              displayInput: '0',
              lastInput: 'zero'
            });
          }
        }
      }
    } else if (opperators.indexOf(input) > -1) {
      if (this.state.lastInput !== 'equals') {
        if (opperators.indexOf(this.state.lastInput) > -1) {
          switch(opperators.indexOf(input)) {
            case 0:
              this.setState({
                displayFormula: this.state.displayFormula.slice(0, this.state.displayFormula.length - 1)
                .concat('+'),
                lastInput: 'add',
                displayInput: '0'
              });
              break;
            case 1:
              this.setState({
                displayFormula: this.state.displayFormula.slice(0, this.state.displayFormula.length - 1)
                .concat('-'),
                lastInput: 'subtract',
                displayInput: '0'
              });
              break;
            case 2:
              this.setState({
                displayFormula: this.state.displayFormula.slice(0, this.state.displayFormula.length - 1)
                .concat('*'),
                lastInput: 'multiply',
                displayInput: '0'
              });
              break;
            case 3:
              this.setState({
                displayFormula: this.state.displayFormula.slice(0, this.state.displayFormula.length - 1)
                .concat('/'),
                lastInput: 'divide',
                displayInput: '0'
              });
              break;
          }
        } else {
          switch(opperators.indexOf(input)) {
            case 0:
              this.setState({
                displayFormula: this.state.displayFormula
                .concat(this.state.displayInput)
                .concat('+'),
                lastInput: 'add',
                displayInput: '0'
              });
              break;
            case 1:
              this.setState({
                displayFormula: this.state.displayFormula
                .concat(this.state.displayInput)
                .concat('-'),
                lastInput: 'subtract',
                displayInput: '0'
              });
              break;
            case 2:
              this.setState({
                displayFormula: this.state.displayFormula
                .concat(this.state.displayInput)
                .concat('*'),
                lastInput: 'multiply',
                displayInput: '0'
              });
              break;
            case 3:
              this.setState({
                displayFormula: this.state.displayFormula
                .concat(this.state.displayInput)
                .concat('/'),
                lastInput: 'divide',
                displayInput: '0'
              });
              break;
          }
        }
      } else {
        switch(opperators.indexOf(input)) {
          case 0:
            this.setState({
              displayFormula: this.state.displayInput
              .concat('+'),
              lastInput: 'add',
              displayInput: '0'
            });
            break;
          case 1:
            this.setState({
              displayFormula: this.state.displayInput
              .concat('-'),
              lastInput: 'subtract',
              displayInput: '0'
            });
            break;
          case 2:
            this.setState({
              displayFormula: this.state.displayInput
              .concat('*'),
              lastInput: 'multiply',
              displayInput: '0'
            });
            break;
          case 3:
            this.setState({
              displayFormula: this.state.displayInput
              .concat('/'),
              lastInput: 'divide',
              displayInput: '0'
            });
            break;
        }
      }
    } else {
      if (this.state.displayInput.length < 15) {
        if (this.state.lastInput !== 'equals') {
          if (this.state.displayInput !== '0') {
            this.setState({
              displayInput: this.state.displayInput
              .concat(numbers.indexOf(input).toString()),
              lastInput: numbers.indexOf(input).toString()
            });
          } else {
            this.setState({
              displayInput: numbers.indexOf(input).toString(),
              lastInput: numbers.indexOf(input).toString()
            });
          } 
        } else {
          this.setState({
            displayFormula: '',
            displayInput: numbers.indexOf(input).toString(),
            lastInput: numbers.indexOf(input).toString()
          });
        }
      }
    }
  }
  computeFormula(formula, input) {
    let finalFormula = formula.concat(input);
    let answer = eval(finalFormula);
    answer = +answer.toFixed(6);
    this.setState({
      displayFormula: finalFormula.concat('='),
      displayInput: answer.toString(),
      lastInput: 'equals',
    });
  }
  render() {
    let numbers = numberButtons.map((numObj, i, numArr) => {
      return (
        <Button buttonId={numArr[i].buttonId}
          buttonValue={numArr[i].buttonValue}
          handleClick={this.handleClick} />
      );
    })
    return (
      <div id='calculator'>
        <Display displayFormula={this.state.displayFormula}
          displayInput={this.state.displayInput} />
        <div id='number-pad'>
          {numbers}
        </div>
        <div id='other-buttons'>
          <Button buttonId='add' buttonValue='+'
            handleClick={this.handleClick} />
          <Button buttonId='subtract' buttonValue='-'
            handleClick={this.handleClick} />
          <Button buttonId='multiply' buttonValue='&times;'
            handleClick={this.handleClick} />
          <Button buttonId='divide' buttonValue='&divide;'
            handleClick={this.handleClick} />
          <Button buttonId='clear' buttonValue='CLEAR'
            handleClick={this.handleClick} />
          <Button buttonId='equals' buttonValue='='
            handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator
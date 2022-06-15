import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialstate = {
    displayValue: '0',
    clearDisplay: false,
    Operation: null,
    Values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialstate };
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.clearEntry = this.clearEntry.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialstate });
    }

    clearEntry() {
        console.log('limpar 1');
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const Values = [...this.state.Values];
            try {
                Values[0] = eval(`${Values[0]} ${currentOperation} ${Values[1]}`)
            } catch (e) {
                Values[0] = this.state.Values[0];
            }

            Values[1] = 0;

            this.setState({
                displayValue: Values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                Values
            })
        }
    }

    addDigit(number) {

        if (number === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay;
        const CurrentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = CurrentValue + number;

        this.setState({ displayValue, clearDisplay: false });

        if (number !== '.') {
            const indice = this.state.current;
            const newValue = parseFloat(displayValue);
            const Values = [...this.state.Values];
            Values[indice] = newValue;
            this.setState({ Values });
        }
    }

    render() {

        return (
            <div className='Calculator'>
                <Display value={this.state.displayValue} />
                <Button label='AC' operation double click={this.clearMemory} />
                <Button label='CE' operation click={this.clearEntry} />
                <Button label='/' operation click={this.setOperation} />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' operation click={this.setOperation} />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' operation click={this.setOperation} />
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' operation click={this.setOperation} />
                <Button label='0' double click={this.addDigit} />
                <Button label='.' click={this.addDigit} />
                <Button label='=' operation click={this.setOperation} />

            </div>
        )
    }
}
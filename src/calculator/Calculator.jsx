import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [isCalculationDone, setIsCalculationDone] = useState(false);

  const appendToDisplay = (value) => {
    // Check if the input is zero and the display value is already zero
    if (value === '0' && displayValue === '0') {
      return;
    }

    // Reset the flag if a non-zero value or a decimal point is pressed
    if (value.match(/[1-9.]/)) {
      setIsCalculationDone(false);
    }

    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      if (!isCalculationDone) {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
        setIsCalculationDone(true);
      }
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const backspace = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" id="result" value={displayValue} readOnly />
      </div>
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={backspace}>⌫</button>
        <button onClick={() => appendToDisplay('%')}>%</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('8')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>x</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button className="equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;

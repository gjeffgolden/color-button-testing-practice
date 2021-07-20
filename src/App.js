import './App.css';
import React, { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disableButton, setDisableButton] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' 
    ? 'MidnightBlue'
    : 'MediumVioletRed';

  const handleClick = () => {
    setButtonColor(newButtonColor);
  }

  return (
    <div className="App">
      <button 
        disabled={disableButton}
        onClick={handleClick} 
        style={{ backgroundColor: disableButton ? 'gray' : buttonColor }}
      >
          Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
        <input
          onChange={() => setDisableButton(!disableButton)} 
          type="checkbox"
          id="disable-button-checkbox"
        />
    </div>
  );
}

export default App;

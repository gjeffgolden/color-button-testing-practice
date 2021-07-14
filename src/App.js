import './App.css';
import React, { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disableButton, setDisableButton] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = () => {
    setButtonColor(newButtonColor);
  }

  return (
    <div className="App">
      <button 
        disabled={disableButton}
        onClick={handleClick} 
        style={{ backgroundColor: buttonColor }}
      >
          Change to {newButtonColor}
      </button>
      <input
        onChange={() => setDisableButton(!disableButton)} 
        type="checkbox"
      />
    </div>
  );
}

export default App;


import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  

  const handleInputChange = (e) => {
    const value = e.target.value;
   
    setInputValue(value);
   if(value === ''){
      setMessage('')
   }

    else if (value < 0) {
      setMessage('Enter a positive value');
    } else if (value % 2 === 0) {
      const evenNumbers = [parseInt(value) + 2, parseInt(value) + 4, parseInt(value) + 6];
      setMessage(evenNumbers.join(' ,'));
    } else {
      const oddNumbers = [parseInt(value) + 2, parseInt(value) + 4, parseInt(value) + 6];
      setMessage(oddNumbers.join(', '));
    }
  };

  return (
    <div className="App">
        <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>{message}</p>
      
    </div>
  );
}

export default App;

import './App.css';
import InputShortner from './InputShortner';
import Bganimaton from './Bganimaton';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");  // State to store the shortened URL

  return (
    <div className="container">   
      <InputShortner setInputValue={setInputValue} /> {/* Pass setInputValue as a prop */}
      <Bganimaton />
      <LinkResult inputValue={inputValue} />  {/* Pass inputValue to display the result */}
    </div>
  );
}

export default App;

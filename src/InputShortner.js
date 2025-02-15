import React, { useState } from 'react';

function InputShortner({ setInputValue }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value.trim()) {
      setInputValue(value);
      setValue("");
    }
  }

  document.body.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
      if (value.trim()) {
        setInputValue(value);
        setValue("");
      }
      // alert('success!')
    }
  })

  return (
    <div className='inputContainer'>
      <p>URL <span>Shortner</span></p>
      <div className='row'>
        <input
          type='text'
          placeholder='Paste any link to shorten it'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className='short' onClick={handleClick}>
          Shorten
        </button>
      </div>
    </div>
  );
}

export default InputShortner;
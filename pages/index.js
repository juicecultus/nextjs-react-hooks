import { useState } from 'react';

const InputElement = () => {
  const [inputText, setinputText] = useState('');

  return (
    <div>
      <input
        onChange={e => {
          setinputText(e.target.value);
        }}
        placeholder='Enter some text'
      />
      <br />
      {inputText}
    </div>
  );
};

export default InputElement;

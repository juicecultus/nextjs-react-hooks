import { useState } from 'react';

const InputElement = () => {
  const [inputText, setinputText] = useState('');
  const [historyList, sethistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={(e) => {
          setinputText(e.target.value);
          sethistoryList([...historyList, e.target.value]);
        }}
        placeholder='Enter some text'
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;

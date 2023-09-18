import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [text, setText] = useState('');
  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="App">
      <Editor text={text} onTextChange={handleTextChange} />
      <Preview text={text} />
    </div>
  );
}

export default App;

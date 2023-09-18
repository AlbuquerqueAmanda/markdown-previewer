import styles from './Editor.module.css';
import React, { useState, useEffect } from 'react';
import Preview from '../Preview'; 
import { marked } from 'marked';

function Editor() {
  const defaultText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://github.com/AlbuquerqueAmanda), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
<br><img src="https://i.pinimg.com/564x/0f/34/07/0f34070bc753ac92e16ebdd495a7b76c.jpg" width="200px" height="250px">`;
  
  const storedText = localStorage.getItem('editorText');

  const [text, setText] = useState(storedText || defaultText);

  useEffect(() => {
    if (!storedText) {
      localStorage.setItem('editorText', defaultText);
    }

    marked.setOptions({
        breaks: true
    })
  });

  return (
    <div className={styles.editor} id="editor-div">
      <header><h1>Hello!</h1></header>
      <label htmlFor="editor">Editor</label>
      <textarea
        rows="10"
        cols="50"
        value={text}
        id="editor"
        onChange={(event) => {
          const newText = event.target.value;
          setText(newText);
        }}
      ></textarea>
      <Preview text={text} />
      <footer></footer>
    </div>
  );
}

export default Editor;

import styles from './Preview.module.css';
import { marked } from 'marked';

function Preview({ text }) {
    return (
      <div className={styles.preview}>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text)}}></div>
      </div>
    );
  };
export default Preview;

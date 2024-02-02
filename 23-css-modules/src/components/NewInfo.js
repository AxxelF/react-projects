import './NewInfo.css';
import styles from './NewInfo.module.css';

function NewInfo() {
  return (
    <div className={styles.newinfo}>
      <h1>Hello from NewInfo</h1>
      <h2>Heading in NewInfo</h2>
      <button className='my-button'>Click me NewInfo</button>
      <button className={styles.myOtherButton}>Local styles</button>
    </div>
  );
}

export default NewInfo;

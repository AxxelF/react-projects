import '../Info.css';
import styles from '../Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from Info</h1>
      <h2>Heading in Info</h2>
      <button className='my-button'>Click me Info</button>
      <button className={styles.myOtherButton}>Local styles</button>
    </div>
  );
}

export default Info;

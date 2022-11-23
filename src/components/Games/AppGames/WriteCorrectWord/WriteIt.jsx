
import styles from './styles.module.css';


function WriteIt() {
  return (
    <nav >
    <ul className={styles.nav}>
        <li>Errors:</li>
        <li>Correct:</li>
        <li>Points:</li>
    </ul>
      </nav>
  );
}

export default WriteIt;
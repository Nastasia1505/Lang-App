import Level from './Level/Level';
import Points from './Points/Points';
import styles from './styles.module.css'

function Home() {
  return (
    <div className= {styles.home}>

      <div className={styles.mainGame}>
        <div className={styles.mainGameText}>
        <p>The most popular game is <br />
          <b> Speak IT</b>
        </p>
        </div>
        <button className={styles.mainBtn}>
          Play randome game
        </button>
      </div >
      <div className={styles.achievements}>
        <Points />
        <Level />
      </div>
    </div>
  );
}

export default Home;
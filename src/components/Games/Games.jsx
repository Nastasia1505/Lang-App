import { Link } from 'react-router-dom';
import styles from './styles.module.css';


function Games() {

  const game = [
    { path: 'check-it', name: 'Speak and check ', discription: 'Say the word on the screen and check your spelling' },
    { path: 'write-it', name: 'Check the correct one', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Put together a translation', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Guess and listen', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Sprint by guessing', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Select the right translation', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Remember translation', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Write the translation', discription: 'Say the word on the screen and check your spelling' },
    { path: 'check-it', name: 'Sprint by listen', discription: 'Say the word on the screen and check your spelling' },
  ]

  return (
    <div className={styles.box}>
      {game.map((game, index) => (
        <Link key={index} to={game.path}>
          <div className={styles.game}>
            <div className={styles.gameTitle}>
              <h3>{game.name}</h3>
              <p className={styles.discription}>{game.discription}</p>
            </div>
          </div>
        </Link>
      )
      )}
    </div>
  );
}

export default Games;
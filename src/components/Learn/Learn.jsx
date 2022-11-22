import { useEffect, useState } from 'react';
import styles from './styles.module.css'

function Learn({ library }) {
  const [wordIndex, setWordIndex] = useState(0);

  // useEffect(() => {
  //   speak(library[wordIndex].translate)
  // })

  console.log(library)
  const progressBarWidth = {
    width: `${(100 / library.slice(-10).lenght) * (wordIndex + 1)} vw`
  }
  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[51];
    speechSynthesis.speak(speakInstance)
  }

  return (
    <div className={styles.contener}>
      <div className={styles.progressBarContener}>
        <div className={styles.progressBar} style={progressBarWidth}></div>
      </div>
      <div className={styles.learnWord}>
        <span> {library[wordIndex].word}</span>
        <h2>{library[wordIndex].translate} </h2>
      </div>
      <button onClick={() => {
        if (wordIndex === library.lenght - 1) {
          setWordIndex(0)
        } else {
          console.log('click')
          speak(library[wordIndex + 1].translate)
          setWordIndex(wordIndex + 1)
        }
      }}> Next </button>
    </div>
  );
}

export default Learn;
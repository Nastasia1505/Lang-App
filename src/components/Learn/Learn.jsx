import { useEffect, useState } from 'react';
import styles from './styles.module.css'

function Learn({ library }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState((100 / library.length));

  // useEffect(() => {
  //   speak(library[wordIndex].translate)
  // }, [wordIndex])

  //Don't work progressBar 
  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[3];
    speechSynthesis.speak(speakInstance)
  }

  return (
    <>
      <div className={styles.progressBarContener}>
        <div className={styles.progressBar} style={{ width: `${progress}vw` }}></div>
      </div>
      <div className={styles.contener}>
        <div className={styles.learnWord}>
          <span> {library[wordIndex].word}</span>
          <h2>{library[wordIndex].translate} </h2>
        </div>
        <div className={styles.btn}>
          {library.length - 1 !== wordIndex && <button onClick={() => {
            setWordIndex((pre) => pre + 1)
            setProgress(progress + (100 / library.length))
          }}> Next </button>}
          <button onClick={() => {
            speak(library[wordIndex].translate)
          }}> Speak </button>
        </div>
      </div>
    </>
  );
}

export default Learn;
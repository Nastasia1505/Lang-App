import { useRef } from 'react'
import styles from './styles.module.css';
import { FiTrash2 } from "react-icons/fi";



function Library({ library, setLibrary }) {

  const inputValue = useRef()


  const onClick = () => {
    const response = fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        const updateLibrary = [...library, { word: response.word, translate: response.translate, learn: 0 }];
        console.log(updateLibrary)
        setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary));
      })

      inputValue.current.value = ''
  }

  // const deleteWord = (id) => {
  //   // console.log(library)
  //   const updateLibrary = library.filter((word, index) => index !== id)
  //   localStorage.setItem('library', JSON.stringify(updateLibrary));
  // }

  return (
    <div className={styles.library}>
      <h2 className={styles.title}>Add new word</h2>
      <div className={styles.contener}>
        <input
          ref={inputValue}
          className={styles.input}
          type="text"
          placeholder='Write a word' />
        <button
          onClick={onClick}
          className={styles.btn}
        >Enter</button>
      </div>
      <div className={styles.table}>
        <div className={styles.wordTable}>
          <ul className={styles.titileTable}>
            <li><h3>Word</h3></li>
            <li><h3>Translation</h3></li>
            <li><h3>Learn</h3></li>
          </ul>
        </div>
        <div >
          {library.map((word, index) => (
            <ul key={index} className={styles.newWords}>
              <li>{word.word}</li>
              <li>{word.translate}</li>
              <li>{word.learn}</li>
              <div className={styles.remove} >
                <FiTrash2 />
              </div>
            </ul>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
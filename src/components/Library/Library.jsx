import { useRef } from 'react'
import styles from './styles.module.css'
import App from '../../App'


function Library({library, setLibrary}) {

  const inputValue = useRef()


  const onClick = () => {
    const response = fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
       setLibrary([...library, inputValue.current.value])
      })

  }

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
    </div>
  );
}

export default Library;
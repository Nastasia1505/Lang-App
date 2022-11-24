import {Link} from 'react-router-dom'
import styles from './styles.module.css'


function Navbar() {
  return (
    <div className= {styles.nav} >
      <Link to ="/learn">Learn</Link>
      <Link to="/games">Games</Link>
      <Link to="/library">Library</Link>
      <Link to="/translator">Translator</Link >
      <Link to="/">Home</Link>

    </div>
  );
}

export default Navbar;
import {Link} from 'react-router-dom'
import styles from './styles.module.css'


function Navbar() {
  return (
    <div className= {styles.nav} >
      <Link to ="/Learn">Learn</Link>
      <Link to="/Games">Games</Link>
      <Link to="/Library">Library</Link>
      <Link to="/">Home</Link>

    </div>
  );
}

export default Navbar;
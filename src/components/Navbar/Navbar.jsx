import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar';

<Sidebar />

const Navbar = (props) => {

  let sidebarElements = props.sidebar.map(s => <Sidebar sidebar={s.name} id={s.id} src={s.src} />)

  return <nav className={styles.nav}>
    <div className={`${styles.item} ${styles.active}`}>
      <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
    </div>
    <div className={`${styles.item} ${styles.setting}`}>
      <NavLink to='/setting' activeClassName={styles.active}>Settings</NavLink>
    </div>
    <div className={`${styles.item} ${styles.setting}`}>
      <NavLink to='/users' activeClassName={styles.active}>Find Users</NavLink>
    </div>
    <div>
      <div className={styles.sidebarPage}>
        <div className={styles.friends} >
          <h1>Friends</h1>
        </div>
        <div className={styles.sidebar}>
          {sidebarElements} </div>
      </div>
    </div>
  </nav>
}

export default Navbar;
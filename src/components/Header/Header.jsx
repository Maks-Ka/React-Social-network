import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = (props) => {
  return <header className={styles.header}>
    <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png' />

    <div className={styles.loginBlock}>
      {props.isAuth
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
        : <NavLink to='/login' > Login </NavLink>}
    </div>
  </header>

}

export default Header;
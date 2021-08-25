import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src={props.src} />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem
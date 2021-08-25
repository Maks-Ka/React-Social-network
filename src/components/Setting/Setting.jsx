import styles from './Setting.module.css'

const Setting = () => {
    return (    
        <div className={styles.nav}>
            <div>
                General
            </div>
            <div>
                Security
            </div>
            <div>
                Privacy
            </div>
        </div>
    )
}


export default Setting
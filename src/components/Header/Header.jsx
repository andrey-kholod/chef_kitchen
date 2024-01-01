import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.board}>
        <div className={styles.text}>
        <h3>Your personal cook</h3>
        <p className={styles.diet}>The balanced diet for every day</p>
        <button className='btn btn-make'>Make your choice</button>
        <img src="./images/5.png" className={styles.sheet}/>
        </div>
        <div className={styles.wrapper}> 
            <img src='./images/1.png' className={styles.plate}/>
            <img src='./images/2.png' className={styles.pipes}/>
        </div>
    </header>
  )
}
export default Header
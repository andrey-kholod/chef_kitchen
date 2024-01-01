import styles from './Price.module.scss'

const Price = () => {
    return (
        <section className={styles.price}>
            <div className={styles.container_1}>
                <div className={styles.text}>
                    <h3 className={styles.title}>1 day at the price of 23$
                    </h3>
                    <p>Make orders, take part in promotions, recommend us to friends or connect
                        recommend us to friends or connect  </p>
                </div>
            <button className={styles.signUp}>Sign up</button>
                <img src="./images/box.png" className={styles.box}/>
            </div>
        </section>
    )
}
export default Price
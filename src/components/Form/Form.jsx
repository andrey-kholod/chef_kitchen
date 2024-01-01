import styles from './Form.module.scss';

const Form = () => {
    return (
        
        <section className={styles.form}>

            <img className={styles.img} src="./images/oneTomato.png" />
            <div className={styles.text}>
                <p>LET'S GET IN TOUCH</p>
                <p>Make orders, take part in promotions, recommend us to friends or connect </p>
            </div>
            <form className={styles.contacts} onSubmit={e => e.preventDefault()}>
                <div className={styles.name_phone}>
                    <input className={styles.name} type="text" placeholder='Your name'/>
                    <input className={styles.phone} type="text" placeholder='Your phone number'/>
                </div>
                <input type="email" className={styles.email} placeholder='Your E-mail'/>
                <div className={styles.submitBox}>
                    <button className={styles.choice}>Make your choice</button>
                    <a href='https://t.me/taurin_n' target='_blank' className={styles.telegram}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                            <path d="M30.7108 1.04492C30.3931 0.776409 30.0085 0.598775 29.5977 0.530901C29.1869 0.463026 28.7653 0.507446 28.3778 0.65944L1.9563 11.0103C1.49287 11.1864 1.10033 11.5096 0.839121 11.9301C0.57791 12.3506 0.462515 12.8451 0.510704 13.3374C0.553697 13.8296 0.755476 14.2945 1.08578 14.6626C1.41609 15.0307 1.85712 15.2821 2.34275 15.379L9.05548 16.7068V25.0731C9.05524 25.5257 9.18979 25.9682 9.44207 26.3444C9.69435 26.7206 10.053 27.0135 10.4724 27.1861C10.7501 27.2975 11.0463 27.3557 11.3455 27.3574C11.6463 27.3585 11.9443 27.2997 12.222 27.1844C12.4997 27.0692 12.7516 26.8999 12.9629 26.6864L16.6842 22.9886L22.3092 27.9285C22.7244 28.2938 23.2583 28.4967 23.812 28.4996C24.0555 28.5046 24.2979 28.4659 24.5277 28.3854C24.9054 28.2661 25.2453 28.0507 25.5139 27.7602C25.7825 27.4697 25.9705 27.1144 26.0591 26.7292L31.4408 3.28641C31.5348 2.88189 31.5166 2.45945 31.388 2.06451C31.2594 1.66957 31.0252 1.31707 30.7108 1.04492ZM9.92856 14.551L2.80076 13.1375L22.7815 5.29946L9.92856 14.551ZM11.3455 25.0731V18.3058L14.9524 21.4753L11.3455 25.0731ZM23.8263 26.2153L12.0325 15.8644L29.0219 3.62905L23.8263 26.2153Z" fill="white" />
                        </svg>
                        <span>Telegram</span>
                    </a>
                </div>
            </form>
        </section>
    )
}
export default Form
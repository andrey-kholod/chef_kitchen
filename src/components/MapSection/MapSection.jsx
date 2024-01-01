import styles from './MapSection.module.scss'

const MapSection = () => {
  return (
    <section className={styles.map}>
        <h3 className={styles.title}>Delivery areas</h3>
        <input className={styles.input} type="text" placeholder='Enter your address'></input>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.9834637298!2d44.64195302360812!3d41.72760440309818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z0KLQsdC40LvQuNGB0LgsINCT0YDRg9C30LjRjw!5e0!3m2!1sru!2sru!4v1703775621224!5m2!1sru!2sru" width="100%" height="468" style={{border: '0', borderRadius: '22px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}
export default MapSection
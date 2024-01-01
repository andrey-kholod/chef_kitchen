import styles from './ItemCard.module.scss'

const ItemCard = ({title, id, mealTime, info, img}) => {
    const {protein, fat, carbohydrates, energy, totalWeight} = info
    return (
        <div className={styles.container}>
            <div className={styles.id}>0{id}</div>
            <img src={img} alt="" />
                <h5 className={styles.meal}>{mealTime}</h5>
                <h4>{title}</h4>
            <div className={styles.innerContainer}>
                <p>Protein - {protein} g</p>
                <p>Fat - {fat} g</p>
                <p>Carbohydrates - {carbohydrates} g</p>
                <p>Energy - {energy} kcal</p>
                <p>Total Weight: {totalWeight} g</p>
            </div>
        </div>
    )
}
export default ItemCard
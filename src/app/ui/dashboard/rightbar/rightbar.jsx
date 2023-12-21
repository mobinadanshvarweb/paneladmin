import styles from './rightbar.module.css'
const Rightbar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <img src="/ast.jpg" alt="" className={styles.bg} />
                </div>
                
            
            <div className={styles.texts}>
                <span className={styles.notification}>🔥Available Now</span>
                <h3 className={styles.title}>how to use the new version of the admin dashboard?</h3>
                <span className={styles.subtitle}>takes 4 minutes to learn</span>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor itaque laudantium molestias facilis assumenda.
                </p>
                <button className={styles.button}>Watch</button>
            </div>
            </div>

           
        </div>
    )
}
export default Rightbar
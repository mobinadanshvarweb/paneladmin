import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import { Link } from "react-md";
const Productspage = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product..." />
          <Link href="/dashboard/products/add" />
          <button className={styles.addButton}>Add New</button>
        </div>
        <table className={styles.table}>
          <thead>
              <tr>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Price</td>
                  <td>Created At</td>
                  <td>Stock</td>
                  <td>Action</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className={styles.product}>
                      <img src="/avatar.png" alt="" width={40} height={40} className={styles.productImage}/>
                      iphone
                  </td>
                  <td>desc</td>
                  <td>$228</td>
                  <td>Oct 29 2023</td>
                  <td>34</td>
                  <td>
                      <div className={styles.buttons}>
                      <Link href="/dashboard/products/test">
                          <button className={`${styles.button} ${styles.view}`}>Veiw</button>
                      </Link>
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </div>
                  </td>
              </tr>
              <tr>
                  <td className={styles.product}>
                      <img src="/avatar.png" alt="" width={40} height={40} className={styles.productImage}/>
                      iphone
                  </td>
                  <td>desc</td>
                  <td>$228</td>
                  <td>Oct 29 2023</td>
                  <td>34</td>
                  <td>
                      <div className={styles.buttons}>
                      <Link href="/">
                          <button className={`${styles.button} ${styles.view}`}>Veiw</button>
                      </Link>
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </div>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
    )
}
export default Productspage
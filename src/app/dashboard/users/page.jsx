import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import { Link } from "react-md";
const Userspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add" />
        <button className={styles.addButton}>Add New</button>
      </div>
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={styles.user}>
                    <img src="/avatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                    John Doe
                </td>
                <td>john@gmail.com</td>
                <td>13.01.2024</td>
                <td>Admin</td>
                <td>active</td>
                <td>
                    <div className={styles.buttons}>
                    <Link href="/dashboard/users/test">
                        <button className={`${styles.button} ${styles.view}`}>Veiw</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Userspage;

"use client"

import { usePathname } from "next/navigation"
import styles from './navbar.module.css'
// import {MdNotifications , MdOutLineChat , MdPublic , Mdsearch} from 'react-icons/md'

const Navbar = () =>{
    const pathname = usePathname()
    return(
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}></div>
            <div className={styles.search}>
                {/* <MdSearch/> */}
                <input type="text" placeholder="Search..." className={styles.input} />
            </div>
            
           
            <div className={styles.icons}>
            {/* <MdOutLineChat size={20}/> */}
            {/* <MdNotifications size={20}/> */}
            {/* <MdPublic size={20}/> */}
            </div>
        </div>
    )
}
export default Navbar
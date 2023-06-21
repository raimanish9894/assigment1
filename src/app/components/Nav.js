

import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Button from './Button';
import Link from 'next/link';


const Nav = () => {
    
  return (
    <div className={styles.navbar}>
        <div >
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <div className={styles.navbardiv} >
                        <Link href="/">Home</Link>
                        
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <div className={styles.navbardiv} >
                        <Link href="/about" passHref legacyBehavior><a>About Us</a></Link>
                        
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <div className={styles.navbardiv}>
                        <Link href="/services">Services</Link>
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <div className={styles.navbardiv}>
                        <Link href="/blog">Blog</Link>
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <Button color="#FFFFFF" text="Contact Us" size="13px" border="0px" background="#1090CB" borderRadius="6px" width="125px" height="41px" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav;
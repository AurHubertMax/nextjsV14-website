"use client";

import styles from './links.module.css';
import NavLink from './navLink/navLink';
import { useState } from 'react';
import { IoMdHome } from "react-icons/io";

const links = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Blog",
        path: "/blog",
    }
];

const homepageLink = {
    title: <IoMdHome className={styles.homeIcon}/>,
    path: "/",

};

const Links = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.homepageLink}>
                <NavLink item={homepageLink}/>
            </div>
            <div className={styles.otherLinks}>
                {links.map((link => (
                    <NavLink item={link} key={link.title}/>
                )))} 
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => (
                            <NavLink item={link} key={link.title}/>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Links;
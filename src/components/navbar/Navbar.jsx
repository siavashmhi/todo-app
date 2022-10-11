import React from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs'
import styles from './navbar.module.css'

const Navbar = ({todos}) => {
    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <h2>Create your Todos for work hard</h2>
                <div className={styles.countContainer}>
                    <BsFillBookmarkFill color='#fff' fontSize='1.5rem' />
                    <span className={styles.counter}>{todos.length}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
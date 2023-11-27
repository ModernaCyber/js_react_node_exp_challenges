import React from 'react'
import styles from './app.module.css';
import Contact from './src/components/contact/contact';
import Subscribe from './src/components/subscribe/subscribe';
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
          <Contact/>
          <Subscribe/>
        </div>
    </div>
  )
}

export default Footer
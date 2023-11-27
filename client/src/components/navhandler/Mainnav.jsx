import React from 'react'
import styles from './main_nav.module.css';
const MainNav = ({ active, setActive, apps }) => {

  return (
    <div className={styles.main_nav}>
      {
        apps.map((app, index) => (
          <a onClick={() => setActive(index)} className={index === active ? `${styles.active}` : `${styles.inactive}`} key={index}> {app.name.toUpperCase()}</a>
        ))
      }
    </div>
  )
}

export default MainNav
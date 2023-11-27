import React from 'react'
import styles from './apphandler.module.css';
import MainNav from '../navhandler/Mainnav.jsx';

import Layout from '../layout/Layout.jsx';

import { all_apps } from './apps.jsx';


const AppHandler = () => {
    const [active, setActive] = React.useState(0)
    const apps = all_apps

    return (
        <div className={styles.classhandler}>

            <MainNav active={active} setActive={setActive} apps={apps} />

            <Layout>

                {
                    apps.map((app, index) => (<div key={index} className={styles.challenge} >{active === index ? app.value : null}
                    </div>))
                }

            </Layout>
        </div>
    )
}

export default AppHandler
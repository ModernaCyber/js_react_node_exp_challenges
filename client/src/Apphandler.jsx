import React from 'react'
import styles from './apphandler.module.css';
import MainNav from './Mainnav.jsx';
import Counter from './challenges/counter/App.jsx';
import Home from './components/Home/Home.jsx';
import Timer from './challenges/timer/App.jsx';
import Layout from './Layout.jsx';
import Todos from './challenges/todo/todos.jsx';
import Zustand from './challenges/zustand/app.jsx';


const AppHandler = () => {
    const [active, setActive] = React.useState(0)
    const apps = [
        {
            name: 'Home',
            value: <Home />,
        },
        {
            name: 'Counter',
            value: <Counter />,
        }, {
            name: 'Timer',
            value: <Timer />,
        }, {
            name: 'Todos',
            value: <Todos />,
        }, {
            name: 'Zustand',
            value: <Zustand />,
        }
    ]

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
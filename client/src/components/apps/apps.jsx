import Counter from '../../challenges/counter/App.jsx';
import Home from '../Home/Home.jsx';
import Timer from '../../challenges/timer/App.jsx';
import Todos from '../../challenges/todo/todos.jsx';
import Zustand from '../../challenges/zustand/app.jsx';
import Footer from '../../challenges/footer/app.jsx';
import Navbar from '../../challenges/navbar/app.jsx';
import AppTest from '../../challenges/tests/react-test-library-jest/src/App.jsx';

export const all_apps = [
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
    }, {
        name: 'TestApp',
        value: <AppTest />,
    }, {
        name: 'Navbar',
        value: <Navbar />,
    }, {
        name: 'Footer',
        value: <Footer />,
    }
]
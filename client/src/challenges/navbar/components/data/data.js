import SampleComponent from "../submenu/sample";

export const menu = [{
    menu: 'Home',
    level: 1,
    component: null,
    submenu: {
        menu: 'Home',
        level: 2,
        component: <SampleComponent />,
        submenu: {
            menu: 'Home',
            level: 3,
            submenu: {
                menu: 'Home',
                level: 4,
                submenu: null,
            }
        }
    }
},
{
    menu: 'About',
    level: 1,
    component: null,
    submenu: {
        menu: 'About',
        level: 2,
        component: <SampleComponent />,
        submenu: {
            menu: 'About',
            level: 3,
            submenu: {
                menu: 'About',
                level: 4,
                submenu: null,
            }
        }
    }
}, {
    menu: 'Contact',
    level: 1,
    component: null,
    submenu: {
        menu: 'Contact',
        level: 2,
        component: <SampleComponent />,
        submenu: {
            menu: 'Contact',
            level: 3,
            submenu: {
                menu: 'Contact',
                level: 4,
                submenu: null,
            }
        }
    }
}]
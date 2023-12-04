
import Banner from './components/Banner/Banner';
// import { BrowserRouter, Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import styles from './app.module.css';

function AppTest() {
  return (

    < div className = { styles.app } >
      <Banner />
      <TodoPage/>
      {/* <FollowersPage/> */}
      {/* <BrowserRouter >
      <Switch>
        <Route strict exact path="/" element={<TodoPage/>}/>
        <Route strict exact path="/followers" element={<FollowersPage/>}/>
      </Switch>  
      </BrowserRouter> */}
    </div >

  );
}


export default AppTest;

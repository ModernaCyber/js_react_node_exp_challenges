import store from "./app/store"
import Provider from '@reduxjs/toolkit'
function App() {

  return (
   <Provider store={store} >
    <div className="app"></div>
   </Provider>
  )
}

export default App

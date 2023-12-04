import { legacy_createStore as createStore } from "redux";

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

const iinitialState = {
    count : 0,
}

const reducer =(state = iinitialState, action)=>{
    switch (action.type) {
        case ADD:
            return {
                ...state,
                count: state.count++
            }

        case SUBTRACT:
            
           return {
            ...state,
            count: state.count--
        }
        default:
            return {
                ...state,
            }
    }
}
const addAction =
     {
        type: ADD,
        payload:0
    }

const substractAction ={
    type: SUBTRACT,
    payload: null
}
const store = createStore(reducer)

const unsubscribe = store.subscribe(()=>{
    console.log('state'+ JSON.stringify(store.getState())+' is subscribed')    
})
store.dispatch(addAction);
store.dispatch(substractAction)

unsubscribe();
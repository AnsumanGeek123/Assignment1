import { createStore, applyMiddleware, compose } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import billReducers from "./reducers";


const initialState = {};
const middleware = [thunk];


// const store = createStore(
//   billReducers,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;



//creating store
const store = createStore(
        billReducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
);


store.subscribe(()=> {
    console.log(store.getState());
})


export default store;


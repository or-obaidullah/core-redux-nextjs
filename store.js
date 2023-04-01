//Counter
// const { createStore } = require("redux");
// const { default: counterReducer } = require("./services/reducers/counterReducer");
// const store = createStore(counterReducer);
// export default store;




//todos
import todosReducer from "./services/reducers/todosReducer";
import thunk from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");
const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;


//combine not working
// import thunk from "redux-thunk";
// const { createStore, applyMiddleware } = require("redux");
// const { combineReducers } = require("redux");
// const { default: todosReducer } = require("./services/reducers/todosReducer");
// const { default: counterReducer } = require("./services/reducers/counterReducer");

// const rootReducer = combineReducers({
//     count: counterReducer,
//     todos: todosReducer
// })
// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;


import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import gameReducer from "./gameReducer";

// const myStore = createStore(counterReducer)
// const myStore = createStore(gameReducer)
const rootReducer = combineReducers({
    counter: counterReducer,
    game: gameReducer
})

const myStore = createStore(rootReducer)


export default myStore
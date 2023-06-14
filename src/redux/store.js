import { createStore } from "redux";
import rootreducers from "./reducers/main";


const store = createStore(
    rootreducers
);

export default store;
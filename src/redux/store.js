import { createStore } from "redux";
import rootreducers from "./reducers/main";
import { persistStore, persistReducer} from "redux-persist";
import  storage  from "redux-persist/lib/storage";

const persistConfig={
key :"persistkey",
storage
}
const persistedReducer = persistReducer(persistConfig,rootreducers)
const store = createStore(
    persistedReducer
);
const persistor= persistStore(store)
export default store;
export {persistor}
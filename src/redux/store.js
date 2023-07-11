import { createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import persistedReducer from "./persistConfig";

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;

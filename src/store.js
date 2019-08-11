import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";

import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);

// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(reduxThunk))
// );

// export default store;

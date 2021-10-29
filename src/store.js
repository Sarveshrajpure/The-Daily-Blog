import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/index";
import ReduxThunk from "redux-thunk";
import PromiseMiddleWare from "redux-promise";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares = [ReduxThunk, PromiseMiddleWare, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);
export const persistor = persistStore(store);

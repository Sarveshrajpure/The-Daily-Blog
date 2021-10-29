import { persistReducer } from "redux-persist";
import HomePageReducer from "./HomePageReducer";
import LoginPageReducer from "./LoginPageReduces";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["Home", "login"],
  blaclList: [],
};

const rootReducer = combineReducers({
  Home: HomePageReducer,
  Login_blogger: LoginPageReducer,
});

export default persistReducer(persistConfig, rootReducer);

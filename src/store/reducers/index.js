import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "./dashboardReducer";
import exploreReducer from "./exploreReducer";
import selectedgraphReducer from "./selectedgraphReducer";
import sensorReducer from "./sensorReducer";
import slideinReducer from "./slideinReducer";

const persistConfig = {
  key: "freshtrack",
  storage,
  blacklist: ["auth.loading"],
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  explore: exploreReducer,
  sensor: sensorReducer,
  slidein: slideinReducer,
  selectedgraph: selectedgraphReducer,
});

export default persistReducer(persistConfig, rootReducer);

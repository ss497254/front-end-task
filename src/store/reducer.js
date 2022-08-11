import { combineReducers } from "redux";
import bucketReducer from "./reducers/bucketReducer";
import cardReducer from "./reducers/cardReducer";
import historyReducer from "./reducers/historyReducer";

const reducer = combineReducers({
  bucket: bucketReducer,
  card: cardReducer,
  history: historyReducer,
});

export default reducer;

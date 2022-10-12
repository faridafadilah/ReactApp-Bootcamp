import { createStore } from "redux"; // Import createStore
import rootReducer from "./reducer"; // Import reducer yang sudah dibuat
import { composeWithDevTools } from 'redux-devtools-extension';

// Membuat Store
export default createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools()
  );
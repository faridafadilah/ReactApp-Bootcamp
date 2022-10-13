import { createStore, applyMiddleware, compose } from "redux"; // Import createStore
import rootReducer from "./reducer"; // Import reducer yang sudah dibuat
import { composeWithDevTools } from 'redux-devtools-extension'; // import devtools
import thunk from "redux-thunk"; // import redux thunk

// Membuat Store
export default createStore(rootReducer, compose(applyMiddleware(thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools())
  );
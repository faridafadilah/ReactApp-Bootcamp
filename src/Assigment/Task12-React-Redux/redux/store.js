import { createStore } from "redux"; // Import createStore
import rootReducer from "./reducer"; // Import reducer yang sudah dibuat

// Membuat Store
export default createStore(rootReducer);
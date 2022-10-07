// Memanggil Type yang sudah diinisialisasikan
import { INCREMENT, DECREMENT, RESET } from "../types/counter";

// Menginisialisasikan State
const initialState = {
    count: 0,
};

// Pembuatan reducer dan Membuat Case Logic
function reducer(state= initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
}

export default reducer;
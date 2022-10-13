// Memanggil Type yang sudah diinisialisasikan
import { SUBMIT } from "../types/data";

// Menginisialisasikan State
const initialState = {
    data: []
};

// Pembuatan reducer dan Membuat Case Logic
function reducer(state= initialState, action) {
    switch (action.type) {
        case SUBMIT:
            return {
                ...state,
                data: action.payload.data,
            }
        default:
            return state;
    }
}

export default reducer;
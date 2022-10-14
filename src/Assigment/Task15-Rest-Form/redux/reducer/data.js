// Memanggil Type yang sudah diinisialisasikan
import { LIST_DATA, ADD_DATA, DETAIL, DELETE } from "../types/data";

// Menginisialisasikan State
const initialState = {
    // State Create Data
    data: [],
    dataLoading: false,
    dataError: false,
    // State List Data
    listData: false,
    listDataLoading: false,
    listDataError: false,
    // State Detail Data
    detailData: [],
    // State Delete Data
    deleteData: false,
    deleteDataLoading: false,
    deleteDataError: false,
};

// Pembuatan reducer dan Membuat Case Logic
function reducer(state= initialState, action) {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: action.payload.data,
                dataLoading: action.payload.loading,
                dataError: action.payload.errorMessage
            }
        case LIST_DATA:
            return {
                ...state,
                listData: action.payload.data,
                listDataLoading: action.payload.loading,
                listDataError: action.payload.errorMessage
            }
        case DETAIL:
            return {
                ...state,
                detailData: action.payload.data
            }
        case DELETE:
            return {
                ...state,
                deleteData: action.payload.data,
                deleteDataLoading: action.payload.loading,
                deleteDataError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default reducer;
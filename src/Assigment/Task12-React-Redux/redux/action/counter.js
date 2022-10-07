// Pemanggilan Type yang diinisialisasikan
import { INCREMENT, DECREMENT, RESET } from "../types/counter";

// Membuat function untuk logic aplikasi 
// Akan berisi Objek dengan Type INCREMENT, DECREMENT, RESET
export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const reset = () => ({
    type: RESET
});
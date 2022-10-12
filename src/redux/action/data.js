// Pemanggilan Type yang diinisialisasikan
import { SUBMIT } from "../types/data";

// Membuat function untuk logic aplikasi 
// Akan berisi Objek dengan Type INCREMENT, DECREMENT, RESET
export const submit = (data) => ({
    type: SUBMIT,
    payload: data
});

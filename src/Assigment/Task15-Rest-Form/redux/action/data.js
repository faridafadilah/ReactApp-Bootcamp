// Pemanggilan Type yang diinisialisasikan
import { SUBMIT } from "../types/data";
import axios from 'axios';

// Membuat function untuk logic aplikasi 
export const submit = (data) => {
    return (dispatch) => {
        dispatch({
            type: SUBMIT,
            payload: {
                data: data,
            }
        })
        // Rest Post menggunakan json server
        axios({
            method: 'POST',
            url: 'http://localhost:3004/form',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                console.log('berhasil : ', response.data);
                dispatch({
                    type: SUBMIT,
                    payload: {
                        data: data
                    }
                })
            })
            .catch((error) => {
                console.log('Data gagal', error.message);
            });
    }
}
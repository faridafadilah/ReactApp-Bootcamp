// Pemanggilan Type yang diinisialisasikan
import { ADD_DATA, LIST_DATA, DETAIL, DELETE } from "../types/data";
import axios from "axios";

// GET DATA
export const listdata = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: LIST_DATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3004/form",
      timeout: 120000,
    })
      .then((response) => {
        console.log("Data List Berhasil: ", response.data);
        dispatch({
          type: LIST_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("List Data Gagal");
        dispatch({
          type: LIST_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// ADD DATA
export const addData = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_DATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Rest Post menggunakan json server
    axios({
      method: "POST",
      url: "http://localhost:3004/form",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("Data Berhasil Ditambahkan:  ", response.data);
        dispatch({
          type: ADD_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("Data gagal Ditambahkan");
        dispatch({
          type: ADD_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// Detail Data By Id
export const detail = (id) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL,
      payload: {
        data: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:3004/form/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("Detail Berhasil: ", response.data);
        dispatch({
          type: DETAIL,
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.log("Data Gagal");
        dispatch({
          type: DETAIL,
          payload: {
            data: false,
          },
        });
      });
  };
};

// Delete Data by Id
export const deleteData = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      url: "http://localhost:3004/form/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("Data Berhasil diHapus:  ", response.data);
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("Data gagal diHapus");
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
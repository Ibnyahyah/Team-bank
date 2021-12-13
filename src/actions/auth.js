import { AUTH } from '../constants/actionTypes';
import * as api from '../api'
import Swal from "sweetalert2";

export const signIn = (formData) => async (dispatch) => {
    try {
        
        const { data } = await api.signIn(formData);
        let responseData = data.data

        dispatch({ type: AUTH, data: responseData})

        // history.push('/')
        if (data) {
            Swal.fire("User Logged in Succesfully");
            setTimeout(() => {
              window.location.replace("/overview");
            }, 3000);
          }
        // window.location.replace("/")
    } catch (error) {
        if (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.response.data.message}`,
            });
          }
        console.log(error)
    }
}

export const signUp = (formData) => async (dispatch) => {
    try {

        const { data } = await api.signUp(formData);
        let responseData = data.data 

        dispatch({ type: AUTH, data: responseData })

        if (data) {
            Swal.fire("User Logged in Succesfully");
            setTimeout(() => {
              window.location.replace("/overview");
            }, 3000);
          }
        
        // history.push('/')
        // window.location.replace("/")
    } catch (error) {
        if (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.response.data.message}`,
            });
          }
        console.log(error)
    }
}
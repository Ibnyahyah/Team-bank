import { CONFIRM_RECEIVER_ACCOUNT, SUCCESSFUL_TRANSFER } from "../constants/actionTypes";
import * as api from "../api";
import Swal from "sweetalert2";

export const confirmAccountUsingEmail = (formData) => async (dispatch) => {
  try {
    Swal.showLoading();

    const { data } = await api.confirmAccountUsingEmail(formData);
    let responseData = data.data;

    dispatch({ type: CONFIRM_RECEIVER_ACCOUNT, data: responseData });

    // history.push('/')
    if (data) {

      let timerInterval;
      Swal.fire({
        title: "Success!",
        html: `${data.message}`,
        timer: 2000,
        didOpen: () => {
          timerInterval = setInterval(() => {
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
  } catch (error) {
    if (error) {
      let timerInterval;
      Swal.fire({
        title: "Error!",
        html: `${error.response.data.message}`,
        timer: 2000,
        didOpen: () => {
          timerInterval = setInterval(() => {
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
    console.log(error);
  }
};

export const confirmAccountUsingUserName = (formData) => async (dispatch) => {
  try {
    Swal.showLoading();

    const { data } = await api.confirmAccountUsingUserName(formData);
    let responseData = data.data;

    dispatch({ type: CONFIRM_RECEIVER_ACCOUNT, data: responseData });

    // history.push('/')
    if (data) {

      let timerInterval;
      Swal.fire({
        title: "Success!",
        html: `${data.message}`,
        timer: 2000,
        didOpen: () => {
          timerInterval = setInterval(() => {
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
  } catch (error) {
    if (error) {
      let timerInterval;
      Swal.fire({
        title: "Error!",
        html: `${error.response.data.message}`,
        timer: 2000,
        didOpen: () => {
          timerInterval = setInterval(() => {
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
    console.log(error);
  }
};

export const confirmAccountUsingAccountNumber =
  (formData) => async (dispatch) => {
    try {
      Swal.showLoading();

      const { data } = await api.confirmAccountUsingAccountNumber(formData);
      let responseData = data.data;

      dispatch({ type: CONFIRM_RECEIVER_ACCOUNT, data: responseData });

      // history.push('/')
      if (data) {

        let timerInterval;
        Swal.fire({
          title: "Success!",
          html: `${data.message}`,
          timer: 2000,
          didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
    } catch (error) {
      if (error) {
        let timerInterval;
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          timer: 2000,
          didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
      console.log(error);
    }
  };

export const transferUsingAccountNumber = (formData) => async (dispatch) => {
    try {
      Swal.showLoading();

      const user = JSON.parse(localStorage.getItem("profile"));
      
  
      const { data } = await api.transferUsingAccountNumber(formData);

      const response = await api.getUserById(user.user._id)
      const userFetched = response.data.data
  
      dispatch({ type: SUCCESSFUL_TRANSFER, user: userFetched });
      // console.log(data)
      // dispatch({ type: CONFIRM_RECEIVER_ACCOUNT, user: userFetched });
      // history.push('/')
      if (response) {
  
        let timerInterval;
        Swal.fire({
          title: "Success!",
          html: `${data.message}`,
          timer: 80000,
          didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
      setTimeout(() => {
        window.location.replace("/overview")
      }, 10000)
    } catch (error) {
      if (error) {
        let timerInterval;
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          timer: 2000,
          didOpen: () => {
            timerInterval = setInterval(() => {
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
      console.log(error);
    }
};
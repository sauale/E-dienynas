import axios from "axios";



export const login = (user) => {
    return axios
      .post("http://localhost:5000/students/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data == "z") {
        } else {
          localStorage.setItem("usertoken", response.data);
          return response.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const change_Username = (new_username) =>{
    return axios
      .post("http://localhost:5000/students/changeUsername", {
        username: new_username,
      })
      .then((response) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }
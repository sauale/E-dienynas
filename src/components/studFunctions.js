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


  export const change_Username = (user) =>{
    return axios
      .post("http://localhost:5000/students/changeUsername", {
        username: user.username,
        new_username : user.new_username,
        password: user.password,
        confirm_password: user.confirm_password
      })
      .then((response) => {
        if (response.data == "z") {
          alert("NETEISINGAS SLAPTAŽODIS")
        }
        else
        {
        window.location.href = "/";
        alert("Prisijungimo vardas pakeistas. Prisijunkite iš naujo")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
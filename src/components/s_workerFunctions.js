import axios from "axios";

export const login = (user) => {
  return axios
    .post("http://localhost:5000/s_workers/login", {
      username: user.username,
      password: user.password,
    })

    .then((response) => {
      if (response.data == "z") {
        window.alert("Neteisingas slaptazodis ar email");
      } else {
        localStorage.setItem("usertoken", response.data);
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

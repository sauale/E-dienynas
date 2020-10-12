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
export const registerStud = (newStud) => {
  return axios
    .post("http://localhost:5000/students/registerStud", {
      username: newStud.username,
      password: newStud.password,
      name: newStud.name,
      surname: newStud.surname,
      id: newStud.id,
      class: newStud.class,
      school: newStud.school,
    })
    .then((response) => {
      if (response.data == "z") {
        window.alert("Email jau egzistuoja");
      }
    });
};
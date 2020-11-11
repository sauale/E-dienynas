import axios from "axios";



export const loginTeacher = (user) => {
    return axios
      .post("http://localhost:5000/teachers/login", {
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

  export const getStudList = (clas,school) => {
    return axios
      .post("http://localhost:5000/students", {
        claze: JSON.stringify(clas),
        school: school
      })
      .then((response) => {
          const data = response.data;
          this.setState({ students: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
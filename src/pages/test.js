const axios = require("axios");

function test() {
  let url = "http://192.168.0.76:8080/home/main";
  axios
    .post(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

test();

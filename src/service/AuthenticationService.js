import axios from "axios";

//class AuthenticationService {

// send username, password to the SERVER
export const executeJwtAuthenticationService = (username, password) => {
  return axios.post("http://192.168.0.76:8080/authenticate/token", {
    username,
    password,
  });
};






export const executeHelloService = () => {
  console.log("===executeHelloService===");
  return axios.get("http://localhost:8080/hello");
};

export const registerSuccessfulLoginForJwt = (username, token) => {
  console.log("===registerSuccessfulLoginForJwt===");
  localStorage.setItem("token", token);
  localStorage.setItem("authenticatedUser", username);
  // sessionStorage.setItem('authenticatedUser', username)
  //this.setupAxiosInterceptors(this.createJWTToken(token))
  setupAxiosInterceptors();
};

const createJWTToken = (token) => {
  return "Bearer " + token;
};

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

export const logout = () => {
  //sessionStorage.removeItem('authenticatedUser');
  localStorage.removeItem("authenticatedUser");
  localStorage.removeItem("token");
};

export const isUserLoggedIn = () => {
  //let user = sessionStorage.getItem('authenticatedUser')
  const token = localStorage.getItem("token");
  console.log("===UserloggedInCheck===");
  console.log(token);

  if (token) {
    return true;
  }
  //if(user===null) return false
  return false;
};
export const getLoggedInUserName = () => {
  //let user = sessionStorage.getItem('authenticatedUser')
  let user = localStorage.getItem("authenticatedUser");
  if (user === null) return "";
  return user;
};
//}

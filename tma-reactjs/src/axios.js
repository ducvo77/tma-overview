import axios from "axios";
import firebase from "firebase/compat/app";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  return new Promise((resolve, reject) => {
    const waitTimmer = setTimeout(() => {
      reject(null);
    }, 10000);

    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          reject(null);
        }
        const token = await user.getIdToken();
        resolve(token);
        unregisterAuthObserver();
        clearTimeout(waitTimmer);
      });
  });
};

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    const token = await getFirebaseToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;

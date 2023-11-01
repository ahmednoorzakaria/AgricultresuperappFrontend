import { ColorRing } from "react-loader-spinner";
import { createContext } from "react";

const AUTH_USER = "authUser";

const storeAuthUserOnLocalStorage = (authUser) => {
  localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
};

const getAuthUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(AUTH_USER));
};

const removeAuthUserFromLocalStorage = () => {
  localStorage.removeItem(AUTH_USER);
};

const getHTTPHeaderWithToken = () => {
  const authUser = getAuthUserFromLocalStorage(); // Retrieve the authUser
  if (authUser) {
    return {
      headers: {
        Authorization: `Bearer ${authUser}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } else {
    return {
      headers: {
        "Content-Type": "application.json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};

const getSendingDataSpinner = () => {
  return `<ColorRing
    visible={true}
    height={50}
    width={50}
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />`;
};

// Define AuthContext
const AuthContext = createContext();

// Define MAIN_DOMAIN
const MAIN_DOMAIN = 'your_main_domain_here';

export {
  storeAuthUserOnLocalStorage,
  getAuthUserFromLocalStorage,
  removeAuthUserFromLocalStorage,
  getHTTPHeaderWithToken,
  getSendingDataSpinner,
  AuthContext, // Export AuthContext
  MAIN_DOMAIN, // Export MAIN_DOMAIN
};

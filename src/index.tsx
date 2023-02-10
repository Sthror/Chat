import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "summer-marker-368707.firebaseapp.com",
  projectId: "summer-marker-368707",
  storageBucket: "summer-marker-368707.appspot.com",
  messagingSenderId: "398577199712",
  appId: process.env.REACT_FIREBASE_API_ID,
  measurementId: process.env.EACT_FIREBASE_API_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

export const Context = createContext<any>(null);

root.render(
  <React.StrictMode>
    <Context.Provider value={{ db }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

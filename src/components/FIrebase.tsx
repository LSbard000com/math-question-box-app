import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2O8CssAc4i_L8m7R_6ICoKYucmUE9GEY",
  authDomain: "math-question-box.firebaseapp.com",
  projectId: "math-question-box",
  storageBucket: "math-question-box.appspot.com",
  messagingSenderId: "119451832570",
  appId: "1:119451832570:web:89b7d7fce43540f6acf943"
};

export const app = initializeApp(firebaseConfig);
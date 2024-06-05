import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMLwpi7FGpkFCAK9mM8IverpYQbRLkXs",
  authDomain: "bierens-b75ed.firebaseapp.com",
  projectId: "bierens-b75ed",
  storageBucket: "bierens-b75ed.appspot.com",
  messagingSenderId: "53242845319",
  appId: "1:53242845319:web:427a3948e363d0f277c022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
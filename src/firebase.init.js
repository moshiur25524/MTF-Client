// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKABlRZfM_Aq_Ma0VnteJSOjzMzuJ_r9w",
  authDomain: "machine-tools-factory.firebaseapp.com",
  projectId: "machine-tools-factory",
  storageBucket: "machine-tools-factory.appspot.com",
  messagingSenderId: "234054774682",
  appId: "1:234054774682:web:38879d51e4aad2d1949423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
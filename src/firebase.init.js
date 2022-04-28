// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR1HfAtZKd5A7sBcV4WUi2Qq6Gm88CnH0",
    authDomain: "assignment-11-client-a557f.firebaseapp.com",
    projectId: "assignment-11-client-a557f",
    storageBucket: "assignment-11-client-a557f.appspot.com",
    messagingSenderId: "380003789684",
    appId: "1:380003789684:web:5b89c6d8eca9d2fa6d1a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
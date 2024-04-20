// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLquitWoAZY3rs3wGjsQOFOi3xre8xewI",
    authDomain: "pawn-bolo.firebaseapp.com",
    projectId: "pawn-bolo",
    storageBucket: "pawn-bolo.appspot.com",
    messagingSenderId: "706167557400",
    appId: "1:706167557400:web:740be7ba9329b697f2a26d",
    measurementId: "G-HXMCM4RSPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
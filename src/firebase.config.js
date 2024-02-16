// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzZc-GOHzh83pktwvZCUpfWG6cSlSrIZg",
  authDomain: "linkedin-fc646.firebaseapp.com",
  projectId: "linkedin-fc646",
  storageBucket: "linkedin-fc646.appspot.com",
  messagingSenderId: "827796905030",
  appId: "1:827796905030:web:e7c3d1cfdda2d7ef14be47",
  measurementId: "G-22F424H3G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO.. Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQII3CAOT2xhcjMsgQq8FOuRfCDX-wtXc",
  authDomain: "firetest-80b95.firebaseapp.com",
  projectId: "firetest-80b95",
  storageBucket: "firetest-80b95.appspot.com",
  messagingSenderId: "411433274119",
  appId: "1:411433274119:web:8028648545ff3082de93a2",
  measurementId: "G-ZEXWRZVGZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJyYhYW5rnGZLbavp809oamLh-fWDzko",
  authDomain: "my-4bcd9.firebaseapp.com",
  projectId: "my-4bcd9",
  storageBucket: "my-4bcd9.appspot.com",
  messagingSenderId: "734399754937",
  appId: "1:734399754937:web:263c5a673b0b594b25a168",
  measurementId: "G-C7D24J0TCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJyYhYW5rnGZLbavp809oamLh-fWDzko",
  authDomain: "my-4bcd9.firebaseapp.com",
  projectId: "my-4bcd9",
  storageBucket: "my-4bcd9.appspot.com",
  messagingSenderId: "734399754937",
  appId: "1:734399754937:web:263c5a673b0b594b25a168",
  measurementId: "G-C7D24J0TCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
>>>>>>> 114c00d (Inicial commit after brach rename)
const analytics = getAnalytics(app);
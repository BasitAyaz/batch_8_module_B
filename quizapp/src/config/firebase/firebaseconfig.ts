// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWNfsPn4VChXCQEMwXxAQBXVOeJXilbM",
  authDomain: "zzaadmin.firebaseapp.com",
  databaseURL: "https://zzaadmin-default-rtdb.firebaseio.com",
  projectId: "zzaadmin",
  storageBucket: "zzaadmin.appspot.com",
  messagingSenderId: "589107365746",
  appId: "1:589107365746:web:eda6a0a59accf48b6a7feb",
  measurementId: "G-W294EXYFP9"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'





import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBgYEQSOtwBYM8vQG2IhUIDDmvyFeM8vLY",
//   authDomain: "authentication-59398.firebaseapp.com",
//   projectId: "authentication-59398",
//   storageBucket: "authentication-59398.appspot.com",
//   messagingSenderId: "846374935195",
//   appId: "1:846374935195:web:03101aa34f4263a862c43e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-SatB5W2LUCci4IXnbGsJkZaJCj4sADQ",
  authDomain: "smit-e17d2.firebaseapp.com",
  projectId: "smit-e17d2",
  storageBucket: "smit-e17d2.appspot.com",
  messagingSenderId: "940840059659",
  appId: "1:940840059659:web:dad2c72ea1e3799e63d80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);                           






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

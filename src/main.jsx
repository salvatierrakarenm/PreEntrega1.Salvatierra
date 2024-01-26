import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_2XWa-J9wV_GfJTN44VOCRU1tGILwvg",
  authDomain: "tienda-react-karenst.firebaseapp.com",
  projectId: "tienda-react-karenst",
  storageBucket: "tienda-react-karenst.appspot.com",
  messagingSenderId: "278368637926",
  appId: "1:278368637926:web:fb3bb5d911a5c44ebf3c27"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

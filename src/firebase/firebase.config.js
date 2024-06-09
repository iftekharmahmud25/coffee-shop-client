// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsmM5wgfBUqHf5HMgwSDaX6ma2uKJ_HXg",
  authDomain: "ainan-coffee-shop.firebaseapp.com",
  projectId: "ainan-coffee-shop",
  storageBucket: "ainan-coffee-shop.appspot.com",
  messagingSenderId: "228277802116",
  appId: "1:228277802116:web:9837eea8063ea471f9ded1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
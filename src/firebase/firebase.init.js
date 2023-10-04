// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ep_nKpk6nSG7m3Nvd-092hnrlP7ibjY",
  authDomain: "dragon-news-5eb15.firebaseapp.com",
  projectId: "dragon-news-5eb15",
  storageBucket: "dragon-news-5eb15.appspot.com",
  messagingSenderId: "613829668099",
  appId: "1:613829668099:web:2cdbd611f574dbcd82cd36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
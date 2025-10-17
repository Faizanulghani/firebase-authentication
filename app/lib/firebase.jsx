import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWs2wNmTiXPPZ3697cf8R9YxXMGdBUU6o",
  authDomain: "fir-authentication-9c831.firebaseapp.com",
  projectId: "fir-authentication-9c831",
  storageBucket: "fir-authentication-9c831.firebasestorage.app",
  messagingSenderId: "831563024605",
  appId: "1:831563024605:web:bb0c4a9722cb4e4998b334",
  measurementId: "G-HDEQ69EN1J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

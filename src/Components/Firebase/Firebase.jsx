// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;


const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "stylespot-efd4d.firebaseapp.com",
  projectId: "stylespot-efd4d",
  storageBucket: "stylespot-efd4d.appspot.com",
  messagingSenderId: "437968702023",
  appId: "1:437968702023:web:e00b718bb754859284bf62",
  measurementId: "G-RFTC5ZSKVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth();
export {app,auth};
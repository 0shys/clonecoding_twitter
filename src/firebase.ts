import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhi8bLGU13oKy7kMhNepy93aCRgkgRrjo",
  authDomain: "twitter-reloaded-86f30.firebaseapp.com",
  projectId: "twitter-reloaded-86f30",
  storageBucket: "twitter-reloaded-86f30.firebasestorage.app",
  messagingSenderId: "196522428950",
  appId: "1:196522428950:web:6ab75c44c83cf7a6e98337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
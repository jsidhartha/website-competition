// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, increment } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlR4QxTG6EGwkHXJgQE-_WS-33cs9ytZY",
  authDomain: "website-competition-fd59e.firebaseapp.com",
  projectId: "website-competition-fd59e",
  storageBucket: "website-competition-fd59e.firebasestorage.app",
  messagingSenderId: "558845407480",
  appId: "1:558845407480:web:cef69f716712998e524b0d",
  measurementId: "G-3344P4ZNVE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, getDocs, updateDoc, doc, increment };
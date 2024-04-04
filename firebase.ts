import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsJbOx5iY-88qWUJJetrlyWqcwha80ezw",
  authDomain: "chatapp-f4ea8.firebaseapp.com",
  projectId: "chatapp-f4ea8",
  storageBucket: "chatapp-f4ea8.appspot.com",
  messagingSenderId: "912056774535",
  appId: "1:912056774535:web:21c5acefff166c000cad22"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
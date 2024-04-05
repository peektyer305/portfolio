import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN_KEY,
  projectId: process.env.NEXT_PUBLIC_PROJECTID_KEY,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET_KEY,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID_KEY,
  appId: process.env.NEXT_PUBLIC_APPID_KEY,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
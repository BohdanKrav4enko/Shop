import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2pPhyW2tjZrSNrtpupgBIt1d5QXBJbYY",
    authDomain: "shop-a261c.firebaseapp.com",
    projectId: "shop-a261c",
    storageBucket: "shop-a261c.firebasestorage.app",
    messagingSenderId: "602329759071",
    appId: "1:602329759071:web:f3e8dd97f1d5adce664aea",
    measurementId: "G-8ZMCY0ZRCP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const database = () => {

    const firebaseConfig = {
    apiKey: "AIzaSyBHL8pQdAFF-1gvqDdejphfd3_Zb3sk2BE",
    authDomain: "kathzm-b5783.firebaseapp.com",
    projectId: "kathzm-b5783",
    storageBucket: "kathzm-b5783.appspot.com",
    messagingSenderId: "214773002445",
    appId: "1:214773002445:web:8f5aee6780653b5a0b7984"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return db;

}

export default database;

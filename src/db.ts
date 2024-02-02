import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
export const db = getFirestore(app);

export default async function fetchProducts() {
  try {
    let ref = collection(db, 'Products');
    const docSnap = await getDocs(ref);
    const result = docSnap.docs.map(doc => doc.data()).sort((a, b) => b.interactions - a.interactions);
    return result;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}